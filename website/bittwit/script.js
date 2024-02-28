

const userManABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "avatarContract",
				"type": "address"
			}
		],
		"name": "AvatarContractUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "avatarTokenId",
				"type": "uint256"
			}
		],
		"name": "AvatarUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "UserBanned",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "followed",
				"type": "address"
			}
		],
		"name": "UserFollowed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "username",
				"type": "string"
			}
		],
		"name": "UserRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "unfollowed",
				"type": "address"
			}
		],
		"name": "UserUnfollowed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "newUsername",
				"type": "string"
			}
		],
		"name": "UsernameChanged",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "banUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newUsername",
				"type": "string"
			}
		],
		"name": "changeMyUsername",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userToFollow",
				"type": "address"
			}
		],
		"name": "followUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getFollows",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalUsers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getUserInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "username",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "avatarTokenId",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isBanned",
						"type": "bool"
					}
				],
				"internalType": "struct UserManagement.UserInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			}
		],
		"name": "registerUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "avatarContractAddress",
				"type": "address"
			}
		],
		"name": "setAvatarContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userToUnfollow",
				"type": "address"
			}
		],
		"name": "unfollowUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "avatarTokenId",
				"type": "uint256"
			}
		],
		"name": "updateAvatar",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const reactLiquidityPoolABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_reactToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_nftContract",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "nftId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reactSubId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "calculateShares",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractOwnerFeePercent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "nftId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reactSubId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "nftId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reactSubId",
				"type": "uint256"
			}
		],
		"name": "getPoolInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalShares",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalDeposited",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "nftId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reactSubId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getUserShares",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nftContract",
		"outputs": [
			{
				"internalType": "contract IERC721",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "postNFTOwnerFeePercent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "reactToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "nftId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reactSubId",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const postNftABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userManagementAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721IncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721InsufficientApproval",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOperator",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC721InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721NonexistentToken",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_fromTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_toTokenId",
				"type": "uint256"
			}
		],
		"name": "BatchMetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "MetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "postId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "author",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "createdAt",
				"type": "uint256"
			}
		],
		"name": "PostCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			}
		],
		"name": "createPost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "postId",
				"type": "uint256"
			}
		],
		"name": "getPost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "author",
				"type": "address"
			}
		],
		"name": "getPostsByAuthor",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const erc20ABI = [
    // Simplified ABI for brevity; include only the functions you need
    {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}, {"name": "_spender", "type": "address"}],
        "name": "allowance",
        "outputs": [{"name": "", "type": "uint256"}],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"}],
        "name": "approve",
        "outputs": [{"name": "", "type": "bool"}],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "balance", "type": "uint256"}],
        "type": "function"
    }
];

const userManAddress = '0xc6c0454Ae2c503A59475414F52E626Dd69774DDC';
const postNftAddress = '0xfCC7Da251332FE01604f0A69e611039163488106';
const reactLiquidityPoolAddress = '0x375682DDbb9dA42A2e285402885Ac5D246Da31E9';
const reactTokenAddress = '0xd9941136c56C5Bb64e3ab63e4Def6a4142c0654A';

const ethereumButton = document.querySelector('#connectButton');
const userAvatar = document.querySelector('#userAvatar');
const userName = document.querySelector('#userName');
const postFeed = document.getElementById('postFeed');


const addImageButton = document.getElementById('addImageButton');
const generateImageButton = document.getElementById('generateImageButton');
const imageUpload = document.getElementById('imageUpload');
const uploadPreview = document.getElementById('uploadPreview');
const imageGeneratorContainer = document.getElementById('imageGeneratorContainer');
const imagePrompt = document.getElementById('imagePrompt');
const generateButton = document.getElementById('generateButton');
const tweetForm = document.getElementById('tweetForm');
const tweetTextInput = document.getElementById('tweetTextInput');

let provider, userContract, postNftContract, reactLiquidityPoolContract;
let userAccount;
let generatedImageBlob = null;




document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded. Initializing...');
    init();
});



