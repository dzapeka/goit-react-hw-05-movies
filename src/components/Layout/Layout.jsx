import React from 'react';
import { Header, StyledNavLink } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <StyledNavLink to="/" exact>
          Home
        </StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
