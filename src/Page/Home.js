import React from 'react';

import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxW={'5xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        justifyContent={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
        w={'full'}
        alignItems={'center'}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: 'xl', sm: '3xl', md: '5xl' }}
          lineHeight={'110%'}
        >
          Blockchain Based Records System <br />
          <Text as={'span'} color={'green.400'}>
            For Academic Certification
          </Text>
        </Heading>
        <Stack
          direction={'column'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}
          width={'3xl'}
        >
          <Heading w={'xl'} size="md" color={'gray.500'} mb={10}>
            A decentralized platform for storing and verifying academic
            certificate in the Blockchain.
          </Heading>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Stack spacing={6} direction={'row'}>
              <Button
                rounded={'full'}
                px={6}
                colorScheme={'green'}
                bg={'green.400'}
                _hover={{ bg: 'green.500' }}
                onClick={() => navigate('/Add')}
              >
                Add Certificate
              </Button>
              <Button
                rounded={'full'}
                px={5}
                onClick={() => navigate('/Search')}
              >
                Search Certificate
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Home;
