import React from 'react';
import { Flex, Box, Grid, GridItem, Image, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { Center } from '@chakra-ui/layout';
import { publicConfig } from '@/constants/config';
import { useStore } from '@/store/index';

const Support = () => {
  const {
    w3s: {
      env: { envs }
    }
  } = useStore();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center w="100%" h="calc(100vh - 100px)">
      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="412px" h="328px" bg="#fff">
          <a href="http://docs.w3bstream.com" target="_blank" rel="noopener noreferrer">
            <Flex
              w="100%"
              h="100%"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              _hover={{
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
              }}
            >
              <Image src="/images/icons/documentation.svg" />
              <Box mt="32px">Documentation</Box>
            </Flex>
          </a>
        </GridItem>
        <GridItem w="412px" h="328px" bg="#fff">
          <a href="http://developers.iotex.io/academy" target="_blank" rel="noopener noreferrer">
            <Flex
              w="100%"
              h="100%"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              _hover={{
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
              }}
            >
              <Image boxSize={'70px'} color="#000" src="/images/Turorials.svg" />
              <Box mt="32px">Tutorials</Box>
            </Flex>
          </a>
        </GridItem>
        <GridItem w="412px" h="328px" bg="#fff">
          <a href="https://github.com/machinefi/w3bstream/discussions" target="_blank" rel="noopener noreferrer">
            <Flex
              w="100%"
              h="100%"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              _hover={{
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
              }}
            >
              <Image src="/images/icons/file-an-issue.svg" />
              <Box mt="32px">File an Issue</Box>
            </Flex>
          </a>
        </GridItem>
        <GridItem w="412px" h="328px" bg="#fff">
          <a href="http://developers.iotex.io/grants" target="_blank" rel="noopener noreferrer">
            <Flex
              w="100%"
              h="100%"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              _hover={{
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
              }}
            >
              <Image src="/images/icons/apply-for-grant.svg" />
              <Box mt="32px">Apply for grant</Box>
            </Flex>
          </a>
        </GridItem>
        <GridItem w="412px" h="328px" bg="#fff">
          <Flex
            w="100%"
            h="100%"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            _hover={{
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
            }}
            onClick={onOpen}
          >
            <Image src="/images/icons/about.svg" />
            <Box mt="32px">About</Box>
          </Flex>
        </GridItem>
      </Grid>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>W3bstream DevNet</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="30px">
            <Flex alignItems="center" fontSize="16px" fontWeight={700}>
              <Box>Version:</Box>
              <Box ml="10px">{publicConfig.version}</Box>
            </Flex>
            <Flex alignItems="center" fontSize="16px" fontWeight={700}>
              <Box>W3bstream Version:</Box>
              <Box ml="10px">{envs.value?.w3bstreamVersion}</Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default observer(Support);
