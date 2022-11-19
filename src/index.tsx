import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom'
import { customTheme } from './utils/theme';
import { Provider } from "react-redux"
import { store } from './redux/store';
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from './react-query/queryClient';
import Fonts from './utils/Fonts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);