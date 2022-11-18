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
      mainBg: { default: '#F8F8F8' },
      grey: {
        default: 'gray.200',
        _dark: 'gray.700',
      },
      whiteColor: {
        default: '#FFF',
        _dark: 'gray.900',
      },
    },
  },
  breakpoint: {
    base: '0px',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'monospace, serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    logo: '40px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
});
