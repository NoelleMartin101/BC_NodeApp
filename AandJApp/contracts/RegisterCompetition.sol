pragma solidity ^0.5.0; //anything above 0.5.0

contract RegisterCompetition{
    address[16] public athletes;
    // Posting a Score
    function registerComp(uint compID) public returns (uint) {
        require(compID >= 0);
    
        athletes[compID] = msg.sender;    
        return compID;
    }
}