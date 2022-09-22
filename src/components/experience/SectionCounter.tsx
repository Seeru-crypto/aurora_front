import { BsCalendarCheck } from 'react-icons/bs';
import { MdOutlineDone, MdOutlineLocationOn, MdUpdate } from 'react-icons/md';
import styled from 'styled-components';
import { RootState, useAppSelector } from '../../state/store';

export default function SectionCounter(): JSX.Element {
  const numberOfProjects = useAppSelector<number>((state: RootState) => state.app.numberOfProjects);
  const auroraLastUpdated = useAppSelector<string>((state: RootState) => state.app.auroraLastUpdated);

  return (
    <SectionCounterStyle>
      <div className="cards">
        <div className="card">
          <i className={'icon'}>
            <MdOutlineDone />
          </i>
          <p>Number of projects</p>
          <h3>{numberOfProjects}</h3>
        </div>
        <div className="card">
          <i className="icon">
            <BsCalendarCheck />
          </i>
          <p>Coding since</p>
          <h3>2016</h3>
        </div>
        <div className="card">
          <i className="icon">
            <MdUpdate />
          </i>
          <p>Site last updated</p>
          <h3>{auroraLastUpdated}</h3>
        </div>
        <div className="card">
          <i className="icon">
            <MdOutlineLocationOn />
          </i>
          <p>Current location</p>
          <h3>
            Estonia, Tallinn <small>127.0.0.1</small>
          </h3>
        </div>
      </div>
    </SectionCounterStyle>
  );
}

const SectionCounterStyle = styled.div`
  .cards {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0;
  }

  .icon {
    font-size: 2rem;
    margin: 0.5rem 0;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border: 2px solid ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.textColor};
    min-width: 21%;
    border-radius: 1rem;
    flex: 1 1 auto;
    margin: 0.5rem;
    cursor: auto;

    :hover {
      border: 2px solid ${(props) => props.theme.primary};
    }
  }

  @media (max-width: 1200px) {
    border: 1px solid orange;
  }
`;
