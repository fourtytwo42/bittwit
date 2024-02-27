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
				"internalType": "string",
				"name": "username",
				"type": "string"
			}
		],
		"name": "getAddressByUsername",
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
const contractAddress = '0x4bAc50c59611c609c2E3818bd34B22A4F205B80e';

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
        if (userInfo && userInfo.username && !userInfo.isBanned) {
            userName.innerText = userInfo.username;
            if (userInfo.avatarTokenId > 0) {
                // Assuming you have a function to resolve NFT image URL from token ID
                userAvatar.src = await resolveNFTImage(userInfo.avatarTokenId);
            } else {
                // Set to default avatar if no NFT avatar is set
                userAvatar.src = 'DEFAULT_AVATAR_PATH';
            }
        } else {
            // Handle non-registered or banned user scenario
            console.log('User not registered or is banned');
        }
    } catch (error) {
        console.error('Error fetching user info:', error);
    }
}


registerUserButton.addEventListener('click', async () => {
    const username = usernameInput.value.trim();

    if (!username) {
        alert('Username is required');
        return;
    }

    try {
        const userInfo = await userContract.getUserInfo(selectedAccount);
        // If the user is already registered, trigger the change username function
        if (userInfo && userInfo.username && !userInfo.isBanned) {
            // Check if the new username is different from the current one
            if (userInfo.username !== username) {
                const tx = await userContract.changeMyUsername(username);
                await tx.wait();
                console.log('Username changed successfully to:', username);
                userName.innerText = username;
                // Avatar handling remains the same as before
            } else {
                alert('New username is the same as the current username.');
            }
        } else {
            // If the user is not registered or is banned, attempt to register as new
            const tx = await userContract.registerUser(username);
            await tx.wait();
            console.log('User registered successfully with username:', username);
            userName.innerText = username;
            // Since avatar setting is separate, handle the initial avatar display
            userAvatar.src = 'DEFAULT_AVATAR_PATH'; // Set a default or placeholder avatar
        }
    } catch (error) {
        console.error('Error handling user registration or username change:', error);
    }
});
