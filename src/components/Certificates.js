import React, { useState } from 'react';

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
  VStack,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

import '../styles.css';

function Certificates({ uploadCertificate, captureFile }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [info, setInfo] = useState('');
  const [owner, setOwner] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    uploadCertificate(info,owner, captureFile);
  };
  return (
    <>
      <Button onClick={onOpen}>Add</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Certificate</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack w="full" h="full" spacing={3} alignItems="flex-start">
              <form onSubmit={handleSubmit}>
                <FormControl mb={2}>
                  <FormLabel>Owner Name</FormLabel>
                  <Input
                    
                    onChange={e => setOwner(e.target.value)}
                  />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Certification Details</FormLabel>
                  <Input
                   
                    onChange={e => setInfo(e.target.value)}
                  />
                </FormControl>

          
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png, .bmp, .gif"
                  onChange={captureFile}
                  id="fileUpload"
                />
                <Button w={'full'} size={'lg'} my={4} type="submit">Submit</Button>
              </form>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Certificates;
