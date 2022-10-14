import React from 'react';
import { Flex, BoxProps, Image, Tooltip } from '@chakra-ui/react';
import { useStore } from '@/store/index';

interface ToolBar extends BoxProps {}

const ToolBar = (props: ToolBar) => {
  const { w3s } = useStore();
  const iconStyle = {
    p: '0.5',
    h: '8',
    w: '8',
    mb: '2',
    cursor: 'pointer',
    _hover: { background: 'gray.200', borderRadius: '4px' }
  };

  return (
    <Flex h="100%" direction="column" justify="space-between" align="center" py={2} bg="#FAFAFA" {...props}>
      <Flex direction="column">
        <Tooltip label="Project" placement="right">
          <Image
            src="/images/icons/home.svg"
            onClick={() => {
              w3s.showContent = 'CURRENT_APPLETS';
            }}
            {...iconStyle}
            {...getSelectedStyles(w3s.showContent === 'CURRENT_APPLETS' || w3s.showContent === 'ALL_APPLETS' || w3s.showContent === 'ALL_INSTANCES')}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

function getSelectedStyles(selected: boolean) {
  return selected
    ? { background: 'gray.200' }
    : {
        background: 'transparent'
      };
}

export default ToolBar;
