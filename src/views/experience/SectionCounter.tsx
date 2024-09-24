import { BsCalendarCheck } from 'react-icons/bs';
import { MdOutlineDone, MdOutlineLocationOn, MdUpdate } from 'react-icons/md';
import styled from 'styled-components';
import { RootState, useAppSelector } from '../../state/store';
import NumberCounter from '../../components/util/NumberCounter';
import { LABELS } from '../../data';

export default function SectionCounter(): JSX.Element {
  const auroraLastUpdated = useAppSelector<string>((state: RootState) => state.app.auroraLastUpdated);
  const numberOfProjects = useAppSelector<number>((state: RootState) => state.app.numberOfProjects);
  const {
    HERO_SECTION_PROJECTS_TITLE,
    HERO_SECTION_CODING_SINCE,
    HERO_SECTION_LAST_UPDATED_TITLE,
    HERO_SECTION_LOCATION,
  } = LABELS;

  // TODO: Fix rerendering bug, where counter becomes wider and thinner when counters are running up
  return (
    <SectionCounterStyle>
      <div className="card">
        <MdOutlineDone className="icon" />
        <p>{HERO_SECTION_PROJECTS_TITLE}</p>
        <NumberCounter
          className="highlight"
          endNumberValue={numberOfProjects | 0}
          startNumberValue={0}
          duration={2000}
        />
      </div>

      <div className="card">
        <BsCalendarCheck className="icon" />
        <p>{HERO_SECTION_CODING_SINCE[0]}</p>
        <NumberCounter
          endNumberValue={parseInt(HERO_SECTION_CODING_SINCE[1])}
          startNumberValue={1995}
          duration={2000}
          className="highlight"
        />
      </div>

      <div className="card">
        <MdUpdate className="icon" />
        <p>{HERO_SECTION_LAST_UPDATED_TITLE}</p>
        <span className="highlight">{auroraLastUpdated}</span>
      </div>

      <div className="card">
        <MdOutlineLocationOn className="icon" />
        <p>{HERO_SECTION_LOCATION[0]}</p>
        <span>{HERO_SECTION_LOCATION[1]}</span>
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
    border: 2px solid ${(props) => props.theme.primaryColor.$100};
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: 0 4px 8px 0 ${(props) => props.theme.primaryColor.$100};
    cursor: default;
    display: flex;
    flex-flow: column nowrap;
    flex: 1 1 20%;
    margin: 0.5rem;
    padding: 0 0 1rem 0;
    transition: border ${(props) => props.theme.transition};

    :hover {
      border: 2px solid ${(props) => props.theme.primaryColor.$400};

      .icon {
        fill: ${(props) => props.theme.buttonHoverBkgColor};
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
`;
