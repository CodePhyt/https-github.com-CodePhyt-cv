import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WhyVRSENContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const Title = styled(motion.h2)`
  font-size: 2em;
  color: #64ffda;
  margin-bottom: 20px;
`;

const Reason = styled(motion.p)`
  font-size: 1.1em;
  color: #a8b2d1;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const WhyVRSEN = () => {
  return (
    <WhyVRSENContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Title
        as={motion.h2}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Why VRSEN AI?
      </Title>
      <Reason
        as={motion.p}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        I am passionate about VRSEN AI's innovative approach to agency
        solutions. My background and skills align perfectly with the company’s
        mission and vision, and I am eager to contribute to its continued
        success.
      </Reason>
    </WhyVRSENContainer>
  );
};

export default WhyVRSEN;
