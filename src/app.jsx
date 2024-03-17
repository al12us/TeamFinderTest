import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { router } from './app/app-router';
import './styles/global.css';

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
