// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./accounts.sol"; // Adjust the path as necessary

contract PostNFT is ERC721URIStorage, Ownable(msg.sender) {
    using Counters for Counters.Counter;
    Counters.Counter private _postIds;

    struct Post {
        uint256 id;
        address author;
        // The `uri` field is removed since it's handled by ERC721URIStorage
        uint256 createdAt;
    }

    mapping(uint256 => Post) private posts;
    mapping(address => uint256[]) private postsByAuthor;

    UserManagement private userManagement;

    event PostCreated(uint256 indexed postId, address indexed author, uint256 createdAt);
    event PostURIUpdated(uint256 indexed postId, string newURI); // Declare the event

    constructor(address userManagementAddress) ERC721("PostNFT", "PNFT") {
        userManagement = UserManagement(userManagementAddress);
    }

    function createPost(string memory uri) public {
        require(bytes(uri).length <= 255, "URI exceeds maximum length");

        UserManagement.UserInfo memory userInfo = userManagement.getUserInfo(msg.sender);
        require(bytes(userInfo.username).length > 0, "User not registered.");
        require(!userInfo.isBanned, "User is banned.");

        _postIds.increment();
        uint256 newPostId = _postIds.current();

        // Set the URI for the token using ERC721URIStorage's function
        _setTokenURI(newPostId, uri);

        posts[newPostId] = Post({
            id: newPostId,
            author: msg.sender,
            createdAt: block.timestamp
        });

        postsByAuthor[msg.sender].push(newPostId);

        _mint(msg.sender, newPostId);
        emit PostCreated(newPostId, msg.sender, block.timestamp);
    }

    function getPost(uint256 postId) public view returns (uint256, address, string memory, uint256) {
    // Call ownerOf to ensure the token exists. This will revert if the token does not exist with "ERC721: owner query for nonexistent token"
    ownerOf(postId);

    Post memory post = posts[postId];
    return (post.id, post.author, tokenURI(postId), post.createdAt);
    }

    function getPostsByAuthor(address author) public view returns (uint256[] memory) {
        return postsByAuthor[author];
    }

    function getTotalPosts() public view returns (uint256) {
        return _postIds.current();
    }

    function clearPostURI(uint256 postId) public {
        // Replace _isApprovedOrOwner with a check that combines ownerOf, getApproved, and isApprovedForAll
        require(
            ownerOf(postId) == msg.sender || 
            getApproved(postId) == msg.sender || 
            isApprovedForAll(ownerOf(postId), msg.sender) || 
            owner() == msg.sender, 
            "Caller is not owner nor approved"
        );

        _setTokenURI(postId, "");
        emit PostURIUpdated(postId, ""); // This will work now since the event is declared
    }

}
