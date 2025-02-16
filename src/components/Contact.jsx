import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const Title = styled(motion.h2)`
  font-size: 2em;
  color: #64ffda;
  margin-bottom: 30px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 600px;
`;

const Input = styled(motion.input)`
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: #2d2d2d;
  color: #fff;
  font-size: 1em;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(100, 255, 218, 0.5);
  }
`;

const TextArea = styled(motion.textarea)`
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: #2d2d2d;
  color: #fff;
  font-size: 1em;
  resize: vertical;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(100, 255, 218, 0.5);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 15px 30px;
  background-color: #64ffda;
  color: #0a192f;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a692;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const SocialLink = styled(motion.a)`
  color: #a8b2d1;
  font-size: 1.5em;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

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
    <ContactContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Title
        as={motion.h2}
        variants={itemVariants}
      >
        Contact
      </Title>
      <ContactForm ref={form} onSubmit={sendEmail}>
        <Input
          as={motion.input}
          variants={itemVariants}
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />
        <Input
          as={motion.input}
          variants={itemVariants}
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <TextArea
          as={motion.textarea}
          variants={itemVariants}
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        />
        <SubmitButton
          as={motion.button}
          variants={itemVariants}
          type="submit"
          value="Send"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Send Message
        </SubmitButton>
      </ContactForm>
      <SocialLinks>
        <SocialLink
          href="https://www.linkedin.com/in/osmankadir/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin />
        </SocialLink>
        <SocialLink
          href="https://github.com/CodePhyt"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/@codephyt"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaYoutube />
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/artlabhd.ai/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaInstagram />
        </SocialLink>
      </SocialLinks>
    </ContactContainer>
  );
};

export default Contact;
