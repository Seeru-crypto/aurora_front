import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import EmploymentDetail from './EmploymentDetail';
import EmploymentTitle from './EmploymentTitle';
import { ExperienceType } from './Timeline';

type TimelineCardProps = {
  event: ExperienceType;
  isLeftSide: boolean;
} & HTMLAttributes<HTMLDivElement>;

export function TimelineCard(props: TimelineCardProps): JSX.Element {
  const { event, isLeftSide } = props;

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
    <CardStyle {...props}>
      <div className={`container ${isLeftSide ? 'isLeftSide' : 'isRightSide'}`}>
        <div className="cardHeader">
          <div className="firstRow">
            <EmploymentTitle title={event.title} employer={event.employer} />
          </div>
          <EmploymentDetail value={`${event.typeOfEmployment} for ${getEventDuration(event.durationMonths)}`} />
        </div>
        <div className="cardBody">
          <span>Responsibilites:</span>
          <ul>
            {event.responsibilities.map((responsibility, index) => (
              <li className="responsibility" key={index}>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  .firstRow {
    padding: 0 0 0.5rem 0;
  }

  .responsibility {
    line-height: 1.5;
  }

  .cardBody {
    padding: 0;

    > span {
      font-size: 0.8em;
    }
  }

  .cardHeader {
    margin-bottom: 1rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    font-size: 16px;
  }

  .isLeftSide {
    border: 1px solid orange;
  }

  .isRightSide {
    border: 1px solid gainsboro;
  }
`;
