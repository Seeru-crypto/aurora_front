import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FredTheme } from '../Themes';

// Mobile breakpoint in pixels
const MOBILE_BREAKPOINT = 768;
// Number of experiences to show initially
const INITIAL_EXPERIENCES_COUNT = 3;

interface IExperience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: IExperience[] = [
    {
    company: 'Intelex Insight',
    title: 'Data engineer',
    description: 'Main tasks were creating data pipelines to data lakes, SQL optimization and creating simpler PowerBi reports.',
    period: '2024-present',
    id: 4,
    }, {
        company: 'Helmes OÜ',
        title: 'Full-stack developer',
        description: 'Main tasks were maintanace and new feature development on a Java microservice project, with over 20 modules.',
        period: '2023-2024',
      id: 3,

    },
    {
        company: 'Netgroup OÜ',
        title: 'Full-stack junior developer',
        description: 'Implemented several projects which ranged from a few months to a year. In larger projects focused on UI development.',
        period: '2021-2023',
      id: 2,

    },
    {
        company: 'Police and Border Guard Board',
        title: 'System administrator',
        description: 'I was responsible for the PPA\'s management information system, which had over 150 users. I created data models, ETL pipelines, and wrote documentation (information models, user stories, detailed analysis of new functionalities, and descriptions of processes affecting services).',
        period: '2018-2020',
      id: 1,

    },
  ].sort((a, b) =>  b.id- a.id);
  ;




const TimelineContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  min-height: 500px;
  background: ${props => props.theme.background};
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    flex-direction: column;
    padding: 1rem;
    min-height: auto;
  }
`;

const ExperienceList = styled.div`
  flex: 1;
  max-width: 400px;
  border-right: 1px solid ${props => props.theme.gray.$300};
  padding-right: 2rem;


  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    max-width: 100%;
    border-right: none;
    padding-right: 0;
  }
`;

const ExperienceItem = styled.div<{ isActive: boolean }>`
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border-radius: ${props => props.theme.borderRadius};
  transition: all ${props => props.theme.transition};
  background: ${props => props.isActive ? props.theme.primary + '20' : props.theme.gray.$50};

  border: 1px solid ${props => props.isActive ? props.theme.primary : props.theme.gray.$300};

  &:hover {
    background: ${props => props.theme.primary + '10'};
  }
`;

const ExperienceTitle = styled.h3`
  margin: 0;
  color: ${props => props.theme.textColor};
  font-size: 1.1rem;
`;

const ExperienceCompany = styled.p`
  margin: 0.5rem 0;
  color: ${props => props.theme.gray.$500};
  font-size: 0.9rem;
`;

const ExperiencePeriod = styled.span`
  color: ${props => props.theme.gray.$600};
  font-size: 0.8rem;
`;

const DetailsContainer = styled.div`
  flex: 2;
  padding: 2rem;
  max-width: 600px;
  border: 3px solid ${props => props.theme.primaryColor.$300};
  border-radius: ${props => props.theme.borderRadius};

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: none;
  }
`;

const MobileDetailsContainer = styled.div<{ isVisible: boolean }>`
  display: none;
  padding: 1rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.backgroundAlternative};
  transition: all ${props => props.theme.transition};
  overflow: hidden;
  max-height: ${props => props.isVisible ? '1000px' : '0'};
  opacity: ${props => props.isVisible ? '1' : '0'};

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: block;
  }
`;

const DetailsTitle = styled.h2`
  margin: 0 0 1rem 0;
  color: ${props => props.theme.textColor};
`;

const DetailsDescription = styled.p`
  color: ${props => props.theme.gray.$500};
  line-height: 1.6;
`;

const ToggleButton = styled.button`
  width: 70%;
  padding: 0.75rem;
  margin: 1rem auto;
  display: block;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.buttonTextColor};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: all ${props => props.theme.transition};
  font-size: 0.9rem;

  &:hover {
    background: ${props => props.theme.buttonHoverBkgColor};
    color: ${props => props.theme.buttonHoverTextColor};
  }
`;

const ExperienceTimeline: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<IExperience>(experiences[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleExperienceClick = (experience: IExperience) => {
    setSelectedExperience(experience);
    if (isMobile) {
      setExpandedId(expandedId === experience.id ? null : experience.id);
    }
  };

  const displayedExperiences = showAll ? experiences : experiences.slice(0, INITIAL_EXPERIENCES_COUNT);

  return (
    <TimelineContainer>
      <ExperienceList>
        {displayedExperiences.map((experience) => (
          <React.Fragment key={experience.id}>
            <ExperienceItem
              isActive={selectedExperience.id === experience.id}
              onClick={() => handleExperienceClick(experience)}
            >
              <ExperienceTitle>{experience.title}</ExperienceTitle>
              <ExperienceCompany>{experience.company}</ExperienceCompany>
              <ExperiencePeriod>{experience.period}</ExperiencePeriod>
            </ExperienceItem>
            <MobileDetailsContainer isVisible={expandedId === experience.id}>
              <DetailsTitle>{experience.title}</DetailsTitle>
              <ExperienceCompany>{experience.company}</ExperienceCompany>
              <ExperiencePeriod>{experience.period}</ExperiencePeriod>
              <DetailsDescription>{experience.description}</DetailsDescription>
            </MobileDetailsContainer>
          </React.Fragment>
        ))}
        {experiences.length > INITIAL_EXPERIENCES_COUNT && (
          <ToggleButton onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show More'}
          </ToggleButton>
        )}
      </ExperienceList>
      <DetailsContainer>
        <DetailsTitle>{selectedExperience.title}</DetailsTitle>
        <ExperienceCompany>{selectedExperience.company}</ExperienceCompany>
        <ExperiencePeriod>{selectedExperience.period}</ExperiencePeriod>
        <DetailsDescription>{selectedExperience.description}</DetailsDescription>
      </DetailsContainer>
    </TimelineContainer>
  );
};

export default ExperienceTimeline; 