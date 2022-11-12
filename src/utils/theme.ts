import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
  semanticTokens: {
    colors: {
      primary: {
        default: '#441db3',
        _dark: '#441db3',
      },
      blurColor: {
        default: '#d0d0d0',
      },
    },
  },
});