async function init() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is detected.');
        const account = await connectToMetaMaskIfNeeded();
        if (account) {
            initContracts();
            await displayUserInfo(account);
            await displayUserPosts(account);
            ethereum.on('accountsChanged', handleAccountsChanged);
        }
    } else {
        console.error('MetaMask is not installed!');
    }

    addImageButton.addEventListener('click', () => {
        imageUpload.click();
		generateImageButton.style.display = 'none';
    });

    imageUpload.addEventListener('change', (event) => {
		handleImageUpload(event);
		imageGeneratorContainer.style.display = 'block';
		
	});
	

    generateImageButton.addEventListener('click', () => {
        imageGeneratorContainer.style.display = 'block';
		addImageButton.style.display = 'none';
		generateImageButton.style.display = 'none';
    });

    generateButton.addEventListener('click', handleImageGeneration);

    tweetForm.addEventListener('submit', handlePostSubmission);
}

async function connectToMetaMaskIfNeeded() {
    try {
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
            console.log(`Found connected account: ${accounts[0]}`);
            ethereumButton.innerText = 'Connected';
			userAccount = accounts[0]
            return accounts[0];
        } else {
            console.log('MetaMask is installed but not connected');
            return null;
        }
    } catch (error) {
        console.error('Error checking MetaMask connection:', error);
        return null;
    }
}

async function connectToMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log(`Connected to account: ${accounts[0]}`);
            ethereumButton.innerText = 'Connected';
			userAccount = accounts[0]
            return accounts[0];
        } catch (error) {
            console.error('Error during account request:', error);
            return null;
        }
    } else {
        console.error('MetaMask is not installed!');
        return null;
    }
}

function initContracts() {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    userContract = new ethers.Contract(userManAddress, userManABI, signer);
    postNftContract = new ethers.Contract(postNftAddress, postNftABI, signer);
    reactLiquidityPoolContract = new ethers.Contract(reactLiquidityPoolAddress, reactLiquidityPoolABI, signer);
    console.log('Contracts initialized.');
}

