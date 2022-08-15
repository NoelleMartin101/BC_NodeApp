pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract ManageRegistrations {
    
    uint public registrationCount = 0;

    struct Registration {
        int userID;
        string userName;
        int competitionID;
        string date;
    }

    mapping(uint => Registration) public competitionRegistrations;
    
    event RegistrationStored(
        int userID,
        string userName,
        int competitionID,
        string date,
        uint id
    );
    
    function storeRegistration(
         int _userID,
        string memory _userName,
        int _competitionID,
        string memory _date
    ) 
    
    public {
        Registration memory registration = Registration(_userID, _userName, _competitionID, _date);
        competitionRegistrations[registrationCount] = registration;
        uint id = registrationCount;
        registrationCount++;
        emit RegistrationStored(_userID, _userName, _competitionID, _date, id);
    }

    function retrieveRegistration() public view returns (Registration[] memory) {
        Registration[] memory registrations = new Registration[](registrationCount);
        
        for (uint i = 0; i < registrationCount; i++) {
            registrations[i] = competitionRegistrations[i];
        }

        return registrations;
    }

}