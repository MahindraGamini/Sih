import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard/dashboard';
import { UserProvider } from './context/UserContext';

const App = () => {
  return (
    <ChakraProvider>
      <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
      </UserProvider>
    </ChakraProvider>
  );
};

export default App;
