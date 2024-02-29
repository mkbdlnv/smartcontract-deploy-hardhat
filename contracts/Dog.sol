
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Dog is ERC20 {
    constructor() ERC20("DogCoin", "DOG") {
        _mint(msg.sender, 500 * (10 ** 18));
    }
}