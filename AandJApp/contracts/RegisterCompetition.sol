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
