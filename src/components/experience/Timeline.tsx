import styled from 'styled-components';
import data from '../../data.json';
import { TimelineCard } from './TimelineCard';

export type ExperienceType = {
  startDate: string;
  employer: string;
  title: string;
  typeOfEmployment: string;
  responsibilities: string[];
  achievements: string[];
  durationMonths?: number;
};

export default function Timeline(): JSX.Element {
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

  return (
    <TimelineStyles>
      <div className="line" />

      {eventYears.map((entry: number) => (
        <div className="yearlyExperience" key={entry}>
          {/* TODO: Fred's genius will think how to minimize it */}
          {entry % 2 ? (
            <>
              <h2 className="year">{entry}</h2>
              <div />
            </>
          ) : (
            <>
              <div />
              <h2 className="year">{entry}</h2>
            </>
          )}
          {Array.from(sortedEvents.get(entry) as ExperienceType[]).map((event: ExperienceType, index: number) => {
            return index % 2 ? (
              <>
                <TimelineCard className="card" key={event.startDate} event={event} isLeftSide={index % 2 === 0} />
                <div />
              </>
            ) : (
              <>
                <div />
                <TimelineCard className="card" key={event.startDate} event={event} isLeftSide={index % 2 === 0} />
              </>
            );
          })}
        </div>
      ))}
    </TimelineStyles>
  );
}

const TimelineStyles = styled.div`
  overflow: hidden;
  position: relative;

  .line {
    background-color: ${(props) => props.theme.primary};
    height: 100%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 0.25rem;
  }

  .yearlyExperience {
    display: grid;
    gap: 1rem 4rem;
    grid-template-columns: 1fr 1fr;
  }

  .year {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.textColor};
    padding: 0 0 0 2rem;
    margin: 0 -2rem;
  }

  .card {
    position: relative;
    /* TODO: This is a hack for now */
    margin-bottom: -8rem;

    :nth-child(odd)::after,
    :nth-child(even)::after {
      background-color: ${(props) => props.theme.primary};
      content: '';
      display: block;
      height: 0.25rem;
      left: 100%;
      position: absolute;
      top: 25%;
      transform: translateY(-50%);
      width: 2rem;
    }

    :nth-child(even)::after {
      left: unset;
      right: 100%;
    }
  }
`;
