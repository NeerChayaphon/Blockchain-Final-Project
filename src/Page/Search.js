import React, { useEffect, useState } from 'react';
import Certification from '../Certification.json';
import CertDetails from '../components/CertDetails';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useDisclosure,
  Link,
} from '@chakra-ui/react';

const ipfsAPI = require('ipfs-api');
const ipfs = ipfsAPI('ipfs.infura.io', '5001', { protocol: 'https' });
const ethers = require('ethers');

const Search = () => {
  const navigate = useNavigate();
  const [contract, setContract] = useState();
  const [buffer, setBuffer] = useState();
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

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
    setLoading(false);
  };

  // Load certificate
  const fetchCertificates = async (contract, CertID) => {
    const certificatesCount = await contract.certificateCount();
    for (var i = 1; i <= certificatesCount.toNumber(); i++) {
      const certificate = await contract.certificates(i);
      if (certificate.hash === CertID) {
        setCertificate(certificate);
        console.log(certificate);
        setNotFound(false);
        onOpen();
        break;
      }
    }
    setNotFound(true);
  };

  useEffect(() => {
    const load = async () => {
      await connectBlockChain();
    };
    load();
  }, []);

  const [ID, setID] = React.useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    await fetchCertificates(contract, ID);
  };

  return (
    <>
      {certificate && (
        <CertDetails
          certificate={certificate}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      )}
      
      <Container maxW={'5xl'}>
        {loading ? (
          <div id="loader" className="text-center mt-5">
            <p>Loading...</p>
          </div>
        ) : (
          <Stack
            as={Box}
            textAlign={'center'}
            justifyContent={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
            w={'full'}
            alignItems={'center'}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '3xl', md: '5xl' }}
              lineHeight={'110%'}
            >
              Blockchain Based Records System <br />
              <Text as={'span'} color={'green.400'}>
                For Academic Certification
              </Text>
            </Heading>
            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}
              width={'3xl'}
            >
              <form onSubmit={handleSubmit}>
                <Input
                  bgColor={'gray.50'}
                  isRequired
                  placeholder="Enter Certification ID"
                  size="lg"
                  mb={5}
                  onChange={e => setID(e.target.value)}
                />
                <Button
                  type="submit"
                  colorScheme={'green'}
                  bg={'green.400'}
                  rounded={'full'}
                  px={6}
                  _hover={{
                    bg: 'green.500',
                  }}
                >
                  Find Certificate
                </Button>
              </form>

              <Link _hover={'none'} href="/Add" >
              Add Certificates
            </Link>
              {notFound && !certificate && (
                <Alert status="error" w={'sm'}>
                  <AlertIcon />
                  <AlertTitle>Certificate Not Found!</AlertTitle>
                  <AlertDescription>Please Try Again.</AlertDescription>
                </Alert>
              )}
            </Stack>
          </Stack>
        )}
      </Container>
    </>
    //  { <Box h="calc(100vh)" bg={'gray.50'}>
    //     <Container maxW={'container.xl'} p={0}>
    //       <Flex
    //         h={{ base: 'auto', md: '100vh' }}
    //         py={[0, 10, 20]}
    //         direction={{ base: 'row-reverse', md: 'row' }}
    //         justifyContent={'center'}
    //       >
    //         <Heading> Blockchain-based records system for Academic Certification</Heading>
    //       </Flex>
    //     </Container>
    //   </Box>}
  );
};

export default Search;
