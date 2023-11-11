import React from 'react';
import { Header, StyledHeaderContainer, StyledNavLink } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <StyledHeaderContainer>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </StyledHeaderContainer>
      </Header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
