import React, { ForwardedRef, useEffect } from 'react';
import styled from 'styled-components';
import data from '../../data.json';
import { TimelineCard as TimelineCardType } from '../../lib/load-data';
import SectionCounter from './SectionCounter';
import TimelineCard from './TimelineCard';
import YearBox from './YearBox';

interface ExperienceProps {
  timeLineCards: TimelineCardType[];
}

export type ExperienceType = {
  startDate: string;
  employer: string;
  title: string;
  typeOfEmployment: string;
  responsibilities: string[];
  achievements: string[];
  durationMonths?: number;
};

const Experience = React.forwardRef((props: ExperienceProps, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  const { EXPERIENCE_SECTION_TITLE } = data.text;
  const experience = data.experience as ExperienceType[];

  function getAllYears(experience: ExperienceType[]) {
    const sortedList = new Map<number, ExperienceType[]>();
    experience.forEach((experience) => {
      const startYear = new Date(experience.startDate).getFullYear();
      if (sortedList.get(startYear)) {
        const existingData = sortedList.get(startYear)!;
        existingData.push(experience);
        sortedList.set(startYear, existingData);
      } else {
        sortedList.set(startYear, [experience]);
      }
    });
    // ToDo: Might cause error on older browsers
    // @ts-ignore
    return new Map([...sortedList].sort().reverse());
  }

  const sortedEvents = getAllYears(experience);
  const eventYears = Array.from(sortedEvents.keys()) as number[];

  // https://excalidraw.com/#room=5ac138994a903ddb6b8b,FOI9bwwGzZM-R3KmGJzyqA
  return (
    <ExperienceStyle id="experience" ref={ref}>
      <h2>{EXPERIENCE_SECTION_TITLE}</h2>
      <SectionCounter />
      <div className="timeline">
        {eventYears.map((entry) => (
          <>
            <YearBox key={entry} year={entry} />
            <div className="cards">
              {Array.from(sortedEvents.get(entry) as ExperienceType[]).map((event: ExperienceType, index) => (
                <TimelineCard key={event.startDate} event={event} isLeftSide={index % 2 === 0} />
              ))}
            </div>
          </>
        ))}
      </div>
    </ExperienceStyle>
  );
});

Experience.displayName = 'Experience display';

export default Experience;

const ExperienceStyle = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 95%;

  .cards {
    display: grid;
    grid-template-columns: 200px 200px;
    grid-row: auto;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    color: ${(props) => props.theme.red};
    align-items: center;
  }
`;
