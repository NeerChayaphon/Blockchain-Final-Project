import React from 'react';

import {
  useClipboard,
  Input,
  Flex,
  FormLabel,
  FormControl,
  Button,
} from '@chakra-ui/react';

const Clipboard = ({ shareData, type }) => {
  const [value, setValue] = React.useState(shareData);
  const { hasCopied, onCopy } = useClipboard(value);
  return (
    <FormControl>
      <FormLabel>{type}</FormLabel>
      <Flex mb={2}>
        <Input
          value={shareData}
          isReadOnly
          placeholder="Welcome"
        />
        <Button onClick={onCopy} ml={2} bg={'blue.400'}
        _hover={{ bg: 'blue.500' }}
        color={'white'}>
          {hasCopied ? 'Copied' : 'Copy'}
        </Button>
      </Flex>
    </FormControl>
  );
};

export default Clipboard;
