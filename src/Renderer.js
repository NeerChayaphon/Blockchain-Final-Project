import React from 'react';
import Identicon from 'identicon.js';
import Certificates from './components/Certificates'
import ViewCert from './components/ViewCert';
import ShareCert from './components/ShareCert';

import {
  Container,
  Heading,
  Text,
  Button,
  HStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from '@chakra-ui/react';
const ethers = require('ethers');

const Renderer = ({ certificates, uploadCertificate, captureFile }) => {
  // certificate[0] = new Date(certificate[0].toNumber() * 1000).toLocaleString()
  return (
    <div>
      

      <Container maxW={'container.lg'} p={0}>
        <HStack justifyContent={'space-between'} marginTop={10} paddingY={5}>
          <Heading>Certificates</Heading>
          <Certificates
            uploadCertificate={uploadCertificate}
            captureFile={captureFile}
          />
        </HStack>

        <TableContainer bg={'white'}>
          <Table variant="simple">
            <TableCaption>Certificates are stored on IPFS and verify by Ethereum smart contract</TableCaption>
            <Thead>
              <Tr>
                <Th w={2}>Owner</Th>
                <Th w={2}>Published Date</Th>
                <Th w={2} s>
                  Details
                </Th>
                <Th isNumeric></Th>
              </Tr>
            </Thead>
            <Tbody>
              {certificates.map((certificate, key) => {
                return (
                  <Tr>
                    <Td>{certificate.owner}</Td>
                    <Td>
                      {new Date(
                        certificate.timestamp.toNumber() * 1000
                      ).toLocaleString()}
                    </Td>
                    <Td w={'sm'}>
                      <Text >{certificate.description}</Text>
                    </Td>
                    <Td>
                    <ViewCert certificate={certificate}/>
                    <ShareCert certificate={certificate}/>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default Renderer;
