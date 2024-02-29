// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract ReactLiquidityPool is Ownable(msg.sender) {
    IERC20 public reactToken;
    IERC721 public nftContract;

    uint256 public postNFTOwnerFeePercent = 3;
    uint256 public contractOwnerFeePercent = 2;

    uint256 private constant BLOCKS_PER_HALVING = 2571; // Approx blocks per hour

    struct Pool {
        uint256 totalShares;
        uint256 totalDeposited;
        uint256 startBlock; // Start block for this specific pool
        mapping(address => uint256) userShares;
    }

    struct NFTPool {
        mapping(uint256 => Pool) reacts;
    }

    mapping(uint256 => NFTPool) private nftPools;

    constructor(address _reactToken, address _nftContract) {
        reactToken = IERC20(_reactToken);
        nftContract = IERC721(_nftContract);
    }

    function deposit(uint256 nftId, uint256 reactSubId, uint256 amount) external {
        require(amount > 0, "Amount must be positive");
        NFTPool storage nftPool = nftPools[nftId];
        Pool storage pool = nftPool.reacts[reactSubId];

        // Initialize startBlock for the pool upon the first deposit
        if (pool.totalDeposited == 0) {
            pool.startBlock = block.number;
        }

        uint256 shares = calculateShares(nftId, reactSubId, amount);

        require(reactToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");

        pool.totalDeposited += amount;
        pool.userShares[msg.sender] += shares;
        pool.totalShares += shares;
    }

function calculateShares(uint256 nftId, uint256 reactSubId, uint256 amount) public view returns (uint256) {
    NFTPool storage nftPool = nftPools[nftId];
    Pool storage pool = nftPool.reacts[reactSubId];
    
    // Ensure the pool has been initialized
    require(pool.startBlock > 0 || pool.totalDeposited == 0, "Pool has not been initialized or error in pool setup.");

    // Calculate the number of hours since the pool started
    uint256 blocksSinceStart = block.number - pool.startBlock;
    uint256 BLOCKS_PER_HOUR = 3600 / 60; // Assuming a block time of ~13 seconds
    uint256 hoursSinceStart = blocksSinceStart / BLOCKS_PER_HOUR;

    uint256 initialShares = amount * 2; // Initial shares doubled for simplicity

    // Adjust shares based on a 10% reduction for each hour since the pool started
    for (uint256 i = 0; i < hoursSinceStart; i++) {
        initialShares = (initialShares * 9) / 10; // Decrease shares by 10% per hour
    }

    return initialShares;
}



    function withdraw(uint256 nftId, uint256 reactSubId) external {
        NFTPool storage nftPool = nftPools[nftId];
        Pool storage pool = nftPool.reacts[reactSubId];
        uint256 userShares = pool.userShares[msg.sender];
        require(userShares > 0, "No shares to withdraw");

        uint256 withdrawAmount = (pool.totalDeposited * userShares) / pool.totalShares;
        uint256 postNFTOwnerFee = (withdrawAmount * postNFTOwnerFeePercent) / 100;
        uint256 contractOwnerFee = (withdrawAmount * contractOwnerFeePercent) / 100;
        uint256 finalWithdrawAmount = withdrawAmount - postNFTOwnerFee - contractOwnerFee;

        pool.totalDeposited -= withdrawAmount;
        pool.totalShares -= userShares;
        delete pool.userShares[msg.sender];

        require(reactToken.transfer(nftContract.ownerOf(nftId), postNFTOwnerFee), "PostNFT Owner fee transfer failed");
        require(reactToken.transfer(owner(), contractOwnerFee), "Contract Owner fee transfer failed");
        require(reactToken.transfer(msg.sender, finalWithdrawAmount), "Transfer failed");
    }

    function getPoolInfo(uint256 nftId, uint256 reactSubId) external view returns (uint256, uint256) {
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
