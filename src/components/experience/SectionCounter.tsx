import { BsCalendarCheck } from 'react-icons/bs';
import { MdOutlineDone, MdOutlineLocationOn, MdUpdate } from 'react-icons/md';
import styled from 'styled-components';
import data from '../../data.json';
import { RootState, useAppSelector } from '../../state/store';

export default function SectionCounter(): JSX.Element {
  const auroraLastUpdated = useAppSelector<string>((state: RootState) => state.app.auroraLastUpdated);
  const numberOfProjects = useAppSelector<number>((state: RootState) => state.app.numberOfProjects);
  const {
    HERO_SECTION_PROJECTS_TITLE,
    HERO_SECTION_CODING_SINCE,
    HERO_SECTION_LAST_UPDATED_TITLE,
    HERO_SECTION_LOCATION,
  } = data.text;

  return (
    <SectionCounterStyle>
      <div className="sectionCards">
        <div className="sectionCard">
          <i className="icon">
            <MdOutlineDone />
          </i>
          <p>{HERO_SECTION_PROJECTS_TITLE}</p>
          <h3>{numberOfProjects}</h3>
        </div>
        <div className="sectionCard">
          <i className="icon">
            <BsCalendarCheck />
          </i>
          <p>{HERO_SECTION_CODING_SINCE[0]}</p>
          <h3>{HERO_SECTION_CODING_SINCE[1]}</h3>
        </div>
        <div className="sectionCard">
          <i className="icon">
            <MdUpdate />
          </i>
          <p>{HERO_SECTION_LAST_UPDATED_TITLE}</p>
          <h3>{auroraLastUpdated}</h3>
        </div>
        <div className="sectionCard">
          <i className="icon">
            <MdOutlineLocationOn />
          </i>
          <p>{HERO_SECTION_LOCATION[0]}</p>
          <h3>
            {HERO_SECTION_LOCATION[1]} <small>{HERO_SECTION_LOCATION[2]}</small>
          </h3>
        </div>
      </div>
    </SectionCounterStyle>
  );
}

const SectionCounterStyle = styled.div`
  .sectionCards {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0;
  }

  .icon {
    font-size: ${(props) => props.theme.size.$400};
    margin: 0.5rem 0;
  }

  .sectionCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border: 2px solid ${(props) => props.theme.primaryColor.$100};
    color: ${(props) => props.theme.gray.$700};
    min-width: 21%;
    border-radius: 1rem;
    flex: 1 1 auto;
    margin: 0.5rem;
    cursor: auto;

    :hover {
      border: 2px solid ${(props) => props.theme.primaryColor.$400};
    }
  }

  @media (max-width: 1200px) {
    border: 1px solid orange;
  }
`;
