import styled from 'styled-components';
import { TechTypes } from '../../lib/load-data';

export default function TopicBubble({ topic, techTypes }: { topic: string; techTypes: TechTypes }) {
  const topicType = techTypes.get(topic);
  return (
    <TopicStyle topicType={topicType} className={`${topicType}`}>
      {topic}
    </TopicStyle>
  );
}

const TopicStyle = styled.div<{ topicType: string | undefined }>`
  background-color: ${(props) => props.theme.gray.$400};

  width: fit-content;
  padding: 0.15rem 0.3rem;
  border-radius: 0.25rem;
  margin: 0.15rem;
  font-size: ${(props) => props.theme.size.$200};;

  &.front {
    background-color: ${(props) => props.theme.frontend};
    color: ${(props) => props.theme.gray.$50};
  }

  &.back {
    background-color: ${(props) => props.theme.backend};
    color: ${(props) => props.theme.gray.$50};
  }

  &.other {
    background-color: ${(props) => props.theme.other};
    color: ${(props) => props.theme.gray.$50};
  }
  &.db {
    background-color: ${(props) => props.theme.database};
    color: ${(props) => props.theme.gray.$50};
  }
`;
