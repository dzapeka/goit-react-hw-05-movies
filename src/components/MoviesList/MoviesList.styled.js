import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin-top: 15px;
`;

export const StyledListItem = styled.li`
  position: relative;
  padding-left: 20px;

  &::before {
    content: '•';
    color: #0174be;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5em;
  }

  &:hover {
    &::before {
      color: #ff9130;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.02em;

  &:hover {
    color: #ff9130;
  }
`;
