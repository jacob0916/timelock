pragma solidity ^0.8.20;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract WanTimelockController is TimelockController {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    constructor(uint256 minDelay, address[] memory proposers, address[] memory executors, address admin) TimelockController(minDelay, proposers, executors, admin){
        _setRoleAdmin(DEFAULT_ADMIN_ROLE, ADMIN_ROLE);
		_setRoleAdmin(PROPOSER_ROLE, ADMIN_ROLE);
		_setRoleAdmin(EXECUTOR_ROLE, ADMIN_ROLE);
		_setRoleAdmin(CANCELLER_ROLE, ADMIN_ROLE);
		_grantRole(ADMIN_ROLE, admin);
    }
}
