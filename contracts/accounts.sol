// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract UserManagement is Ownable {
    struct UserInfo {
        string username;
        uint256 avatarTokenId;
        bool isBanned;
    }

    mapping(address => UserInfo) private _userInfo;
    mapping(string => address) private _usernameToAddress;
    mapping(address => address[]) private _userFollows; // Mapping to keep track of follows
    address[] private _userAddresses;
    address private _avatarContract;

    // Event declarations
    event UserRegistered(address indexed user, string username);
    event UsernameChanged(address indexed user, string newUsername);
    event AvatarUpdated(address indexed user, uint256 avatarTokenId);
    event UserBanned(address indexed user);
    event AvatarContractUpdated(address avatarContract);
    event UserFollowed(address indexed user, address indexed followed);
    event UserUnfollowed(address indexed user, address indexed unfollowed);

    constructor() Ownable(msg.sender) {
        _avatarContract = address(0);
    }

    function registerUser(string calldata username) external {
        require(bytes(_userInfo[msg.sender].username).length == 0, "User already registered.");
        require(bytes(username).length >= 4 && bytes(username).length <= 15, "Username must be 4 to 15 characters long.");
        require(_usernameToAddress[username] == address(0), "Username already taken.");
        require(!_userInfo[msg.sender].isBanned, "Banned users cannot register.");

        _userInfo[msg.sender] = UserInfo({
            username: username,
            avatarTokenId: 0,
            isBanned: false
        });
        _usernameToAddress[username] = msg.sender;
        _userAddresses.push(msg.sender);

        emit UserRegistered(msg.sender, username);
    }

    function updateAvatar(uint256 avatarTokenId) external {
        require(_avatarContract != address(0), "Avatar contract not set.");
        require(bytes(_userInfo[msg.sender].username).length > 0, "User not registered.");
        require(!_userInfo[msg.sender].isBanned, "Banned users cannot update avatar.");
        require(IERC721(_avatarContract).ownerOf(avatarTokenId) == msg.sender, "Not the owner of this ERC721 token");

        _userInfo[msg.sender].avatarTokenId = avatarTokenId;

        emit AvatarUpdated(msg.sender, avatarTokenId);
    }

    function changeMyUsername(string calldata newUsername) external {
        UserInfo storage user = _userInfo[msg.sender];
        require(bytes(user.username).length > 0, "User not registered.");
        require(bytes(newUsername).length >= 4 && bytes(newUsername).length <= 15, "Username must be 4 to 15 characters long.");
        require(_usernameToAddress[newUsername] == address(0), "Username already taken.");
        require(!user.isBanned, "Banned users cannot change their username.");

        delete _usernameToAddress[user.username];
        user.username = newUsername;
        _usernameToAddress[newUsername] = msg.sender;

        emit UsernameChanged(msg.sender, newUsername);
    }

    function banUser(address user) external onlyOwner {
        require(bytes(_userInfo[user].username).length > 0, "User not registered.");
        _userInfo[user].isBanned = true;
        emit UserBanned(user);
    }

    function setAvatarContract(address avatarContractAddress) external onlyOwner {
        require(avatarContractAddress != address(0), "Avatar contract address cannot be the zero address.");
        _avatarContract = avatarContractAddress;
        emit AvatarContractUpdated(avatarContractAddress);
    }

    function getUserInfo(address user) external view returns (UserInfo memory) {
        require(!_userInfo[user].isBanned, "User is banned.");
        return _userInfo[user];
    }

    function getTotalUsers() external view returns (uint256) {
        return _userAddresses.length;
    }

    // Follow functionality
    function followUser(address userToFollow) external {
        require(userToFollow != msg.sender, "Cannot follow yourself.");
        require(!_userInfo[msg.sender].isBanned, "Banned users cannot follow.");
        require(!_userInfo[userToFollow].isBanned, "Cannot follow a banned user.");

        _userFollows[msg.sender].push(userToFollow);

        emit UserFollowed(msg.sender, userToFollow);
    }

    function unfollowUser(address userToUnfollow) external {
        require(userToUnfollow != msg.sender, "Cannot unfollow yourself.");
        int256 index = _findFollowIndex(msg.sender, userToUnfollow);

        require(index >= 0, "User not followed.");

        _removeFollowAtIndex(msg.sender, uint256(index));

        emit UserUnfollowed(msg.sender, userToUnfollow);
    }

    function getFollows(address user) external view returns (address[] memory) {
        return _userFollows[user];
    }

    // Private helper functions
    function _findFollowIndex(address follower, address followee) private view returns (int256) {
        for (uint256 i = 0; i < _userFollows[follower].length; i++) {
            if (_userFollows[follower][i] == followee) {
                return int256(i);
            }
        }
        return -1; // Not found
    }

    function _removeFollowAtIndex(address follower, uint256 index) private {
        require(index < _userFollows[follower].length, "Index out of bounds.");

        for (uint256 i = index; i < _userFollows[follower].length - 1; i++) {
            _userFollows[follower][i] = _userFollows[follower][i + 1];
        }
        _userFollows[follower].pop();
    }
}
