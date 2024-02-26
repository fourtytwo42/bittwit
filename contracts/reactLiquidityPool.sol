// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ReactLiquidityPool is Ownable {
    IERC20 public reactToken;

    struct Pool {
        uint256 totalShares;
        uint256 totalDeposited;
        mapping(address => uint256) userShares;
    }

    struct NFTPool {
        mapping(uint256 => Pool) reacts; // Mapping from react sub ID to Pool
    }

    // Changed from public to private to comply with Solidity restrictions
    mapping(uint256 => NFTPool) private nftPools; // NFT ID to NFTPool

    constructor(address _reactToken) Ownable(msg.sender) {
        reactToken = IERC20(_reactToken);
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
    uint256 diminishingFactor = 10000; // Define a base factor for calculation to avoid floating points

    if (pool.totalDeposited == 0) {
        return amount * 2; // Initial multiplier for the very first deposit
    }

    uint256 rate = diminishingFactor - (pool.totalDeposited / diminishingFactor);
    rate = rate < diminishingFactor / 2 ? diminishingFactor / 2 : rate; // Ensure the rate does not go below a certain threshold (e.g., 50% of the original rate).

    // Apply the diminishing rate to the calculation. You might need to adjust the formula to fit your requirements.
    return (amount * pool.totalShares * rate) / (pool.totalDeposited * diminishingFactor);
}


    // Users call this to withdraw their ReactTokens based on their share of the pool
    function withdraw(uint256 nftId, uint256 reactSubId) external {
        NFTPool storage nftPool = nftPools[nftId];
        Pool storage pool = nftPool.reacts[reactSubId];
        uint256 userShares = pool.userShares[msg.sender];
        require(userShares > 0, "No shares to withdraw");

        uint256 withdrawAmount = (pool.totalDeposited * userShares) / pool.totalShares;

        // Update pool information
        pool.totalDeposited -= withdrawAmount;
        pool.totalShares -= userShares;
        delete pool.userShares[msg.sender];

        // Transfer ReactTokens back to user
        require(reactToken.transfer(msg.sender, withdrawAmount), "Transfer failed");
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
