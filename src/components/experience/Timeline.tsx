import { Fragment, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../util/Button';
import TimelineExperience from './TimelineExperience';
import { EXPERIENCE_DATA } from '../../data';

export type ExperienceType = {
  achievements: string[];
  durationMonths?: number;
  employer: string;
  responsibilities: string[];
  startDate: string;
  title: string;
  techStack: string[];
  typeOfEmployment: string;
};

type TimelineProps = {
  filteredTechs?: string[];
};

export default function Timeline(props: TimelineProps): JSX.Element {
  const defaultTimelineHeight = '100%';
  const { filteredTechs = [] } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [timelineHeight, setTimelineHeight] = useState(defaultTimelineHeight);
  // NOTE: Keep tech stacks lowercase otherwise you'll break the filter
  // TODO: Probably move it to Redux
  const [sortedExperiences, setSortedExperiences] = useState<ExperienceType[]>([]);
  const isFilterApplied = filteredTechs.length > 0;
  const viewportRef = useRef<HTMLDivElement>(null);
  let yearCount = 9999;

  useEffect(() => {
    try {
      // NOTE: ISO8601 can be lexically sorted
      const experiences = EXPERIENCE_DATA.sort((a, b) => -a.startDate.localeCompare(b.startDate)) as ExperienceType[];
      setSortedExperiences(experiences);
    } catch (error) {
      setSortedExperiences([]);
    }

    viewportRef.current && setViewportHeight(viewportRef.current.clientHeight);
  }, [sortedExperiences]);

  useEffect(() => {
    isExpanded ? setTimelineHeight(`${viewportRef.current!.offsetHeight}px`) : setTimelineHeight(defaultTimelineHeight);
  }, [isExpanded]);

  function getShownAmount(): number {
    if (isFilterApplied) {
      return sortedExperiences.length;
    }
    return isExpanded ? sortedExperiences.length : 3;
  }

  return (
    <TimelineStyles viewportHeight={viewportHeight} timelineHeight={timelineHeight}>
      <div className="viewport">
        <div className="experiences" ref={viewportRef}>
          {sortedExperiences
            .slice(0, getShownAmount())
            .filter((experience: ExperienceType) =>
              isFilterApplied
                ? filteredTechs.some((filteredTech: string) =>
                    experience.techStack.includes(filteredTech.toLowerCase())
                  )
                : experience
            )
            .map((experience: ExperienceType, index: number) => {
              const experienceYear = new Date(experience.startDate).getFullYear();

              if (experienceYear !== yearCount) {
                if (yearCount - experienceYear > 0) {
                  yearCount = experienceYear;
                }
                return (
                  <Fragment key={index}>
                    <span className="year">{experienceYear}</span>
                    <TimelineExperience className="experience" experience={experience} />
                  </Fragment>
                );
              } else {
                return <TimelineExperience className="experience" key={index} experience={experience} />;
              }
            })}
        </div>
      </div>

      <Button className="toggle-extra" onClick={() => setIsExpanded(!isExpanded)}>
        Show {isExpanded ? 'less' : 'more'}
      </Button>
    </TimelineStyles>
  );
}

const TimelineStyles = styled.div<{ viewportHeight: number; timelineHeight: string }>`
  .viewport {
    height: ${(props) => `${props.viewportHeight}px`};
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;

    ::after {
      background-color: ${(props) => props.theme.primaryColor.$500};
      border-radius: ${(props) => props.theme.borderRadius};
      content: '';
      height: ${(props) => `calc(${props.timelineHeight} - 2rem)`};
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 1rem;
      width: 0.5rem;
      z-index: -1;
    }

    @media (max-width: 768px) {
      ::after {
        display: none;
      }
    }
  }

  .experiences {
    column-count: 2;
    column-gap: 2.5rem;

    @media (max-width: 768px) {
      column-count: 1;
    }
  }

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

  .toggle-extra {
    margin: 2rem auto 0 auto;
  }
`;
