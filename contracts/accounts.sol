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
    mapping(string => address) private _usernameToAddress; // Map usernames to user addresses
    address[] private _userAddresses; // To track registered users
    address private _avatarContract; // Mutable variable for avatar contract

    // Event declarations
    event UserRegistered(address indexed user, string username);
    event UsernameChanged(address indexed user, string newUsername);
    event AvatarUpdated(address indexed user, uint256 avatarTokenId);
    event UserBanned(address indexed user);
    event AvatarContractUpdated(address avatarContract);

    constructor() Ownable(msg.sender) {
        _avatarContract = address(0); // Initialize with a null address
    }

    // Function to register user with just a username
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
        _userAddresses.push(msg.sender); // Add user address to the list

        emit UserRegistered(msg.sender, username);
    }

    // Function for users to update their avatar
    function updateAvatar(uint256 avatarTokenId) external {
        require(_avatarContract != address(0), "Avatar contract not set.");
        require(bytes(_userInfo[msg.sender].username).length > 0, "User not registered.");
        require(!_userInfo[msg.sender].isBanned, "Banned users cannot update avatar.");
        require(IERC721(_avatarContract).ownerOf(avatarTokenId) == msg.sender, "Not the owner of this ERC721 token");

        _userInfo[msg.sender].avatarTokenId = avatarTokenId;

        emit AvatarUpdated(msg.sender, avatarTokenId);
    }

    // Function for users to change their own username
    function changeMyUsername(string calldata newUsername) external {
        UserInfo storage user = _userInfo[msg.sender];
        require(bytes(user.username).length > 0, "User not registered.");
        require(bytes(newUsername).length >= 4 && bytes(newUsername).length <= 15, "Username must be 4 to 15 characters long.");
        require(_usernameToAddress[newUsername] == address(0), "Username already taken.");
        require(!user.isBanned, "Banned users cannot change their username.");

        // Remove the old username mapping
        delete _usernameToAddress[user.username];

        // Update the user's username in the UserInfo mapping
        user.username = newUsername;

        // Add the new username mapping
        _usernameToAddress[newUsername] = msg.sender;

        emit UsernameChanged(msg.sender, newUsername);
    }

    function banUser(address user) external onlyOwner {
        require(bytes(_userInfo[user].username).length > 0, "User not registered.");
        _userInfo[user].isBanned = true;
        emit UserBanned(user);
    }

    // Function to set the avatar contract address by the owner
    function setAvatarContract(address avatarContractAddress) external onlyOwner {
        require(avatarContractAddress != address(0), "Avatar contract address cannot be the zero address.");
        _avatarContract = avatarContractAddress;
        emit AvatarContractUpdated(avatarContractAddress);
    }

    // Function to get user info
    function getUserInfo(address user) external view returns (UserInfo memory) {
        require(!_userInfo[user].isBanned, "User is banned.");
        return _userInfo[user];
    }

    // Function to get total number of users
    function getTotalUsers() external view returns (uint256) {
        return _userAddresses.length;
    }

    // Function to get user address by username
    function getAddressByUsername(string calldata username) external view returns (address) {
        require(_usernameToAddress[username] != address(0), "Username not found.");
        address userAddress = _usernameToAddress[username];
        require(!_userInfo[userAddress].isBanned, "User is banned.");
        return userAddress;
    }
}
