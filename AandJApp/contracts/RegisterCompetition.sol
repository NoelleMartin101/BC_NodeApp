pragma solidity ^0.5.0; //anything above 0.5.0

contract RegisterCompetition{
    address[16] public athletes;
    // Register for competition
    function register(uint competitionID) public returns (uint) {
        require(competitionID > 0);
    
        athletes[competitionID] = msg.sender;    
        return competitionID;
    }    
}
//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.7;

contract saturday {
    
    string internal flower = "rose";

    function getFlower() external view returns(string memory) {
        return flower;
    }

    function changeFlower(string memory _word) external {
        flower = _word;
    }
}