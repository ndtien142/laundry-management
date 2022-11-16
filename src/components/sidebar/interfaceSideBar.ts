import { BoxProps, FlexProps } from '@chakra-ui/react';
import { ReactText } from 'react';

export interface NavItemProps extends FlexProps {
  icon: any;
  children: ReactText;
  path: string;
}

export interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export interface LinkItemProps {
  name: string;
  icon: any;
  path: string;
}

export interface MobileProps extends FlexProps {
  onOpen: () => void;
}
