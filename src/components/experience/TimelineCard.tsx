import React from 'react';
import styled from 'styled-components';
import { ExperienceType } from './Experience';

const TimelineCard = ({ event, isLeftSide }: { event: ExperienceType; isLeftSide: boolean }) => {
  function getDurationField(nrOfMonths: number | undefined): string {
    if (nrOfMonths === undefined) return 'ongoing';
    if (nrOfMonths <= 12) return `${nrOfMonths} months`;
    const nrOfYears = Math.floor(nrOfMonths / 12);
    const remainingMonths = nrOfMonths - nrOfYears * 12;
    return `${nrOfYears} years and ${remainingMonths} months`;
  }

  return (
    <CardStyle>
      <div className={`container ${isLeftSide ? 'isLeftSide' : 'isRightSide'}`}>
        <div className="cardHeader">
          <p className="date">{new Date(event.startDate).toLocaleString('en-US', { month: 'long' })}</p>
          <p className="duration">{getDurationField(event.durationMonths)}</p>
        </div>

        {event.title}
      </div>
    </CardStyle>
  );
};

export default TimelineCard;

const CardStyle = styled.div`
  .date {
    border: 2px dashed gray;
  }

  .duration {
    padding: 0 1rem;
    display: inline-block;
    width: 100%;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .isLeftSide {
    border: 1px solid orange;

    .cardHeader {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
    }

    .date {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      margin: 0 0.5rem;
    }
  }

  .isRightSide {
    border: 1px solid gray;

    .cardHeader {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      padding: 0 1rem;
    }

    .date {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 0 0.5rem;
    }
  }
`;
