

const userManABI = [
	
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getUserByIndex",
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
						"internalType": "address",
						"name": "avatarContract",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "avatarTokenId",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isERC1155",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "avatarAmount",
						"type": "uint256"
					}
				],
				"internalType": "struct UserManagement.UserInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const postNftABI = [
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
				"internalType": "string",
				"name": "textLink",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "imageLink",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "promptLink",
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
				"internalType": "string",
				"name": "textLink",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "imageLink",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "promptLink",
				"type": "string"
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
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "author",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "textLink",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "imageLink",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "promptLink",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "createdAt",
						"type": "uint256"
					}
				],
				"internalType": "struct PostNFT.Post",
				"name": "",
				"type": "tuple"
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
	}
];

const userManAddress = '0x27F92240a258a1f4e5Ee0471B502e2d1b1D28FEd';
const postNftAddress = '0x26424168B9FD90bc3f4a42a4f1F6b15E327A023D';

const ethereumButton = document.querySelector('#connectButton');
const userAvatar = document.querySelector('#userAvatar');
const userName = document.querySelector('#userName');
const postFeed = document.getElementById('postFeed'); // Reference to the post feed container
let selectedAccount;
let userContract, postNftContract;

document.addEventListener('DOMContentLoaded', () => {
    init();
});

async function init() {
    if (typeof window.ethereum !== 'undefined') {
        await connectToMetaMaskIfNeeded();
        await initContracts();
        const addressFromURL = getAddressFromURL();
        selectedAccount = addressFromURL || selectedAccount;
        if (selectedAccount) {
            await displayUserInfo(selectedAccount);
            await displayUserPosts(selectedAccount);
        }
        ethereum.on('accountsChanged', handleAccountsChanged);
    } else {
        console.error('MetaMask is not installed!');
    }

    ethereumButton.addEventListener('click', connectToMetaMask);
}

async function connectToMetaMaskIfNeeded() {
    try {
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
            selectedAccount = accounts[0];
            console.log(`Found connected account: ${selectedAccount}`);
            ethereumButton.innerText = 'Connected';
        } else {
            console.log('MetaMask is installed but not connected');
        }
    } catch (error) {
        console.error('Error checking MetaMask connection:', error);
    }
}

async function connectToMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            selectedAccount = accounts[0];
            console.log(`Connected to account: ${selectedAccount}`);
            ethereumButton.innerText = 'Connected';
            await displayUserInfo(selectedAccount);
            await displayUserPosts(selectedAccount);
        } catch (error) {
            console.error('Error during account request:', error);
        }
    } else {
        console.error('MetaMask is not installed!');
    }
}

function initContracts() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    userContract = new ethers.Contract(userManAddress, userManABI, signer);
    postNftContract = new ethers.Contract(postNftAddress, postNftABI, signer);
}

async function displayUserInfo(address) {
    try {
        const userInfo = await userContract.getUserInfo(address);
        if (userInfo && userInfo.username) {
            userName.innerText = userInfo.username;
            userAvatar.src = 'PATH_OR_METHOD_TO_RESOLVE_NFT_IMAGE'; // Update this path as needed
        }
    } catch (error) {
        console.error('Error fetching user info:', error);
    }
}

async function displayUserPosts(address) {
    try {
        const postIds = await postNftContract.getPostsByAuthor(address);
        for (const postId of postIds) {
            const post = await postNftContract.getPost(postId);
            addPostToFeed(post);
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

function addPostToFeed(post) {
    const postElement = document.createElement('article');
    postElement.classList.add('post-container'); // Ensures consistency with CSS styling

    let innerHTMLContent = `
        <div class="post-content">
            <p class="post-timestamp">Posted on: ${new Date(post.createdAt * 1000).toLocaleString()}</p>
            <p class="post-text"><a>${post.textLink}</a></p>
            ${post.promptLink !== "" ? `<p class="post-prompt"><a>Prompt: ${post.promptLink}</a></p>` : ''}
        </div>
        <div class="post-image">
            <a><img src="${post.imageLink}" ></a>
        </div>
    `;

    postElement.innerHTML = innerHTMLContent;
    postFeed.appendChild(postElement);
}



function getAddressFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('user'); // Changed to 'user' to match your example
}

async function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        console.log('Please connect to MetaMask.');
    } else if (accounts[0] !== selectedAccount) {
        selectedAccount = accounts[0];
        console.log(`Account changed to: ${selectedAccount}`);
        await displayUserInfo(selectedAccount);
        await displayUserPosts(selectedAccount);
    }
}
