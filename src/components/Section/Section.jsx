import React from 'react';
import { StyledSection, StyledSectionTitle } from './Section.styled';

const Section = ({ children, title = false }) => {
  return (
    <StyledSection>
      {title && <StyledSectionTitle>{title}</StyledSectionTitle>}
      {children}
    </StyledSection>
  );
};
export default Section;
