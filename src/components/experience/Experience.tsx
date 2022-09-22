import React, {ForwardedRef, useEffect} from 'react';
import styled from 'styled-components';
import {TimelineCard} from '../../lib/load-data';
import SectionCounter from './SectionCounter';
import data from '../../data.json';

interface ExperienceProps {
    timeLineCards: TimelineCard[];
}

type ExperienceType = {
    startDate: string,
    employer: string,
    title: string,
    typeOfEmployment: string,
    responsibilities: string[],
    achievements: string[],
    durationMonths?: undefined
}

const Experience = React.forwardRef((props: ExperienceProps, ref: ForwardedRef<HTMLElement>): JSX.Element => {
    const {EXPERIENCE_SECTION_TITLE} = data.text;
    const experience = data.experience as ExperienceType[];

    function getAllYears(experience: ExperienceType[]) {
        const sortedList = new Map<number, ExperienceType[]>;
        experience.forEach((experience) => {
            const startYear = new Date(experience.startDate).getFullYear()
            if (sortedList.get(startYear)) {
                const existingData = sortedList.get(startYear)!;
                existingData.push(experience);
                sortedList.set(startYear, existingData);
            } else {
                sortedList.set(startYear, [experience]);
            }
        })
        // ToDo: Might cause error on older browsers
        // @ts-ignore
        return new Map([...sortedList].sort().reverse())
    }

    const sortedEvents = getAllYears(experience);
    const eventYears = Array.from(sortedEvents.keys()) as number[];


    useEffect(() => {
        console.log(sortedEvents);
    }, [])

// https://excalidraw.com/#room=5ac138994a903ddb6b8b,FOI9bwwGzZM-R3KmGJzyqA
    return (
        <ExperienceStyle id="experience" ref={ref}>
            <h2>{EXPERIENCE_SECTION_TITLE}</h2>
            <SectionCounter/>
            <div className="timeline">
                {eventYears.map((entry) => (
                    <>
                        <h1 key={entry}>{entry}</h1>
                        <div className="cards">
                        {Array.from(sortedEvents.get(entry) as ExperienceType[]).map((event: ExperienceType) => (
                                <div className="eventCard" key={event.startDate}>
                                    <h2>{event.title}</h2>
                                    <p>Employer: {event.employer}</p>
                                    <p>Type: {event.typeOfEmployment}</p>
                                    <p>Start: {new Date(event.startDate).getDate()}</p>
                                    <p>Duration: {event.durationMonths}</p>
                                    <p>Responsibilities: {event.responsibilities.map((responsibility: string, index: number) => (<><span key={index}>{responsibility}</span><br /></>))}</p>
                                    <p>{event.achievements.map((achievement: string, index: number) => (<><span key={index}>{achievement}</span><br /></>))}</p>
                                </div>
                            )
                        )}
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

  .cards{
    display: grid;
    grid-template-columns: 200px 200px;
    grid-row: auto;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    color: ${props => props.theme.red};
    
  }
  
.eventCard{
  border: orange 1px solid;
}

`;
