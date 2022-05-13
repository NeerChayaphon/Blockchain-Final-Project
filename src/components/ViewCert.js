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

const ViewCert = ({ certificate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button mr={3} onClick={onOpen} bg={'purple.400'}
        _hover={{ bg: 'purple.500' }}
        color={'white'}>
        View
      </Button>

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

            {/* <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
              <GridItem colSpan={1}>
                
                <Text>{certificate.owner}</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text>{new Date(
                        certificate.timestamp.toNumber() * 1000
                      ).toLocaleString()}</Text>
              </GridItem>
              <GridItem colSpan={2}>
              <Text>{certificate.description}</Text>
              </GridItem>
            </SimpleGrid> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ViewCert;
