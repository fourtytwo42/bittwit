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

    mapping(uint256 => Pool) public pools; // NFT ID to Pool

    constructor(address _reactToken) Ownable(msg.sender) {
        reactToken = IERC20(_reactToken);
    }

    // Users call this function to deposit ReactTokens and receive shares in return
    function deposit(uint256 nftId, uint256 amount) external {
        require(amount > 0, "Amount must be positive");
        Pool storage pool = pools[nftId];
        
        // Calculate shares to be given for the deposit
        uint256 shares = calculateShares(nftId, amount);
        
        // Transfer ReactTokens from user to contract
        require(reactToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        
        // Update pool and user information
        pool.totalDeposited += amount;
        pool.userShares[msg.sender] += shares;
        pool.totalShares += shares;
    }

    // Calculate the number of shares a deposit will receive
    // Early deposits receive more shares per ReactToken than later deposits
    function calculateShares(uint256 nftId, uint256 amount) public view returns (uint256) {
        Pool storage pool = pools[nftId];
        if (pool.totalDeposited == 0) {
            return amount * 2; // Initial multiplier for the very first deposit
        }
        return (amount * pool.totalShares) / pool.totalDeposited;
    }

    // Users call this to withdraw their ReactTokens based on their share of the pool
    function withdraw(uint256 nftId) external {
        Pool storage pool = pools[nftId];
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
}