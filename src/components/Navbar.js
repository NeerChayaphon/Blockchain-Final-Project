import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  Heading,
} from '@chakra-ui/react';

import { Search2Icon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const navigate = useNavigate();

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={'gray.200'} px={4}>
      <Flex
        h={16}
        alignItems={'center'}
        paddingX={4}
        justifyContent={'flex-end'}
      >
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Link _hover={'none'} href="/Search" >
              Search Certificates
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

/*<Box bg={'tomato'} w={'100%'} p={4}>
      <Flex h={8} p={4} alignItems={'center'} justifyContent={'space-between'}>
        <HStack w={'100%'} justifyContent={'space-between'}>
          <Text>Logo</Text>
          <HStack spacing={7}>
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
            <Button>Profile</Button>
          </HStack>
        </HStack>
      </Flex>
    </Box> */
