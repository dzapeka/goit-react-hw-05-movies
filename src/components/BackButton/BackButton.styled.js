import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 15px;
  background-color: #9bbec8;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  text-decoration: none;
  color: #0c356a;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;

  margin-bottom: 15px;

  &:hover {
    background-color: #164863;
    color: #ffc436;
  }

  svg {
    margin-right: 10px;
    padding: 0px;
  }
`;
