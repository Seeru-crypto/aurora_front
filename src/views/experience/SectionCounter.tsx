import { BsCalendarCheck } from 'react-icons/bs';
import { MdOutlineDone, MdOutlineLocationOn, MdUpdate } from 'react-icons/md';
import styled from 'styled-components';
import NumberCounter from './NumberCounter';

export default function SectionCounter(): JSX.Element {
  function formatIsoToLocal() {
    const lastcommit = process.env.LAST_COMMIT_DATE;
    if (lastcommit) {
      return new Date(lastcommit).toLocaleDateString()
    }
    else {
      return "error getting last commit"
    }
  }

  return (
    <SectionCounterStyle>
      <div className="card">
        <MdOutlineDone className="icon" />
        <p className="card-description">Number of projects</p>
        <NumberCounter
          className="highlight"
          endNumberValue={17}
          startNumberValue={0}
          duration={2000}
        />
      </div>

      <div className="card">
        <BsCalendarCheck className="icon" />
        <p className="card-description">Coding since</p>
        <NumberCounter
          endNumberValue={2016}
          startNumberValue={1995}
          duration={2000}
          className="highlight"
        />
      </div>

      <div className="card">
        <MdUpdate className="icon" />
        <p className="card-description">Site last updated</p>
        <span className="highlight">{formatIsoToLocal()}</span>
      </div>

      <div className="card">
        <MdOutlineLocationOn className="icon" />
        <p className="card-description">Current location</p>
        <span>Estonia, Tallinn</span>
        <span className="highlight">
          <NumberCounter endNumberValue={127} startNumberValue={0} duration={2000} />
          .0.0.1
        </span>
      </div>
    </SectionCounterStyle>
  );
}

const SectionCounterStyle = styled.div`
  display: flex;
  flex-flow: row wrap;

  .card {
    align-items: center;
    border: 2px solid ${(props) => props.theme.primaryColor.$200};
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: 0 4px 8px 0 ${(props) => props.theme.primaryColor.$100};
    cursor: default;
    display: flex;
    flex-flow: column nowrap;
    flex: 1 1 20%;
    margin: 0.5rem;
    padding: 0 0 1rem 0;
    transition: border ${(props) => props.theme.transition};
    font-size: ${(props) => props.theme.size.$350};

    :hover {
      border: 2px solid ${(props) => props.theme.primaryColor.$400};

      .icon {
        fill: ${(props) => props.theme.buttFonHoverBkgColor};
      }

      .highlight {
        color: ${(props) => props.theme.primaryColor.$400};
      }
    }
  }

  .icon {
    font-size: ${(props) => props.theme.size.$500};
    padding: 1rem 0 0 0;
    transition: fill ${(props) => props.theme.transition};
  }

  .highlight {
    font-weight: bold;
    margin: 0;
    transition: color ${(props) => props.theme.transition};
  }

  @media screen and (min-width: ${(props) => props.theme.viewSizesMin.$screenXs}) and (max-width: ${(props) => props.theme.viewSizesMin.$screenSm}) {
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1rem;
  }
`;
