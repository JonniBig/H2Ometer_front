import React from 'react';
import Header from 'components/Header/Header';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
        transition="Bounce"
      />
    </div>
  );
};

export default Layout;
