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
} from '@chakra-ui/react';

const ViewCert = ({ certificate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button mr={3} onClick={onOpen}>
        View
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={'6xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
          <Container>
          <Image 
              src={`https://ipfs.infura.io/ipfs/${certificate.hash}`}
              alt="certificate"
            />
          </Container>
            
          </ModalBody>

         
        </ModalContent>
      </Modal>
    </>
  );
};

export default ViewCert;
