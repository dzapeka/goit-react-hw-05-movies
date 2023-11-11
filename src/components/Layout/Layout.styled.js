import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  padding: 12px 24px;
  margin-bottom: 12px;
  background-color: #404bbf;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.02em;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &.active {
    color: tomato;
  }
`;
