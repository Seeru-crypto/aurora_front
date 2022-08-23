import { TechTypes } from '../../services/load-data';
import styles from '../../styles/TopicBubble.module.css';

export default function TopicBubble({
    topic,
    techTypes,
}: {
    topic: string;
    techTypes: TechTypes;
}) {
    const topicType = techTypes.get(topic);
    return <div className={`${styles.topicBubble} ${topicType}`}>{topic}</div>;
}
