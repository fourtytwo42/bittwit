// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./distTwitter.sol"; // Ensure this path matches your project structure

contract PostNFT is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _postIds;

    struct Post {
        uint256 id;
        address author;
        string uri; // URI to JSON containing post details (text, image, prompt links)
        uint256 createdAt; // Timestamp of post creation
    }

    mapping(uint256 => Post) private posts;
    mapping(address => uint256[]) private postsByAuthor;

    UserManagement private userManagement;

    event PostCreated(uint256 indexed postId, address indexed author, string uri, uint256 createdAt);

    constructor(address userManagementAddress) ERC721("PostNFT", "PNFT") Ownable(msg.sender) {
        userManagement = UserManagement(userManagementAddress);
    }

    function createPost(string memory uri) public {
        require(bytes(uri).length <= 255, "URI exceeds maximum length");
        require(bytes(userManagement.getUserInfo(msg.sender).username).length > 0, "User not registered.");

        _postIds.increment();

        uint256 newPostId = _postIds.current();
        posts[newPostId] = Post({
            id: newPostId,
            author: msg.sender,
            uri: uri,
            createdAt: block.timestamp // Assign current block timestamp
        });

        postsByAuthor[msg.sender].push(newPostId);

        _mint(msg.sender, newPostId);
        emit PostCreated(newPostId, msg.sender, uri, block.timestamp);
    }

    function getPost(uint256 postId) public view returns (Post memory) {
        return posts[postId];
    }

    function getPostsByAuthor(address author) public view returns (uint256[] memory) {
        return postsByAuthor[author];
    }

}
