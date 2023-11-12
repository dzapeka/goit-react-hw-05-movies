import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AdditionalInfoContainer = styled.div`
  margin-top: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  /* color: inherit; */
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.02em;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    color: #ff5b22;
  }
`;

export const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
`;
