pragma solidity ^0.7.0;

contract Certification {
    string public name;
    uint256 public certificateCount = 0;
    mapping(uint256 => Certificate) public certificates;

    struct Certificate {
        uint256 id;
        string hash;
        string owner;
        string description;
        uint256 timestamp;
        address payable author;
    }

    event CertificateCreated(
        uint256 id,
        string hash,
        string owner,
        string description,
        uint256 timestamp,
        address payable author
    );


    constructor() public {
        name = "Certification";
    }

    function uploadCertificate(string memory _certHash, string memory _owner, string memory _description)
        public
    {
        // Make sure the certificate hash exists
        require(bytes(_certHash).length > 0, "Must have HASH");
        // Make sure certificate description exists
        require(bytes(_description).length > 0, "Must have DESCRIPTION");
        // Make sure uploader address exists
        require(msg.sender != address(0), "Must have AUTHOR");

        // Increment certificate id
        certificateCount++;

        // Add Certificate to the contract
        certificates[certificateCount] = Certificate(
            certificateCount,
            _certHash,
            _owner,
            _description,
            block.timestamp,
            msg.sender
        );
        // Trigger an event
        emit CertificateCreated(certificateCount, _certHash, _owner, _description, block.timestamp,msg.sender);
    }

    
}
