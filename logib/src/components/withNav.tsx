import React from 'react';
import NavBar from './navbar';
import { Outlet } from 'react-router';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};