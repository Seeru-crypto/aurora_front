import { format, formatDuration, monthsToYears } from 'date-fns';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ExperienceType } from './Timeline';

type ExperienceProps = {
  experience: ExperienceType;
} & HTMLAttributes<HTMLDivElement>;

export default function TimelineExperience(props: ExperienceProps): JSX.Element {
  const {
    achievements,
    durationMonths = 0,
    employer,
    responsibilities,
    startDate,
    title,
    typeOfEmployment,
  } = props.experience;
  const durationInYears = formatDuration({ years: monthsToYears(durationMonths) });
  const durationInMonths = formatDuration({ months: durationMonths - monthsToYears(durationMonths) * 12 });

  return (
    <TimelineExperienceStyles {...props}>
      <div className="header">
        <small>
          since {format(new Date(startDate), 'LLLL').toLowerCase()},&nbsp;{typeOfEmployment.toLowerCase()}
        </small>
        <small className="duration">
          duration: {durationInYears} {durationInMonths}
        </small>
      </div>
      <p className="employer">{employer}</p>
      <p className="title">{title}</p>
      <p>{responsibilities}</p>
      {achievements && (
        <>
          <strong>Achievements:</strong>
          <ul>
            {achievements.map((achievement: string, index: number) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </>
      )}
    </TimelineExperienceStyles>
  );
}

const TimelineExperienceStyles = styled.div`
  border: 2px solid ${(props) => props.theme.primaryColor.$500};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0 4px 8px 0 ${(props) => props.theme.primaryColor.$300};
  break-inside: avoid-column;
  display: flex;
  flex-flow: column wrap;
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  position: relative;

  ::after,
  ::before {
    background-color: ${(props) => props.theme.primaryColor.$500};
    content: '';
    height: 0.5rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1.5rem;

    @media (max-width: 768px) {
      ::after,
      ::before {
        display: none;
      }
    }
  }

  ::after {
    right: -1.5rem;
  }

  ::before {
    left: -1.5rem;
  }

  .header {
    display: flex;
    margin: 0 0 0.5rem 0;
  }

  .duration {
    flex: 1 1 auto;
    text-align: right;
  }

  .employer,
  .title {
    margin: 0.5rem 0 0 0;
  }

  .employer {
    font-size: 1em;
  }

  .title {
    font-size: 1.2em;
    font-weight: bold;
  }
`;
