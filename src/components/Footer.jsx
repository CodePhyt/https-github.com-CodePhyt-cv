import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #a8b2d1;
  text-align: center;
  padding: 20px;
  font-size: 0.9em;
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Osmankadir. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
