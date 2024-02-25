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

document.addEventListener('DOMContentLoaded', () => {
    init();
});

async function init() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                // MetaMask is already connected
                selectedAccount = accounts[0];
                console.log(`Found connected account: ${selectedAccount}`);
                ethereumButton.innerText = 'Connected';
                initContract();
                await checkUserRegistration();
            } else {
                // MetaMask is not connected or the user has not connected any accounts
                console.log('MetaMask is installed but not connected');
            }
        } catch (error) {
            console.error('Error checking MetaMask connection:', error);
        }

        ethereum.on('accountsChanged', async (accounts) => {
            if (accounts.length > 0) {
                selectedAccount = accounts[0];
                console.log(`Account changed to: ${selectedAccount}`);
                initContract();
                await checkUserRegistration();
            }
        });
    } else {
        console.error('MetaMask is not installed!');
    }

    ethereumButton.addEventListener('click', () => {
        connectToMetaMask();
    });
}

async function connectToMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            selectedAccount = accounts[0];
            console.log(`Connected to account: ${selectedAccount}`);
            ethereumButton.innerText = 'Connected';
            initContract();
            await checkUserRegistration();
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
}

async function checkUserRegistration() {
    try {
        const userInfo = await userContract.getUserInfo(selectedAccount);
        console.log(selectedAccount);
        if (userInfo && userInfo.username) {
            userName.innerText = userInfo.username;
            userAvatar.src = 'PATH_OR_METHOD_TO_RESOLVE_NFT_IMAGE';
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
        userAvatar.src = 'PATH_OR_METHOD_TO_RESOLVE_NFT_IMAGE';
        console.log('User registered/updated successfully');
    } catch (error) {
        console.error('Error registering/updating user:', error);
    }
});
