// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./accounts.sol"; // Import the UserManagement contract
import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; // Import the ERC20 interface
import "@openzeppelin/contracts/access/Ownable.sol";

contract UserManagementDAO is Ownable(msg.sender) {
    UserManagement private userManagement;
    IERC20 private token;

    // Constants
    uint256 public constant STAKE_AMOUNT = 1000 * 10**18; // Adjust token decimals accordingly
    uint256 public constant STAKE_DURATION = 7 days;

    // Structs
    struct Staker {
        uint256 amount;
        uint256 stakeTime;
    }

    struct Vote {
        address targetUser;
        string newUsername;
        bool isBan;
        uint256 affirmativeVotes;
        mapping(address => bool) voted;
    }

    // State variables
    Vote[] public votes;
    mapping(address => Staker) public stakers;

    // Events
    event Stake(address indexed user, uint256 amount, uint256 stakeTime);
    event Unstake(address indexed user, uint256 amount);
    event VoteCreated(uint256 indexed voteId, address indexed targetUser, string newUsername, bool isBan);
    event Voted(uint256 indexed voteId, address indexed voter, bool vote);
    event ActionExecuted(uint256 indexed voteId, bool success);

    // Constructor
    constructor(address _userManagementAddress, address _tokenAddress) {
        userManagement = UserManagement(_userManagementAddress);
        token = IERC20(_tokenAddress);
        transferOwnership(_userManagementAddress);
    }

    // Functions
    function stake() external {
        require(token.transferFrom(msg.sender, address(this), STAKE_AMOUNT), "Transfer failed");
        stakers[msg.sender].amount += STAKE_AMOUNT;
        stakers[msg.sender].stakeTime = block.timestamp;
        emit Stake(msg.sender, STAKE_AMOUNT, block.timestamp);
    }

    function unstake() external {
        require(stakers[msg.sender].amount >= STAKE_AMOUNT, "Insufficient staked amount");
        require(block.timestamp - stakers[msg.sender].stakeTime >= STAKE_DURATION, "Stake not matured");
        stakers[msg.sender].amount -= STAKE_AMOUNT;
        require(token.transfer(msg.sender, STAKE_AMOUNT), "Transfer failed");
        emit Unstake(msg.sender, STAKE_AMOUNT);
    }

    function createVote(address targetUser, string calldata newUsername, bool isBan) external {
        require(stakers[msg.sender].amount >= STAKE_AMOUNT, "Insufficient stake");
        require(block.timestamp - stakers[msg.sender].stakeTime >= STAKE_DURATION, "Stake not matured");
        Vote storage newVote = votes.push();
        newVote.targetUser = targetUser;
        newVote.newUsername = newUsername;
        newVote.isBan = isBan;
        emit VoteCreated(votes.length - 1, targetUser, newUsername, isBan);
    }

    function vote(uint256 voteId, bool _vote) external {
        require(stakers[msg.sender].amount >= STAKE_AMOUNT, "Insufficient stake");
        //require(block.timestamp - stakers[msg.sender].stakeTime >= STAKE_DURATION, "Stake not matured");
        Vote storage voteInstance = votes[voteId];
        require(!voteInstance.voted[msg.sender], "Already voted");
        voteInstance.voted[msg.sender] = true;
        if (_vote) {
            voteInstance.affirmativeVotes++;
            if (voteInstance.affirmativeVotes >= 3) {
                executeAction(voteId);
            }
        }
        emit Voted(voteId, msg.sender, _vote);
    }

    function executeAction(uint256 voteId) private {
        Vote storage voteInstance = votes[voteId];
        require(voteInstance.affirmativeVotes >= 3, "Not enough affirmative votes");
        if (voteInstance.isBan) {
            userManagement.banUser(voteInstance.targetUser);
        } else {
            userManagement.changeMyUsername(voteInstance.newUsername);
        }
        emit ActionExecuted(voteId, true);
    }

    function getVoteCount() external view returns (uint256) {
        return votes.length;
    }
}
