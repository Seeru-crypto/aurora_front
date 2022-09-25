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
          <div className="firstRow">
            <div className="centerGroup">
              <p className="date">{new Date(event.startDate).toLocaleString('en-US', { month: 'long' })}</p>
              <p className="eventType">{event.typeOfEmployment}</p>
            </div>

            <p className="duration">{getDurationField(event.durationMonths)}</p>
          </div>
          <div className="secondRow">
            <span className="employerLabel">{event.employer}</span>
          </div>
          <div className="thirdRow">
            <span className="titleLabel">{event.title}</span>
          </div>
        </div>
        <div className="cardBody">
          <div className="responsibilities">
            <p>Responsibilites:</p>
            <span> {event.responsibilities[0]}</span>
          </div>
        </div>
      </div>
    </CardStyle>
  );
};

export default TimelineCard;

const CardStyle = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    font-size: 16px;
  }
  .isLeftSide {
    border: 1px solid orange;

    .cardHeader {
      margin-bottom: 1rem;

      .firstRow {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: 0.5rem;

        .centerGroup {
          display: flex;
          flex: 1;
          flex-direction: row-reverse;
          gap: 0.5rem;

          .date {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          }

          .eventType {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          }
        }

        .duration {
          font-size: 12px;
          flex: 1;
          padding-right: 1rem;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
        }
      }
    }

    .secondRow {
      padding: 0.5rem 0;
      font-weight: 550;
    }

    .thirdRow {
      font-weight: 700;
      color: ${(props) => props.theme.primary};
    }

    .cardBody {
      padding: 0;
    }
  }

  .isRightSide {
    border: 1px solid gray;

    .cardHeader {
      .firstRow {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        padding: 0 1rem;

        .date {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          margin: 0 0.5rem;
        }

        .duration {
          padding: 0 1rem;
          display: inline-block;
          width: 100%;
        }
      }
    }

    .cardBody {
      padding: 0 1.5rem;
    }
  }
`;
