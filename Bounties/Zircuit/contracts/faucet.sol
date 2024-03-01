// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenFaucet is Ownable(msg.sender) {
    IERC20 public token;
    uint256 public constant TOKEN_AMOUNT = 100 * 10**18; // Assuming 18 decimals for the token
    uint256 public constant TIME_LOCK = 1 hours;

    mapping(address => uint256) public lastClaimTime;

    constructor(IERC20 _token) {
        token = _token;
    }

    function claimTokens() external {
        require(block.timestamp - lastClaimTime[msg.sender] > TIME_LOCK, "Claim too soon");
        lastClaimTime[msg.sender] = block.timestamp;

        require(token.balanceOf(address(this)) >= TOKEN_AMOUNT, "Faucet empty");
        token.transfer(msg.sender, TOKEN_AMOUNT);
    }

    function withdraw() external onlyOwner {
        uint256 balance = token.balanceOf(address(this));
        token.transfer(owner(), balance);
        payable(owner());
    }
}
