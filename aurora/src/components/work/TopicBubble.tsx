import styled from 'styled-components';
import { TechTypes } from '../../lib/load-data';

export default function TopicBubble({
    topic,
    techTypes,
}: {
    topic: string;
    techTypes: TechTypes;
}) {
    const topicType = techTypes.get(topic);
    return (
        <TopicStyle topicType={topicType} className={`${topicType}`}>
            {topic}
        </TopicStyle>
    );
}

const TopicStyle = styled.div<{ topicType: string | undefined }>`
    border: 2px solid yellow;
    width: fit-content;
    padding: 0.15rem 0.25rem;
    border-radius: 0.25rem;
    margin: 0.15rem;

    &.front {
        border-color: var(--front-topic-color);
    }

    &.back {
        border-color: var(--back-topic-color);
    }

    &.other {
        border-color: var(--other-topic-color);
    }
    &.db {
        border-color: var(--db-topic-color);
    }
`;
