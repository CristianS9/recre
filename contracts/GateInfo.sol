// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./SafeMath.sol";

contract GateInfo {
    using SafeMath for uint256;
    bool public called;
    bytes8 public key;
    address public txO;
    address public mSend;

    function writeInfo(bytes8 _gateKey) public {
        called = true;
        key = _gateKey;
        txO = tx.origin;
        mSend = msg.sender;
    }

    function makeFalse() public {
        called = false;
    }
}
