import React, { useEffect, useState } from 'react';
import Renderer from './Renderer.js';
import Certification from './Certification.json';
import Certificates from './Certificates.js';
import Navbar from './Navbar.js';
import { Box } from '@chakra-ui/react';

// https://github.com/mnzsss/react-chakra-pagination

const ipfsAPI = require('ipfs-api');
const ipfs = ipfsAPI('ipfs.infura.io', '5001', { protocol: 'https' });
const ethers = require('ethers');

function App() {
  const [contract, setContract] = useState();
  const [buffer, setBuffer] = useState();
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(false);

  const connectBlockChain = async () => {
    setLoading(true);
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();
    const contract_address = process.env.REACT_APP_CONTRACT_ADDRESS; //local
    let deployedContract = new ethers.Contract(
      contract_address,
      Certification.abi,
      signer
    );
    setContract(deployedContract);

    await fetchImgages(deployedContract);
    setLoading(false);
  };

  // Load certificates
  const fetchImgages = async contract => {
    const certificatesCount = await contract.certificateCount();
    for (var i = 1; i <= certificatesCount.toNumber(); i++) {
      const certificate = await contract.certificates(i);
      certificates.push(certificate);
    }
  };

  useEffect(() => {
    const load = async () => {
      await connectBlockChain();
    };
    load();
  }, []);

  const captureFile = event => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      let buff = Buffer(reader.result);
      setBuffer(buff);
    };
  };

  const uploadCertificate = async (description,owner) => {
    //adding file to the IPFS
    ipfs.files.add(buffer, async (error, result) => {
      console.log('Ipfs result = ', result);
      if (error) {
        console.error(error);
        return;
      }
      //uploading hash to blockchain
      const testOwner = 'Neer';
      const tx = await contract.uploadCertificate(
        result[0].hash,
        owner,
        description
      );
      console.log('tx = ', tx);
      const receipt = await tx.wait();
      console.log('receipt = ', receipt);

      window.location.reload(false);
    });
  };

  return (
    <Box h="calc(100vh)" bg={'gray.50'}>
      <Navbar />

      {
        loading ? (
          <div id="loader" className="text-center mt-5">
            <p>Loading...</p>
          </div>
        ) : (
          <Renderer
          certificates={certificates}
          captureFile={captureFile}
          uploadCertificate={uploadCertificate}
        />
        )
        
        
        // (
        //   <Certificates
        //     uploadCertificate={uploadCertificate}
        //     captureFile={captureFile}
        //   />
        // )
        
      }
    </Box>
  );
}
export default App;
