import React from 'react';
import Navbar from '../navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
