import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom'
import { customTheme } from './utils/theme';
import { Provider } from "react-redux"
import { store } from './redux/store';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const client = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <ChakraProvider theme={customTheme}>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);