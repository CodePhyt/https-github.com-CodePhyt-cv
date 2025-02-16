import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  background-color: #1a1a1a;
  color: #fff;
  text-align: center;
  padding: 150px 20px 100px; /* Increased top padding */
  overflow: hidden; /* Ensure no content overflows */
`;

const Name = styled(motion.h1)`
  font-size: 3em;
  margin-bottom: 10px;
  color: #64ffda;
`;

const Tagline = styled(motion.p)`
  font-size: 1.5em;
  color: #a8b2d1;
  margin-bottom: 30px;
`;

const HireMeButton = styled(motion.a)`
  display: inline-block;
  padding: 15px 30px;
  background-color: #64ffda;
  color: #0a192f;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a692;
  }
`;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <HeroContainer
      as={motion.section}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Name as={motion.h1} variants={itemVariants}>
        Osman Kadir
      </Name>
      <Tagline as={motion.p} variants={itemVariants}>
        AI Coordinator &amp; AI Futurist
      </Tagline>
      <HireMeButton
        as={motion.a}
        variants={itemVariants}
        href="#contact"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        Hire Me
      </HireMeButton>
    </HeroContainer>
  );
};

export default Hero;
