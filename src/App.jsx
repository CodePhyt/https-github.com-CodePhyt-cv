import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import WhyVRSEN from './components/WhyVRSEN';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #121212;
  color: #fff;
  overflow-x: hidden;
`;

const Section = styled.section`
  padding: 50px 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid #2d2d2d;

  @media (min-width: 768px) {
    padding: 80px 50px;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <Hero />
      <Section id="about">
        <About />
      </Section>
      <Section id="experience">
        <Experience />
      </Section>
      <Section id="why-vrsen">
        <WhyVRSEN />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
      <Footer />
    </AppContainer>
  );
};

export default App;
