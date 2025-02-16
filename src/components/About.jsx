import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaMailBulk, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const TextContainer = styled.div`
  flex: 2;
  padding: 20px;
`;

const Title = styled(motion.h2)`
  font-size: 2em;
  color: #64ffda;
  margin-bottom: 20px;
`;

const Summary = styled(motion.p)`
  font-size: 1.1em;
  color: #a8b2d1;
  line-height: 1.6;
`;

const FrameworksContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const FrameworkLink = styled(motion.a)`
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  text-decoration: none;
  margin: 5px;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
  display: inline-flex;
  align-items: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    color: black;
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
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

const ToolImage = styled(motion.img)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  cursor: pointer;
`;

const lineAnimation = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: { duration: 1 },
  },
};

const ExpandButton = styled.button`
  background-color: transparent;
  border: 1px solid #64ffda;
  color: #64ffda;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  color: #a8b2d1;

  svg {
    margin-right: 8px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const SkillCategory = styled.div`
  margin-bottom: 20px;
`;

const SkillTitle = styled.h3`
  font-size: 1.5em;
  color: #64ffda;
  margin-bottom: 10px;
`;

const SkillList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
`;

const SkillItem = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 5px;
  color: #a8b2d1;
  text-align: center;
`;

const LanguageItem = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 5px;
  color: #a8b2d1;
  text-align: center;
`;

const LanguageBar = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  height: 8px;
  margin-top: 5px;
  overflow: hidden;
`;

const LanguageLevel = styled.div`
  background-color: #64ffda;
  height: 8px;
  border-radius: 5px;
