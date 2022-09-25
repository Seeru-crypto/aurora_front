import React from 'react';
import styled from 'styled-components';
import { ExperienceType } from './Experience';

const TimelineCard = ({ event, isLeftSide }: { event: ExperienceType; isLeftSide: boolean }) => {
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
    <CardStyle>
      <div className={`container ${isLeftSide ? 'isLeftSide' : 'isRightSide'}`}>
        <div className="cardHeader">
          <div className="firstRow">
            <div className="centerGroup">
              <p className="date">{new Date(event.startDate).toLocaleString('en-US', { month: 'long' })}</p>
              <p className="eventType">{event.typeOfEmployment}</p>
            </div>

            <p className="duration">{getEventDuration(event.durationMonths)}</p>
          </div>
          <div className="secondRow">
            <span className="employerLabel">{event.employer}</span>
          </div>
          <div className="thirdRow">
            <span className="titleLabel">{event.title}</span>
          </div>
        </div>
        <div className="cardBody">
          <div className="responsibilitieDiv">
            <span>Responsibilites:</span>
            <ul>
              {event.responsibilities.map((responsibilitie, index) => (
                <li key={index}>{responsibilitie}</li>
              ))}
            </ul>
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
        font-size: 12px;

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
        }
      }
    }

    .secondRow {
      padding: 0 0 0.5rem 0;
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
    border: 1px solid gainsboro;

    .cardHeader {
      margin-bottom: 1rem;

      .firstRow {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        font-size: 12px;

        .centerGroup {
          display: flex;
          flex: 1;
          flex-direction: row;
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
        }
      }
    }

    .secondRow {
      padding: 0 0 0.5rem 0;
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
`;
