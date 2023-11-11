import React from 'react';
import { StyledButton } from './BackButton.styled';
import { IoIosArrowRoundBack } from 'react-icons/io';

const BackButton = () => {
  return (
    <StyledButton>
      <IoIosArrowRoundBack size={30} />
      Go back
    </StyledButton>
  );
};

export default BackButton;
