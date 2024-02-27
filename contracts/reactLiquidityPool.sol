// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol"; // Import the interface to interact with NFT contract

contract ReactLiquidityPool is Ownable {
    IERC20 public reactToken;
    IERC721 public nftContract; // Variable to hold NFT contract

    // Fee percentages
    uint256 public postNFTOwnerFeePercent = 3;
    uint256 public contractOwnerFeePercent = 1;

    struct Pool {
        uint256 totalShares;
        uint256 totalDeposited;
        mapping(address => uint256) userShares;
    }

    struct NFTPool {
        mapping(uint256 => Pool) reacts; // Mapping from react sub ID to Pool
    }

    mapping(uint256 => NFTPool) private nftPools; // NFT ID to NFTPool

    constructor(address _reactToken, address _nftContract) Ownable(msg.sender) {
        reactToken = IERC20(_reactToken);
        nftContract = IERC721(_nftContract); // Initialize NFT contract
    }

    // Users call this function to deposit ReactTokens and receive shares in return
    function deposit(uint256 nftId, uint256 reactSubId, uint256 amount) external {
        require(amount > 0, "Amount must be positive");
        NFTPool storage nftPool = nftPools[nftId];
        Pool storage pool = nftPool.reacts[reactSubId];

        // Calculate shares to be given for the deposit
        uint256 shares = calculateShares(nftId, reactSubId, amount);

        // Transfer ReactTokens from user to contract
        require(reactToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");

        // Update pool and user information
        pool.totalDeposited += amount;
        pool.userShares[msg.sender] += shares;
        pool.totalShares += shares;
    }

    // Calculate the number of shares a deposit will receive
    function calculateShares(uint256 nftId, uint256 reactSubId, uint256 amount) public view returns (uint256) {
        NFTPool storage nftPool = nftPools[nftId];
        Pool storage pool = nftPool.reacts[reactSubId];
        if (pool.totalDeposited == 0) {
            return amount * 2; // Initial multiplier for the very first deposit
        }

        // Use a diminishing factor to calculate shares
        uint256 rate = 10000 - (pool.totalDeposited / 10000);
        return (amount * rate) / 10000;
    }

    // Users call this to withdraw their ReactTokens based on their share of the pool
    function withdraw(uint256 nftId, uint256 reactSubId) external {
        NFTPool storage nftPool = nftPools[nftId];
        Pool storage pool = nftPool.reacts[reactSubId];
        uint256 userShares = pool.userShares[msg.sender];
        require(userShares > 0, "No shares to withdraw");

        uint256 withdrawAmount = (pool.totalDeposited * userShares) / pool.totalShares;
        uint256 postNFTOwnerFee = (withdrawAmount * postNFTOwnerFeePercent) / 100;
        uint256 contractOwnerFee = (withdrawAmount * contractOwnerFeePercent) / 100;
        uint256 finalWithdrawAmount = withdrawAmount - postNFTOwnerFee - contractOwnerFee;

        // Update pool information
        pool.totalDeposited -= withdrawAmount;
        pool.totalShares -= userShares;
        delete pool.userShares[msg.sender];

        // Transfer fees to NFT owner and contract owner
        address nftOwner = nftContract.ownerOf(nftId); // Get NFT owner
        require(reactToken.transfer(nftOwner, postNFTOwnerFee), "PostNFT Owner fee transfer failed");
        require(reactToken.transfer(owner(), contractOwnerFee), "Contract Owner fee transfer failed");

        // Transfer ReactTokens back to user
        require(reactToken.transfer(msg.sender, finalWithdrawAmount), "Transfer failed");
    }

    // Getter functions to access private mapping data
    function getPoolInfo(uint256 nftId, uint256 reactSubId) external view returns (uint256 totalShares, uint256 totalDeposited) {
        NFTPool storage nftPool = nftPools[nftId];
        Pool storage pool = nftPool.reacts[reactSubId];
        return (pool.totalShares, pool.totalDeposited);
    }

    function getUserShares(uint256 nftId, uint256 reactSubId, address user) external view returns (uint256) {
        NFTPool storage nftPool = nftPools[nftId];
        Pool storage pool = nftPool.reacts[reactSubId];
        return pool.userShares[user];
    }
}
