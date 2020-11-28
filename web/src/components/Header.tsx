import React from 'react';

import { ContainerHeader } from '../styles/components/Header';

import logo from '../images/logo.png';

const Header = () => {
  return (
    <>
      <ContainerHeader>
        <img src={logo} alt="logo"></img>
      </ContainerHeader>
    </>
  )
};

export default Header;
