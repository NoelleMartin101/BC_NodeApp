pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract ManageScores {
    
    uint public scoreCount = 0;

    struct Score {
        int userID;
        string userName;
        int score;
        string date;
    }

    mapping(uint => Score) public competitionScores;
    
    event ScoreStored(
        int userID,
        string userName,
        int score,
        string date,
        uint id
    );
    
    function storeScore(
         int _userID,
        string memory _userName,
        int _score,
        string memory _date
    ) 
    
    public {
        Score memory score = Score(_userID, _userName, _score, _date);
        competitionScores[scoreCount] = score;
        uint id = scoreCount;
        scoreCount++;
        emit ScoreStored(_userID, _userName, _score, _date, id);
    }

    function retrieveScore() public view returns (Score[] memory) {
        Score[] memory scores = new Score[](scoreCount);
        
        for (uint i = 0; i < scoreCount; i++) {
            scores[i] = competitionScores[i];
        }

        return scores;
    }

}