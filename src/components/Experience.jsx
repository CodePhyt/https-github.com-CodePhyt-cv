import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

const Title = styled(motion.h2)`
  font-size: 2.5em;
  color: #64ffda;
  margin-bottom: 40px;
  text-align: center;
`;

const Timeline = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0; /* Line starts from the left */
    width: 4px; /* Thicker line */
    background-color: #2d2d2d;
  }
`;

const Event = styled(motion.div)`
  margin-bottom: 30px;
  position: relative;
  padding-left: 50px; /* Space for the circle and content */
  opacity: 0;
  animation: fadeIn 0.5s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const Time = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.9em;
  color: #a8b2d1;
  white-space: nowrap; /* Prevent text from wrapping */
  padding-bottom: 10px; /* Added padding here */
`;

const Content = styled.div`
  padding: 15px;
  background-color: #1a1a1a;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* More pronounced shadow */
  width: 70%; /* Adjust width for better readability */
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Slight lift on hover */
  }
`;

const EventTitle = styled.h3`
  font-size: 1.3em;
  color: #fff;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1em;
  color: #a8b2d1;
  line-height: 1.4;
  margin-bottom: 10px;
`;

const Circle = styled.div`
  position: absolute;
  top: 5px;
  left: -27px; /* Adjust to center the circle on the line */
  width: 15px;
  height: 15px;
  background-color: #64ffda;
  border-radius: 50%;
  z-index: 1;
`;

const ReadMoreButton = styled.button`
  background-color: transparent;
  border: none;
  color: #64ffda;
  cursor: pointer;
  padding: 0;
  font-size: 1em;
  &:hover {
    text-decoration: underline;
  }
`;

const Experience = () => {
  const [expandedEvents, setExpandedEvents] = useState({});

  const toggleEvent = (index) => {
    setExpandedEvents(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const experiences = [
    {
      time: '30/07/2023 - 06/01/2024',
      title: 'Hospitality Entertainment',
      company: 'VOYAGE BELEK',
      description: `Organizing and leading daily entertainment programs for guests.
              Creating a lively and entertaining atmosphere in the hotel by
              involving guests in various activities and events. Planning and
              conducting sports activities such as beach volleyball, water polo,
              and fitness classes. Performing as part of entertainment shows
              such as music/dance performances, theater productions, or live
              bands. Hosting and coordinating evening programs, including themed
              evenings, parties, and talent competitions.`
    },
    {
      time: '10/06/2023 - 29/07/2023',
      title: 'Entertainment in Hospitality',
      company: 'WORLD OF SUNRISE HOTELS',
      description: `Program development: Designing and developing entertainment
              programs and activities for guests to ensure a diverse selection
              of options for different age groups and preferences. Team
              management: Recruiting, training, and leading a team of
              entertainers to ensure they are motivated, competent, and equipped
              to deliver exceptional guest experiences. Performance
              supervision: Monitoring and coordinating the performances of the
              entertainment team, including shows, live music, dance
              performances, and other special events, to ensure high-quality
              standards and guest satisfaction.`
    },
    {
      time: '10/06/2022 - 09/06/2023',
      title: 'Hospitality Entertainment',
      company: 'ALI BEY HOTELS & RESORTS MANAVGAT',
      description: `Organizing and leading daily entertainment programs for guests.
              Creating a lively and fun atmosphere in the hotel by involving
              guests in various activities and events. Planning and
              implementing sports activities such as beach volleyball, water
              polo, and fitness classes. Performing as part of entertainment
              shows, such as music/dance performances, theater productions, or
              live bands. Hosting and coordinating evening programs, including
              themed evenings, parties, and talent competitions.`
    },
    {
      time: '01/12/2022 - 10/01/2023',
      title: 'KIDS MOTIVATOR',
      company: 'JOALI MALDIVES',
      description: `Organizing and leading engaging and age-appropriate activities for
              children, both indoors and outdoors, to ensure they are
              entertained and enjoy their stay at the hotel. Creating a safe and
              inclusive environment for children to ensure their well-being and
              promote a positive experience during their time in the kids' club
              or in designated areas.`
    },
    {
      time: '05/01/2021 - 23/11/2021',
      title: 'KINDERCLUB MANAGER',
      company: 'REGNUM CARYA',
      description: `Program development: Planning and developing a diverse range of
              engaging and age-appropriate activities for children. Supervision
              and Safety: Ensuring the safety and well-being of children
              participating in the Kids Club. Staff Management: Recruiting,
              training, and leading a team of Kids Club staff. Customer
              Service: Interacting with parents and guardians, addressing their
              inquiries and concerns.`
    },
    {
      time: '10/01/2018 - 25/11/2019',
      title: 'KINDERANIMATEUR',
      company: 'ALI BEY HOTELS & RESORTS',
      description: `Organizing and leading appealing and age-appropriate activities
              for children, both indoors and outdoors, to ensure they are
              entertained and enjoy themselves during their stay at the hotel.
              Creating a safe and inclusive environment for children to ensure
              their well-being and promote a positive experience during their
              time in the kids' club or in designated areas.`
    },
    {
      time: '15/04/2016 - 20/11/2018',
      title: 'KINDERANIMATEUR',
      company: 'RIXOS PREMIUM BELEK',
      description: `Organizing and leading appealing and age-appropriate activities
              for children, both indoors and outdoors, to ensure they are
              entertained and have fun during their stay at the hotel. Creating
              a safe and inclusive environment for children to ensure their
              well-being and promote positive experiences during their time in
              the kids' club or in special areas.`
    }
  ];

  return (
    <ExperienceContainer>
      <Title
        as={motion.h2}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Experience &amp; Projects
      </Title>
      <Timeline>
        {experiences.map((experience, index) => (
          <Event
            as={motion.div}
            key={index}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 * index }}
          >
            <Circle />
            <Time className="time">{experience.time}</Time>
            <Content className="content">
              <EventTitle>{experience.title}</EventTitle>
              <Description>
                {experience.company} <br />
                {expandedEvents[index] ? experience.description : experience.description.substring(0, 100) + '...'}
              </Description>
              {experience.description.length > 100 && (
                <ReadMoreButton onClick={() => toggleEvent(index)}>
                  {expandedEvents[index] ? 'Read Less' : 'Read More'}
                </ReadMoreButton>
              )}
            </Content>
          </Event>
        ))}
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience;
