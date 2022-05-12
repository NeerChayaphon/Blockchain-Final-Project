import React from 'react';
import Identicon from 'identicon.js';
import Certificates from './Certificates'

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
      {/* {certificates.map((certificate, key) => {
              return (
                <div className="card mb-4" key={key}>
                  <div className="card-header">
                    <img
                      className="mr-2"
                      width="30"
                      height="30"
                      src={`data:certificate/png;base64,${new Identicon(
                        certificate.author,
                        30
                      ).toString()}`}
                    />
                    <small className="text-muted">{certificate.author}</small>
                  </div>
                  <ul
                    id="certificateList"
                    className="list-group list-group-flush"
                  >
                    <li className="list-group-item">
                      <p className="text-center">
                        <img
                          src={`https://ipfs.infura.io/ipfs/${certificate.hash}`}
                          style={{ maxWidth: '420px' }}
                        />
                      </p>
                      <p>{certificate.description}</p>
                      <p>{new Date(certificate.timestamp.toNumber() * 1000).toLocaleString()}</p>
                    </li>
                  </ul>
                </div>
              );
            })} */}

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
            <TableCaption>Imperial to metric conversion factors</TableCaption>
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
                    <Td>
                      <Text w={'sm'}>{certificate.description}</Text>
                    </Td>
                    <Td>
                      <Button mr={2}>View</Button>
                      <Button>Share</Button>
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
