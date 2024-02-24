// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

contract UserManagement is Ownable {
    struct UserInfo {
        string username;
        address avatarContract;
        uint256 avatarTokenId;
        bool isERC1155;
        uint256 avatarAmount; // Relevant for ERC1155
    }

    mapping(address => UserInfo) private _userInfo;
    address[] private _userAddresses; // To track registered users

    // Event declarations
    event UserRegistered(address indexed user, string username, address avatarContract, uint256 avatarTokenId, bool isERC1155, uint256 avatarAmount);
    event AvatarUpdated(address indexed user, address avatarContract, uint256 avatarTokenId, bool isERC1155, uint256 avatarAmount);

    constructor() Ownable(msg.sender) {}

    function registerUser(string calldata username, address avatarContract, uint256 avatarTokenId, bool isERC1155, uint256 avatarAmount) external {
        require(bytes(_userInfo[msg.sender].username).length == 0, "User already registered.");
        require(bytes(username).length >= 4 && bytes(username).length <= 15, "Username must be 4 to 15 characters long.");

        if (isERC1155) {
            require(IERC1155(avatarContract).balanceOf(msg.sender, avatarTokenId) >= avatarAmount, "Insufficient balance for ERC1155 token");
        } else {
            require(IERC721(avatarContract).ownerOf(avatarTokenId) == msg.sender, "Not the owner of this ERC721 token");
        }

        _userInfo[msg.sender] = UserInfo({
            username: username,
            avatarContract: avatarContract,
            avatarTokenId: avatarTokenId,
            isERC1155: isERC1155,
            avatarAmount: avatarAmount
        });
        _userAddresses.push(msg.sender); // Add user address to the list

        emit UserRegistered(msg.sender, username, avatarContract, avatarTokenId, isERC1155, avatarAmount);
    }

    function updateAvatar(address avatarContract, uint256 avatarTokenId, bool isERC1155, uint256 avatarAmount) external {
        require(bytes(_userInfo[msg.sender].username).length > 0, "User not registered.");
        
        if (isERC1155) {
            require(IERC1155(avatarContract).balanceOf(msg.sender, avatarTokenId) >= avatarAmount, "Insufficient balance for ERC1155 token");
        } else {
            require(IERC721(avatarContract).ownerOf(avatarTokenId) == msg.sender, "Not the owner of this ERC721 token");
        }

        _userInfo[msg.sender].avatarContract = avatarContract;
        _userInfo[msg.sender].avatarTokenId = avatarTokenId;
        _userInfo[msg.sender].isERC1155 = isERC1155;
        _userInfo[msg.sender].avatarAmount = avatarAmount;

        emit AvatarUpdated(msg.sender, avatarContract, avatarTokenId, isERC1155, avatarAmount);
    }

    function getUserInfo(address user) external view returns (UserInfo memory) {
        return _userInfo[user];
    }

    function getTotalUsers() external view returns (uint256) {
        return _userAddresses.length;
    }

    function getUserByIndex(uint256 index) external view returns (address) {
        require(index < _userAddresses.length, "Index out of bounds");
        return _userAddresses[index];
    }
}

