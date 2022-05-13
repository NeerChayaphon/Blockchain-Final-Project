import React from 'react';
import Clipboard from './Clipboard'
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
  useClipboard,
  Input,
  Flex,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';

const ShareCert = ({ certificate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button mr={3} onClick={onOpen}>
        Share
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container maxW={'full'}>
            <Clipboard shareData={`https://ipfs.infura.io/ipfs/${certificate.hash}`} type={'Certificate URL'} />
            <Clipboard shareData={certificate.hash} type={'Certificate ID'} />
              
              
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShareCert;
