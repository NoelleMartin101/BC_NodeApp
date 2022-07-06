pragma solidity ^0.5.0; //anything above 0.5.0

contract SubmitScore{
    address[16] public athletes;
    // Posting a Score
    function postScore(uint score) public returns (uint) {
        require(score >= 0);
    
        athletes[score] = msg.sender;    
        return score;
    }
    
    // Retrieving the athletes score
    function getAthletes() public view returns (address[16] memory) {
        return athletes;
    }
}