import React from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Image,
  Text,
  Container,
  SimpleGrid,
  GridItem,
  Heading,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

const CertDetails = ({ certificate ,isOpen, onOpen, onClose}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={'6xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <VStack w="full" h="full">
              <Container>
                <Image
                  src={`https://ipfs.infura.io/ipfs/${certificate.hash}`}
                  alt="certificate"
                />
              </Container>
              <SimpleGrid w={'3xl'} columns={2} columnGap={3} rowGap={6} p={10} >
                <GridItem colSpan={1}>
                  <FormControl>
                    <FormLabel>Owner</FormLabel>
                    <Input color={'blackAlpha.900'} readOnly placeholder={certificate.owner} />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl>
                    <FormLabel>Published Date</FormLabel>
                    <Input
                    color={'blackAlpha.900'}
                      readOnly
                      placeholder={new Date(
                        certificate.timestamp.toNumber() * 1000
                      ).toLocaleString()}
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl>
                    <FormLabel>Details</FormLabel>
                    <Input readOnly placeholder={certificate.description} />
                  </FormControl>
                </GridItem>
              </SimpleGrid>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CertDetails;