`;

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const frameworks = [
    {
      name: 'Open Computer Use',
      url: 'https://github.com/e2b-dev/open-computer-use',
    },
    {
      name: 'Bee Agent Framework',
      url: 'https://github.com/i-am-bee/bee-agent-framework',
    },
    {
      name: 'Pinokio',
      url: 'https://pinokio.computer/',
    },
    {
      name: 'lovable.dev',
      url: 'https://lovable.dev/',
    },
    {
      name: 'v0.dev',
      url: 'https://v0.dev/',
    },
    {
      name: 'Replit',
      url: 'https://replit.com/~',
    },
    {
      name: 'AI Agents Masterclass',
      url: 'https://github.com/coleam00/ai-agents-masterclass/tree/main',
    },
    {
      name: 'Bolt',
      url: 'https://bolt.new/',
    },
    {
      name: 'Model Context Protocol Servers',
      url: 'https://github.com/modelcontextprotocol/servers',
    },
    {
      name: 'Autogen',
      url: 'https://github.com/microsoft/autogen/',
    },
    {
      name: 'Anything LLM',
      url: 'https://github.com/Mintplex-Labs/anything-llm',
    },
    {
      name: 'Browser Use',
      url: 'https://github.com/browser-use/browser-use',
    },
    {
      name: 'Crew AI',
      url: 'https://github.com/crewAIInc/crewAI',
    },
    {
      name: 'PraisonAI',
      url: 'https://github.com/MervinPraison/PraisonAI',
    },
    {
      name: 'Stride AI Agents',
      url: 'https://github.com/joshpocock/Stride-AI-Agents',
    },
    {
      name: 'Hugging Face',
      url: 'https://huggingface.co/CodePhyt',
    },
    {
      name: 'FlutterFlow',
      url: 'https://app.flutterflow.io/',
    },
    {
      name: 'Codeium',
      url: 'https://codeium.com/windsurf',
    },
        {
      name: 'Smol Agents',
      url: 'https://github.com/huggingface/smolagents',
    },
    {
      name: 'Docker',
      url: 'https://www.docker.com/',
    },
    {
      name: 'Ottomator Agents',
      url: 'https://github.com/coleam00/ottomator-agents',
    },
    {
      name: 'Awesome AI Agents',
      url: 'https://github.com/e2b-dev/awesome-ai-agents',
    },
    {
      name: 'Eliza',
      url: 'https://github.com/elizaOS/eliza',
    },
    {
      name: 'Agere',
      url: 'https://github.com/happyapplehorse/agere',
    },
    {
      name: 'UI-TARS',
      url: 'https://github.com/bytedance/UI-TARS',
    },
    {
      name: 'Roo-Code',
      url: 'https://github.com/RooVetGit/Roo-Code',
    },
    {
      name: 'Continue Dev',
      url: 'https://www.continue.dev/',
    },
    {
      name: 'Databutton',
      url: 'https://databutton.com/home',
    },
    {
      name: 'OmniParser',
      url: 'https://github.com/microsoft/OmniParser',
    },
    {
      name: 'Copycoder',
      url: 'https://copycoder.ai/',
    },
    {
      name: 'Augmentcode',
      url: 'https://www.augmentcode.com/',
    },
  ];

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const displayedFrameworks = expanded ? frameworks : frameworks.slice(0, 6);

  return (
    <AboutContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <TextContainer>
        <Title
          as={motion.h2}
          variants={lineAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About Me
        </Title>
        <ContactInfo>
          <ContactItem>
            <FaPhone />
            <span>(+49) 1713474348</span>
          </ContactItem>
          <ContactItem>
            <FaMailBulk />
            <span>osmankadirde@gmail.com</span>
          </ContactItem>
          <ContactItem>
            <FaMapMarkerAlt />
            <span>Dorststraße 15, 98724, Neuhaus am Rennweg, Deutschland</span>
          </ContactItem>
        </ContactInfo>
        <Summary
          as={motion.p}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Enthusiastic and motivated person with an insatiable thirst for
          knowledge and a strong desire to embrace new challenges. While my
          current experience may be limited, my passion for acquiring knowledge
          is boundless. I actively seek opportunities to expand my skills and
          contribute effectively to a dynamic team. I bring a positive
          attitude, adaptability, and a commitment to continuous growth. Open
          to mentoring, training, and ready to make new experiences. I look
          forward to the prospect of building a foundation of expertise and
          making a meaningful contribution in a supportive work environment. Let
          us connect and explore how I can contribute to your organization and
          develop myself further.
        </Summary>

        <SkillsContainer>
          <SkillCategory>
            <SkillTitle>Languages</SkillTitle>
            <SkillList>
              <LanguageItem>
                <span>Turkish</span>
                <LanguageBar>
                  <LanguageLevel style={{ width: '100%' }} />
                </LanguageBar>
              </LanguageItem>
              <LanguageItem>
                <span>English</span>
                <LanguageBar>
                  <LanguageLevel style={{ width: '90%' }} />
                </LanguageBar>
              </LanguageItem>
              <LanguageItem>
                <span>German</span>
                <LanguageBar>
                  <LanguageLevel style={{ width: '60%' }} />
                </LanguageBar>
              </LanguageItem>
                           <LanguageItem>
                <span>Russian</span>
                <LanguageBar>
                  <LanguageLevel style={{ width: '75%' }} />
                </LanguageBar>
              </LanguageItem>
            </SkillList>
          </SkillCategory>
        </SkillsContainer>
        <FrameworksContainer
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 8, delay: 0.7, staggerChildren: 0.1 }}
        >
          {displayedFrameworks.map((framework, index) => (
            <FrameworkLink
              key={index}
              href={framework.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                color: 'black',
              }}
            >
              {/*<ToolImage
                src={framework.image}
                alt={framework.name}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              />*/}
              {framework.name}
            </FrameworkLink>
          ))}
        </FrameworksContainer>
        <ExpandButton onClick={toggleExpanded}>
          {expanded ? 'Minimize Tools' : 'Expand Tools'}
        </ExpandButton>
        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/osmankadir/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            style={{ fontSize: '2em' }}
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="https://github.com/CodePhyt"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            style={{ fontSize: '2em' }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://www.youtube.com/@codephyt"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            style={{ fontSize: '2em' }}
          >
            <FaYoutube />
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/artlabhd.ai/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            style={{ fontSize: '2em' }}
          >
            <FaInstagram />
          </SocialLink>
        </SocialLinks>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
