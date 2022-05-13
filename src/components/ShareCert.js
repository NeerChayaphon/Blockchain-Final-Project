import React from 'react';
import Clipboard from './Clipboard';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Container,
 
} from '@chakra-ui/react';

const ShareCert = ({ certificate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button mr={3} onClick={onOpen} bg={'blue.400'}
        _hover={{ bg: 'blue.500' }}
        color={'white'}>
        Share
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container maxW={'full'}>
              <Clipboard
                shareData={`https://ipfs.infura.io/ipfs/${certificate.hash}`}
                type={'Certificate URL'}
              />
              <Clipboard shareData={certificate.hash} type={'Certificate ID'} />
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShareCert;
