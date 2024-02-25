const ethereumButton = document.querySelector('#connectButton');
const registerUserButton = document.querySelector('#registerUserButton');
const userAvatar = document.querySelector('#userAvatar');
const userName = document.querySelector('#userName');
const usernameInput = document.querySelector('#usernameInput');
const avatarContractInput = document.querySelector('#avatarContractInput');
const avatarTokenIdInput = document.querySelector('#avatarTokenIdInput');
const isERC1155Input = document.querySelector('#isERC1155Input');
const avatarAmountInput = document.querySelector('#avatarAmountInput');
const userRegistrationSection = document.querySelector('#userRegistration');

let selectedAccount;
let userContract;

const contractABI = [
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
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "avatarContract",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "avatarTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isERC1155",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "avatarAmount",
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
		"inputs": [
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
		"name": "updateAvatar",
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
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "avatarContract",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "avatarTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isERC1155",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "avatarAmount",
				"type": "uint256"
			}
		],
		"name": "UserRegistered",
		"type": "event"
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
	}
];
const contractAddress = '0x27F92240a258a1f4e5Ee0471B502e2d1b1D28FEd';

window.addEventListener('load', () => {
    if (window.ethereum) {
        ethereum.request({ method: 'eth_accounts' })
        .then(handleAccountsChanged)
        .catch((err) => {
            console.error('Error fetching accounts:', err);
        });
    } else {
        console.error('MetaMask is not installed!');
    }
});

ethereumButton.addEventListener('click', () => {
    connectToMetaMask();
});

function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        console.log('Please connect to MetaMask.');
    } else {
        selectedAccount = accounts[0];
        console.log(`Found an authorized account: ${selectedAccount}`);
        ethereumButton.innerText = 'Connected';
        initContract();
        checkUserRegistration();
    }
}

async function connectToMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            handleAccountsChanged(accounts);
        } catch (error) {
            console.error('Error during account request:', error);
        }
    } else {
        console.error('MetaMask is not installed!');
    }
}

function initContract() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    userContract = new ethers.Contract(contractAddress, contractABI, signer);
    checkUserRegistration();
}

async function checkUserRegistration() {
    try {
        const userInfo = await userContract.getUserInfo(selectedAccount);
        if (userInfo && userInfo.username) {
            userName.innerText = userInfo.username;
            userAvatar.src = 'PATH_OR_METHOD_TO_RESOLVE_NFT_IMAGE'; // Properly replace this with actual image resolution logic
            console.log(`User ${userInfo.username} is already registered.`);
        } else {
            console.log('User is not registered.');
        }
    } catch (error) {
        console.error('Error fetching user info:', error);
    }
}
registerUserButton.addEventListener('click', async () => {
    const username = usernameInput.value.trim();
    const avatarContract = avatarContractInput.value.trim();
    const avatarTokenId = avatarTokenIdInput.value.trim();
    const isERC1155 = isERC1155Input.checked;
    const avatarAmount = 1;

    if (!username || !avatarContract || !avatarTokenId) {
        alert('Username, Avatar Contract, and Avatar Token ID are required');
        return;
    }
    try {
        await userContract.registerUser(username, avatarContract, avatarTokenId, isERC1155, avatarAmount);
        userName.innerText = username;
        // NFT to image URL resolution is handled elsewhere
        userAvatar.src = 'PATH_OR_METHOD_TO_RESOLVE_NFT_IMAGE'; // Update this line accordingly
        console.log('User registered/updated successfully');
    } catch (error) {
        console.error('Error registering/updating user:', error);
    }
});

// Call this function wherever you need to update the user's avatar
async function updateAvatar(avatarContract, avatarTokenId, isERC1155, avatarAmount) {
    try {
        await userContract.updateAvatar(avatarContract, avatarTokenId, isERC1155, avatarAmount);
        // resolve the NFT to an image URL after updating
        userAvatar.src = 'PATH_OR_METHOD_TO_RESOLVE_NFT_IMAGE'; // Update this line accordingly
        console.log('Avatar updated successfully');
    } catch (error) {
        console.error('Error updating avatar:', error);
    }
}

