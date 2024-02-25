

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
const registerUserButton = document.querySelector('#registerUserButton');
const userAvatar = document.querySelector('#userAvatar');
const userName = document.querySelector('#userName');
let selectedAccount;
let userContract;

document.addEventListener('DOMContentLoaded', () => {
    init();
});

async function init() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                selectedAccount = accounts[0];
                console.log(`Found connected account: ${selectedAccount}`);
                ethereumButton.innerText = 'Connected';
                initContracts();
                await checkUserRegistration();
            } else {
                console.log('MetaMask is installed but not connected');
            }
        } catch (error) {
            console.error('Error checking MetaMask connection:', error);
        }

        ethereum.on('accountsChanged', async (accounts) => {
            if (accounts.length > 0) {
                selectedAccount = accounts[0];
                console.log(`Account changed to: ${selectedAccount}`);
                initContracts();
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
            initContracts();
            await checkUserRegistration();
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

// Function to call createPost in the PostNFT contract
async function createPost(textLink, imageLink, promptLink) {
    try {
        const tx = await postNftContract.createPost(textLink, imageLink, promptLink);
        await tx.wait();
        console.log('Post created successfully');
    } catch (error) {
        console.error('Error creating post:', error);
    }
}



async function handlePostSubmission(event) {
    event.preventDefault();
    const postText = document.getElementById('postText').value;
    const imageOption = document.querySelector('input[name="imageOption"]:checked').value;
    const imageUploadElement = document.getElementById('imageUpload');
    const imagePromptElement = document.getElementById('imagePrompt');

    let imageLink = '';
    if (imageOption === 'upload' && imageUploadElement.files.length > 0) {
        // Assume uploadImage returns the URL of the uploaded image
        imageLink = await uploadImage(imageUploadElement.files[0]);
    } else if (imageOption === 'generate') {
        // Assume generateImage returns the URL of the generated image based on the prompt
        imageLink = await generateImage(imagePromptElement.value);
    }

    // Assuming postText is the URL to the text content or directly the text content
    // You need to handle how you want to convert postText into a link if required
    const textLink = postText; // This could also be a call to upload text to a storage service and get a link back
    const promptLink = imagePromptElement.value; // Using the prompt directly, adjust as needed

    await createPost(textLink, imageLink, promptLink);
}

function handleImageOptionChange() {
    const uploadInput = document.getElementById('imageUpload');
    const promptInput = document.getElementById('imagePrompt');
    const generateButton = document.getElementById('generateButton');
    if (document.getElementById('uploadImage').checked) {
        uploadInput.style.display = 'block';
        promptInput.style.display = 'none';
        generateButton.style.display = 'none';
    } else {
        uploadInput.style.display = 'none';
        promptInput.style.display = 'block';
        generateButton.style.display = 'block';
    }
}


// Mock function to simulate image upload
async function uploadImage(file) {
    // You need to implement this function to upload the image file and return the URL
    console.log('Uploading image...');
    // Return a placeholder or the actual URL after upload
    return 'https://example.com/uploaded_image.jpg';
}




document.getElementById('imageUpload').addEventListener('change', function(event) {
    const [file] = event.target.files;
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block'; // Show the image preview
        };
        reader.readAsDataURL(file); // Read the file as a Data URL to display it
    }
});


document.getElementById('generateImage').addEventListener('change', function() {
    document.getElementById('generateButton').textContent = 'Generate';
});

document.getElementById('generateButton').addEventListener('click', function() {
    this.textContent = 'Regenerate';
    // Implement the logic for generating an image based on the prompt
});

document.addEventListener('DOMContentLoaded', () => {
    // Initial setup if needed
    init();

    // Handle form submission
    document.getElementById('postForm').addEventListener('submit', handlePostSubmission);

    // Toggle visibility of prompt input and generate button based on selected image option
    document.getElementsByName('imageOption').forEach(radio => {
        radio.addEventListener('change', handleImageOptionChange);
    });

    // Generate image when the generate button is clicked
document.getElementById('generateButton').addEventListener('click', async () => {
    const desc = document.getElementById('imagePrompt').value.trim();
    const generateButton = document.getElementById('generateButton');
    generateButton.disabled = true; // Disable the button to prevent multiple clicks

    if (desc) {
        try {
            const imageURL = await generateImage(desc);
            document.getElementById('imagePreview').src = imageURL;
        } catch (error) {
            console.error("Failed to generate image:", error);
            // Optionally, inform the user to enter a prompt
        } finally {
            generateButton.disabled = false; // Re-enable the button after the process is complete
        }
    } else {
        console.log('Please enter a prompt for the image.');
        generateButton.disabled = false; // Re-enable the button if there's no description
    }
});

});

async function generateImage(desc) {
    const hfApiKey = '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'; // Replace with your actual API key

    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
            {
                headers: { 
                    'Authorization': `Bearer ${hfApiKey}`
                },
                method: "POST",
                body: JSON.stringify({ inputs: desc }),
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const blob = await response.blob();
        return URL.createObjectURL(blob);
    } catch (error) {
        console.error("Error in generateImage:", error);
        throw error;
    }
}

function handleImageOptionChange() {
    const imagePrompt = document.getElementById('imagePrompt');
    const generateButton = document.getElementById('generateButton');
    const imageUpload = document.getElementById('imageUpload');

    if (document.getElementById('generateImage').checked) {
        imagePrompt.style.display = 'block';
        generateButton.style.display = 'block';
        imageUpload.style.display = 'none';
    } else {
        imagePrompt.style.display = 'none';
        generateButton.style.display = 'none';
        imageUpload.style.display = 'block';
    }
}