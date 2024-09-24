import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';
import EmploymentDetail from './EmploymentDetail';
import EmploymentTitle from './EmploymentTitle';
import { ExperienceType } from './Timeline';
import { TIMELINE_DATA } from './timelineData';

export default function TimelineWithLibrary(): JSX.Element {
  const experience = TIMELINE_DATA as ExperienceType[];

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

  function getEventDuration(nrOfMonths: number | undefined): string {
    if (nrOfMonths === undefined || nrOfMonths === 0) return 'ongoing';
    if (nrOfMonths <= 11) {
      return nrOfMonths === 1 ? `${nrOfMonths} month` : `${nrOfMonths} months`;
    }

    const nrOfYears = Math.floor(nrOfMonths / 12);
    const yearResult = nrOfYears === 1 ? `${nrOfYears} year` : `${nrOfYears} years`;
    const remainingMonths = nrOfMonths - nrOfYears * 12;
    if (remainingMonths === 0) return yearResult;

    const monthResult = remainingMonths === 1 ? `${remainingMonths} month` : `${remainingMonths} months`;
    return `${yearResult} and ${monthResult}`;
  }

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
          {/* <div className="experiences"> */}
          <VerticalTimeline className="experiences">
            {Array.from(sortedEvents.get(entry) as ExperienceType[]).map((event: ExperienceType, index: number) => (
              //   <TimelineCard className="card" key={event.startDate} event={event} isLeftSide={index % 2 === 0} />
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={event.startDate}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<></>}>
                <EmploymentTitle
                  className="vertical-timeline-element-title"
                  title={event.title}
                  employer={event.employer}
                />
                <EmploymentDetail value={`${event.typeOfEmployment} for ${getEventDuration(event.durationMonths)}`} />
                <span>Responsibilites:</span>
                <ul>
                  {event.responsibilities.map((responsibility, index) => (
                    <li className="responsibility" key={index}>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
          {/* </div> */}
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
    align-items: center;
    display: grid;
    gap: 1rem;
    /* grid-auto-rows: minmax(200px, auto); */
    grid-template-columns: 1fr 1fr;
    /* grid-row: auto; */
    /* margin: 0 0 1rem 0; */
  }

  .year {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.textColor};
    padding: 0 0 0 2rem;
    margin: 0 -0.5rem;
  }

  .card {
    position: relative;

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
      width: 0.5rem;
    }

    :nth-child(even)::after {
      left: unset;
      right: 100%;
      top: 45%;
    }
  }

  /* .experiences {
    grid-column: span 2;
    display: grid;
    gap: 1rem;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(auto-fit, minmax(580px, 1fr));
  } */

  .experiences {
    grid-column: span 2;
  }
`;