async function displayUserInfo(address) {
    try {
        const userInfo = await userContract.getUserInfo(address);
        if (userInfo && userInfo.username) {
            userName.innerText = userInfo.username;
            console.log(`Displaying user info for ${userInfo.username}`);
            if (userInfo.avatarTokenId.toNumber() > 0) {
                const postNftUri = await postNftContract.tokenURI(userInfo.avatarTokenId);
                if (postNftUri) {
                    const postNftMetadata = await fetchPostMetadata(postNftUri);
                    if (postNftMetadata && postNftMetadata.image) {
                        userAvatar.src = postNftMetadata.image;
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error fetching user info:', error);
    }
}

async function displayFriendsPosts(address) {
    try {
        // Clear the post feed before adding new posts
        postFeed.innerHTML = '';

        // Fetch the list of friends (followed users)
        const friendsList = await userContract.getFollows(address);

        // Iterate through each friend and fetch their posts
        for (const friendAddress of friendsList) {
            let postIds = await postNftContract.getPostsByAuthor(friendAddress);
            
            // Create a new array from the original and reverse it
            postIds = [...postIds].reverse();

            for (const postId of postIds) {
                const username = await getAuthorNameByPostID(postId); // Fetch the username
                const post = await postNftContract.getPost(postId);
                if (post[2]) {
                    const metadata = await fetchPostMetadata(post[2]);
                    if (metadata) {
                        // Pass the username instead of the address
                        const postElement = createPostElement(metadata, post[3], postId, username, userAvatar); // Assuming userAvatar is retrieved similarly
                        postFeed.appendChild(postElement);
                        attachReactOptionsToPost(postId, postElement, friendAddress);
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}







async function displayUserPosts(address) {
    try {
        // Clear the post feed before adding new posts
        postFeed.innerHTML = '';

        let postIds = await postNftContract.getPostsByAuthor(address);
        
        // Create a new array from the original and reverse it
        postIds = [...postIds].reverse();

        for (const postId of postIds) {
            const username = await getAuthorNameByPostID(postId); // Fetch the username
            const post = await postNftContract.getPost(postId);
            if (post[2]) {
                const metadata = await fetchPostMetadata(post[2]);
                if (metadata) {
                    // Pass the username instead of the address
                    const postElement = createPostElement(metadata, post[3], postId, username, userAvatar); // Assuming userAvatar is retrieved similarly
                    postFeed.appendChild(postElement);
                    attachReactOptionsToPost(postId, postElement, address);
                }
            }
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}




async function fetchPostMetadata(uri) {
    try {
        const response = await fetch(uri);
        if (!response.ok) throw new Error('Failed to fetch post metadata');
        const metadata = await response.json();
        console.log('Post metadata fetched:', metadata);
        return metadata;
    } catch (error) {
        console.error('Error fetching post metadata:', error);
        return null;
    }
}



function attachEventListenersToPost(postId, account) {
    document.getElementById(`upvote-${postId}`).addEventListener('click', () => reactToPost(postId, 1));
    document.getElementById(`downvote-${postId}`).addEventListener('click', () => reactToPost(postId, 0));
    document.getElementById(`withdrawBtn-${postId}`).addEventListener('click', () => withdrawReact(postId, account));
    console.log(`Event listeners attached to post ID ${postId}`);
    updatePoolInfo(postId, account);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function handleImageUpload(event) {
    const [file] = event.target.files;
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePlaceholder.src = e.target.result;
            imagePlaceholder.style.display = 'block';
            uploadPreview.style.display = 'none'; // Ensure this is consistent with handleImageUpload
            imagePrompt.style.display = 'none'; // Hide the text prompt and generate button after generation
			generateButton.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
}

async function handleImageGeneration() {
    const desc = imagePrompt.value.trim();
    if (desc) {
        // Display loading.gif while waiting for the image to generate
        imagePlaceholder.src = 'loading.gif'; // Update the path if necessary
        imagePlaceholder.style.display = 'block';

        try {
            generatedImageBlob = await generateImageBlob(desc);
            const imageURL = URL.createObjectURL(generatedImageBlob);
            // Once the image is generated, update the placeholder with the generated image
            imagePlaceholder.src = imageURL;
            uploadPreview.style.display = 'none'; // Ensure this is consistent with handleImageUpload
            // Optionally hide the generator container, uncomment if needed
            // imageGeneratorContainer.style.display = 'none';
        } catch (error) {
            console.error("Failed to generate image:", error);
            // Consider displaying an error message or reverting the placeholder image here
        }
    } else {
        console.log('Please enter a prompt for the image.');
    }
}


async function generateImageBlob(desc) {
    // Your API endpoint to generate images
    const apiUrl = 'http://165.22.175.90:3000/generate-image';

    console.log('Sending request to your API to generate image.');
    try {
        const generationResponse = await fetch(apiUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: desc,
            }),
        });

        if (!generationResponse.ok) {
            throw new Error(`HTTP error! status: ${generationResponse.status}`);
        }

        const data = await generationResponse.json();
        const imageUrl = data.imageUrl.startsWith('http') ? data.imageUrl : `http://165.22.175.90:3000${data.imageUrl}`;
        console.log(`Generated image URL: ${imageUrl}`);

        const imageResponse = await fetch(imageUrl);
        if (!imageResponse.ok) {
            throw new Error(`HTTP error fetching image! status: ${imageResponse.status}`);
        }

        generatedImageBlob = await imageResponse.blob();
        return generatedImageBlob;
    } catch (error) {
        console.error('Failed to generate image with error:', error);
        throw error;
    }
}

async function uploadToIPFS(file) {
    const formData = new FormData();
    formData.append("file", file);

    const apiKey = '60f452a5a3f00328e4ad';
    const apiSecret = 'c84f6655a0b318a7ea8a3b86717c2150e3fd99836ae4a80863ba8c788d15dcd4';

    try {
        const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
            method: 'POST',
            headers: {
                'pinata_api_key': apiKey,
                'pinata_secret_api_key': apiSecret
            },
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            return `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
        } else {
            throw new Error(`Failed to upload to IPFS via Pinata: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error uploading to IPFS via Pinata:', error);
        throw error;
    }
}

async function createPost(uri) {
    try {
        const tx = await postNftContract.createPost(uri);
        await tx.wait(); // Wait for the transaction to be confirmed
        console.log('Post created successfully');
        location.reload(); // Refresh the page after successful post creation
    } catch (error) {
        console.error('Error creating post:', error);
    }
}

async function handlePostSubmission(event) {
    event.preventDefault();
    const postText = tweetTextInput.value;
    let imageLink = '';

    if (uploadPreview.style.display === 'block' || imagePlaceholder.style.display === 'block') {
        let blobToUpload = null;
        if (generatedImageBlob) {
            blobToUpload = generatedImageBlob;
        } else if (imageUpload.files[0]) {
            blobToUpload = imageUpload.files[0];
        }

        if (blobToUpload) {
            imageLink = await uploadToIPFS(blobToUpload);
        }
    }

    const metadata = {
        description: postText,
        image: imageLink,
        attributes: []
    };

    const metadataLink = await uploadToIPFS(new Blob([JSON.stringify(metadata)], {type: "application/json"}));
    await createPost(metadataLink);
}















/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        console.log('Please connect to MetaMask.');
    } else {
        const account = accounts[0];
        console.log(`Account changed to: ${account}`);
        await displayUserInfo(account);
        await displayUserPosts(account);
    }
}





async function withdrawReact(postId, account) {
    try {
        // Fetch user shares for both upvotes and downvotes
        const upvoteShares = await reactLiquidityPoolContract.getUserShares(postId, 1, account);
        const downvoteShares = await reactLiquidityPoolContract.getUserShares(postId, 0, account);

        let reactSubId; // Variable to hold the user's choice of react pool

        // If the user has shares in both pools, prompt them to choose which to withdraw from
        if (upvoteShares.gt(0) && downvoteShares.gt(0)) {
            const userChoice = prompt("You have REACT tokens in both pools. Enter '1' to withdraw from Upvotes, '0' for Downvotes:");
            if (userChoice !== '1' && userChoice !== '0') {
                alert("Invalid choice. Transaction cancelled.");
                return;
            }
            reactSubId = parseInt(userChoice);
        } else if (upvoteShares.gt(0)) {
            reactSubId = 1; // Automatically choose upvotes if only in upvote pool
        } else if (downvoteShares.gt(0)) {
            reactSubId = 0; // Automatically choose downvotes if only in downvote pool
        } else {
            alert("You do not have REACT tokens to withdraw.");
            return;
        }

        // Proceed with withdrawal from the selected pool
        const tx = await reactLiquidityPoolContract.withdraw(postId, reactSubId);
        await tx.wait();
        alert("Withdrawn successfully!");
        updatePoolInfo(postId);
    } catch (error) {
        console.error('Error withdrawing:', error);
        alert("Failed to withdraw.");
    }
}






async function reactToPost(postId, reactType) {
    const amount = prompt("Enter the amount of REACT tokens to stake:");
    if (!amount || isNaN(amount)) {
        alert("Invalid amount.");
        return;
    }

    const reactTokenContract = new ethers.Contract(reactTokenAddress, erc20ABI, provider.getSigner());
    const userAddress = await provider.getSigner().getAddress();
    const amountToStake = ethers.utils.parseUnits(amount, 18);

    // Check user's React token balance
    const balance = await reactTokenContract.balanceOf(userAddress);
    if (balance.lt(amountToStake)) {
        alert("Insufficient REACT token balance.");
        return;
    }

    // Check allowance
    const allowance = await reactTokenContract.allowance(userAddress, reactLiquidityPoolAddress);
    if (allowance.lt(amountToStake)) {
        // Need to approve first
        try {
            const approveTx = await reactTokenContract.approve(reactLiquidityPoolAddress, amountToStake);
            await approveTx.wait();
            alert("Approval transaction successful. Now you can stake your tokens.");
        } catch (error) {
            console.error('Error approving React tokens:', error);
            alert("Failed to approve React tokens.");
            return;
        }
    }

    // Proceed with staking after approval
    try {
        const tx = await reactLiquidityPoolContract.deposit(postId, reactType, amountToStake);
        await tx.wait();
        alert("Reacted successfully!");
        updatePoolInfo(postId, userAddress);
    } catch (error) {
        console.error('Error reacting to post:', error);
        alert("Failed to react to post.");
    }
}

function createPostElement(metadata, createdAt, postId, username, userAvatar) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    let promptText = '';
    if (metadata.attributes) {
        const promptAttribute = metadata.attributes.find(attr => attr.trait_type === "Prompt");
        if (promptAttribute) {
            //promptText = `<p>Prompt: ${promptAttribute.value}</p>`; // Uncommented and ready to use
        }
    }

    // Conditionally build the image HTML if an image URL exists in the metadata
    let imageHTML = '';
    if (metadata.image && metadata.image.trim() !== '') {
        imageHTML = `<img src="${metadata.image}" alt="Post image" class="post__image">`;
    }

    let innerHTMLContent = `
        <div class="post__user-info">
            <div>
                <button class="follow-btn" onclick="handleFollowClick('${postId}')">Follow</button>
                <h3>${username}</h3> <!-- Display username instead of address -->
                <p class="post__headerSpecial">Posted on: ${new Date(createdAt * 1000).toLocaleString()}</p>
                <div class="post__content">
                    <p>${metadata.description}</p>
                    ${promptText}
                    ${imageHTML}
                </div>
            </div>
        </div>
        <div class="post__right"></div>
    `;

    postElement.innerHTML = innerHTMLContent;
    console.log(`Post element created for post ID ${postId} with user ${username}`);
    return postElement;
}


// Global function to handle the click event
function handleFollowClick(postId) {
    // Call the async function
    followUserAsync(postId);
}

async function followUserAsync(postId) {
    try {
        const userToFollowAddress = await getAuthorAddressByPostID(postId);
		console.log(userToFollowAddress);
        if (userToFollowAddress) {
            await followUser(userToFollowAddress);
        } else {
            console.error('Could not fetch user to follow address.');
        }
    } catch (error) {
        console.error('Error following user:', error);
    }
}
/*
async function addReactOptionsToPost(postId, postElement, account) {
    const poolInfo = await reactLiquidityPoolContract.getPoolInfo(postId, 1); // Example for one react type
    const userShares = await reactLiquidityPoolContract.getUserShares(postId, 1, account);

    const reactOptionsHTML = document.createElement('div');
    reactOptionsHTML.classList.add('react-options');
    reactOptionsHTML.innerHTML = `
        <button onclick="reactToPost(${postId}, 1)">Upvote</button>
        <button onclick="reactToPost(${postId}, 0)">Downvote</button>
        <div class="pool-info">
            <p>Total Shares: ${poolInfo.totalShares.toString()}</p>
            <p>Your Shares: ${userShares.toString()}</p>
        </div>
    `;

    postElement.querySelector('.post__right').appendChild(reactOptionsHTML);
}
*/

async function updatePoolInfo(postId, account) {
    try {
        // Fetch pool info for upvotes
        const upvoteInfo = await reactLiquidityPoolContract.getPoolInfo(postId, 1);
        const upvoteShares = await reactLiquidityPoolContract.getUserShares(postId, 1, account);

        // Fetch pool info for downvotes
        const downvoteInfo = await reactLiquidityPoolContract.getPoolInfo(postId, 0);
        const downvoteShares = await reactLiquidityPoolContract.getUserShares(postId, 0, account);

        // Update UI
        const poolInfoElement = document.getElementById(`poolInfo-${postId}`);
        if (poolInfoElement) {
            poolInfoElement.innerHTML = `
                <p>Upvotes Total: ${ethers.utils.formatUnits(upvoteInfo.totalDeposited, 18)} REACT. Your Stake: ${ethers.utils.formatUnits(upvoteShares, 18)} REACT.</p>
                <p>Downvotes Total: ${ethers.utils.formatUnits(downvoteInfo.totalDeposited, 18)} REACT. Your Stake: ${ethers.utils.formatUnits(downvoteShares, 18)} REACT.</p>
            `;
        }

        // Show withdraw button if the user has shares in either pool
        const withdrawBtnElement = document.getElementById(`withdrawBtn-${postId}`);
        if (withdrawBtnElement) {
            if (upvoteShares.gt(0) || downvoteShares.gt(0)) {
                withdrawBtnElement.style.display = 'block';
            } else {
                withdrawBtnElement.style.display = 'none';
            }
        }
    } catch (error) {
        console.error('Error updating pool info:', error);
    }
}

async function attachReactOptionsToPost(postId, postElement, account) {
    try {
        // Fetch pool info for both upvotes and downvotes
        const upvoteInfo = await reactLiquidityPoolContract.getPoolInfo(postId, 1);
        const downvoteInfo = await reactLiquidityPoolContract.getPoolInfo(postId, 0);
        const upvoteShares = await reactLiquidityPoolContract.getUserShares(postId, 1, account);
        const downvoteShares = await reactLiquidityPoolContract.getUserShares(postId, 0, account);

        // Create a container for the react options and pool stats
        const reactOptionsHTML = document.createElement('div');
        reactOptionsHTML.classList.add('react-options');

        // Create buttons with unique IDs using postId to ensure uniqueness
        const upvoteButton = document.createElement('button');
        upvoteButton.textContent = 'Upvote';
        upvoteButton.id = `upvote-${postId}`;
        
        const downvoteButton = document.createElement('button');
        downvoteButton.textContent = 'Downvote';
        downvoteButton.id = `downvote-${postId}`;

        // Append buttons to reactOptionsHTML
        reactOptionsHTML.appendChild(upvoteButton);
        reactOptionsHTML.appendChild(downvoteButton);

        // Create a visually appealing stats display for both pools
        const poolStatsHTML = document.createElement('div');
        poolStatsHTML.classList.add('pool-stats');
        poolStatsHTML.innerHTML = `
            <div class="pool-stats__item">
                <h4>Upvote Pool</h4>
                <p>Total Shares: ${upvoteInfo.totalShares.toString()}</p>
                <p>Your Shares: ${upvoteShares.toString()}</p>
                <p>Total Deposited: ${ethers.utils.formatUnits(upvoteInfo.totalDeposited, 18)} REACT</p>
            </div>
            <div class="pool-stats__item">
                <h4>Downvote Pool</h4>
                <p>Total Shares: ${downvoteInfo.totalShares.toString()}</p>
                <p>Your Shares: ${downvoteShares.toString()}</p>
                <p>Total Deposited: ${ethers.utils.formatUnits(downvoteInfo.totalDeposited, 18)} REACT</p>
            </div>
        `;

        // Append the pool stats to the reactOptionsHTML
        reactOptionsHTML.appendChild(poolStatsHTML);

        // Append the entire reactOptionsHTML to the postElement
        postElement.appendChild(reactOptionsHTML);

        // Attach event listeners after elements are added to the DOM
        document.getElementById(`upvote-${postId}`).addEventListener('click', () => reactToPost(postId, 1));
        document.getElementById(`downvote-${postId}`).addEventListener('click', () => reactToPost(postId, 0));
    } catch (error) {
        console.error('Error attaching react options:', error);
    }
}

async function getAuthorNameByPostID(postId) {
    try {
        const postInfo = await postNftContract.getPost(postId);
        // postInfo should be an array with post details, where the second element is the author's address
        const authorAddress = postInfo[1]; // Assuming the second return value from getPost is the author's address
		const userInfo = await userContract.getUserInfo(authorAddress);
        console.log('Author Address:', authorAddress);
        return userInfo[0];
    } catch (error) {
        console.error('Error fetching author by post ID:', error);
        return null; // Or handle the error as per your application's needs
    }
}

async function getAuthorAddressByPostID(postId) {
    try {
        const postInfo = await postNftContract.getPost(postId);
        // postInfo should be an array with post details, where the second element is the author's address
        const authorAddress = postInfo[1]; // Assuming the second return value from getPost is the author's address
		const userInfo = await userContract.getUserInfo(authorAddress);
        console.log('Author Address:', authorAddress);
        return authorAddress;
    } catch (error) {
        console.error('Error fetching author by post ID:', error);
        return null; // Or handle the error as per your application's needs
    }
}

async function followUser(userToFollowAddress) {
    console.log(`Attempting to follow user at address: ${userToFollowAddress}`);
    try {
        // Ensure the user has connected their wallet
        await provider.send("eth_requestAccounts", []);

        // Call the followUser function of the smart contract
        const tx = await userContract.followUser(userToFollowAddress);
        await tx.wait(); // Wait for the transaction to be mined

        console.log(`Following user at address: ${userToFollowAddress}`);
    } catch (error) {
        console.error('Error following user:', error);
    }
}