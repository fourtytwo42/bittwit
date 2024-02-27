

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

const reactLiquidityPoolABI = [
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




const userManAddress = '0x4bAc50c59611c609c2E3818bd34B22A4F205B80e';
const postNftAddress = '0x6b6467F88Ef73Df85045498605D6E558AA15DAE2';
const reactLiquidityPoolAddress = '0xe920A5A84b93653E268a979b1814B3903D8f60Bf';
const reactTokenAddress = '0xd9941136c56C5Bb64e3ab63e4Def6a4142c0654A';

const ethereumButton = document.querySelector('#connectButton');
const userAvatar = document.querySelector('#userAvatar');
const userName = document.querySelector('#userName');
const postFeed = document.getElementById('postFeed'); // Reference to the post feed container

document.addEventListener('DOMContentLoaded', () => {
    init();
});


let provider, userContract, postNftContract, reactLiquidityPoolContract;

async function init() {
    if (typeof window.ethereum !== 'undefined') {
        const account = await connectToMetaMaskIfNeeded();
        if (account) {
            initContracts();
            await displayUserInfo(account);
            await displayUserPosts(account);
            ethereum.on('accountsChanged', handleAccountsChanged);
        }
        ethereumButton.addEventListener('click', () => connectToMetaMask().then(account => {
            if (account) {
                displayUserInfo(account);
                displayUserPosts(account);
            }
        }));
    } else {
        console.error('MetaMask is not installed!');
    }
}

async function connectToMetaMaskIfNeeded() {
    try {
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
            console.log(`Found connected account: ${accounts[0]}`);
            ethereumButton.innerText = 'Connected';
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
}

async function displayUserInfo(address) {
    try {
        const userInfo = await userContract.getUserInfo(address);
        if (userInfo && userInfo.username) {
            userName.innerText = userInfo.username;

            // Check if the user has selected a Post NFT ID for their avatar
            if (userInfo.selectedPostNftId) {
                const postNftUri = await postNftContract.tokenURI(userInfo.selectedPostNftId);
                if (postNftUri) {
                    const postNftMetadata = await fetchPostMetadata(postNftUri);
                    if (postNftMetadata && postNftMetadata.image) {
                        userAvatar.src = postNftMetadata.image; // Set the avatar image to the Post NFT image
                    }
                }
            }
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
            if (post[2]) { // Assuming post[2] is the URI
                fetchPostMetadata(post[2]).then(metadata => {
                    if (metadata) {
                        const postElement = addPostToFeed(metadata, post[3]); // Assuming post[3] is the createdAt timestamp
                        addReactOptionsToPost(postId, postElement, address);
                    }
                });
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
        return await response.json();
    } catch (error) {
        console.error('Error fetching post metadata:', error);
        return null;
    }
}

function addPostToFeed(metadata, createdAt) {
    if (!metadata) return null;

    const postElement = document.createElement('article');
    postElement.classList.add('post-container');

    let innerHTMLContent = `
        <div class="post-content">
            <p class="post-timestamp">Posted on: ${new Date(createdAt * 1000).toLocaleString()}</p>
            <p class="post-text">${metadata.description}</p>
            ${metadata.attributes && metadata.attributes.find(attr => attr.trait_type === "Prompt") ? `<p class="post-prompt">Prompt: ${metadata.attributes.find(attr => attr.trait_type === "Prompt").value}</p>` : ''}
        </div>
        <div class="post-image">
            <img src="${metadata.image}" alt="Post image">
        </div>
    `;

    postElement.innerHTML = innerHTMLContent;
    postFeed.appendChild(postElement);

    return postElement; // Return the created element
}


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

async function updatePoolInfo(postId, account) {
    try {
        // Fetch pool info for upvotes
        const upvoteInfo = await reactLiquidityPoolContract.getPoolInfo(postId, 1);
        const upvoteShares = await reactLiquidityPoolContract.getUserShares(postId, 1, account);

        // Fetch pool info for downvotes
        const downvoteInfo = await reactLiquidityPoolContract.getPoolInfo(postId, 0);
        const downvoteShares = await reactLiquidityPoolContract.getUserShares(postId, 0, account);

        // Update UI
        document.getElementById(`poolInfo-${postId}`).innerHTML = `
            <p>Upvotes Total: ${ethers.utils.formatUnits(upvoteInfo.totalDeposited, 18)} REACT. Your Stake: ${ethers.utils.formatUnits(upvoteShares, 18)} REACT.</p>
            <p>Downvotes Total: ${ethers.utils.formatUnits(downvoteInfo.totalDeposited, 18)} REACT. Your Stake: ${ethers.utils.formatUnits(downvoteShares, 18)} REACT.</p>
        `;

        // Show withdraw button if the user has shares in either pool
        if (upvoteShares.gt(0) || downvoteShares.gt(0)) {
            document.getElementById(`withdrawBtn-${postId}`).style.display = 'block';
        } else {
            document.getElementById(`withdrawBtn-${postId}`).style.display = 'none';
        }
    } catch (error) {
        console.error('Error updating pool info:', error);
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

function addReactOptionsToPost(postId, postElement, account) {
    const reactOptionsHTML = `
        <div class="react-options">
            <button id="upvote-${postId}">Upvote</button>
            <button id="downvote-${postId}">Downvote</button>
            <div id="poolInfo-${postId}"></div>
            <button id="withdrawBtn-${postId}" style="display:none;">Withdraw</button>
        </div>
    `;
    postElement.innerHTML += reactOptionsHTML;
    updatePoolInfo(postId, account);

    document.getElementById(`upvote-${postId}`).addEventListener('click', () => reactToPost(postId, 1));
    document.getElementById(`downvote-${postId}`).addEventListener('click', () => reactToPost(postId, 0));
    document.getElementById(`withdrawBtn-${postId}`).addEventListener('click', () => withdrawReact(postId, account));
}