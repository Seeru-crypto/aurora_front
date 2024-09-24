import React, { Fragment, useState } from 'react';
import TimelineExperience from './TimelineExperience';
import { ExperienceType } from './Timeline';
import styled from 'styled-components';

interface TimeLineSectionProps {
  sortedExperienceList: ExperienceType[];
}
const TimelineSection = ({ sortedExperienceList }: TimeLineSectionProps): JSX.Element => {
  let sectionYear = 9999;

  return (
    <TimeLineSectionStyles>
      {sortedExperienceList.map((experience: ExperienceType, index: number) => {
        const experienceYear: number = new Date(experience.startDate).getFullYear() as number;
        if (experienceYear === sectionYear) {
          return <TimelineExperience className="experience" key={index} experience={experience} />;
        } else {
          if (sectionYear - experienceYear > 0) {
            sectionYear = experienceYear;
          }
        }
        return (
          <Fragment key={index}>
            <span className="year">{sectionYear}</span>
            <TimelineExperience className="experience" experience={experience} />
          </Fragment>
        );
      })}
    </TimeLineSectionStyles>
  );
};

const TimeLineSectionStyles = styled.div`
  .year + .experience {
    margin-top: 0;
  }

  .year {
    background-color: ${(props) => props.theme.primaryColor.$500};
    border-radius: ${(props) => props.theme.borderRadius};
    column-span: all;
    color: ${(props) => props.theme.secondary};
    display: block;
    font-size: 1.2em;
    font-weight: bold;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    text-align: center;
  }
`;

export default TimelineSection;
