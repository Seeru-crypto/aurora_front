import styled from 'styled-components';
import { TypesOfTech } from '../../data';

export interface IProjectTag {
  type: TypesOfTech;
  name: string
}

const ProjectTag = (props: IProjectTag) => {

  return (
    <TopicStyle topicType={props.type} className={`${props.type}`}>
      {props.name}
    </TopicStyle>
  )
}

const TopicStyle = styled.div<{ topicType: string | undefined }>`
  background-color: ${(props) => props.theme.gray.$400};

  width: fit-content;
  padding: 0.35rem 0.5rem;
  border-radius: 0.25rem;
  margin: 0.15rem;
  font-size: ${(props) => props.theme.size.$300};

  &.front {
    background-color: ${(props) => props.theme.frontend};
    color: ${(props) => props.theme.textColor};
  }

  &.back {
    background-color: ${(props) => props.theme.backend};
    color: ${(props) => props.theme.textColor};
  }

  &.other {
    background-color: ${(props) => props.theme.other};
    color: ${(props) => props.theme.textColor};
  }
  &.db {
    background-color: ${(props) => props.theme.database};
    color: ${(props) => props.theme.textColor};
  }
`;

export default ProjectTag;
