import config from '../../config.json';
import styles from '../../styles/TopicBubble.module.css';

export default function TopicBubble({ topic }: { topic: string }) {
    // ToDo: Optimize the map so that map is created only once at the parent level and passed down to TopicBubble
    // TODO: remove the any identifier
    const list: any = config.TECH_TYPES;
    const techTypes = new Map<string, string>(list);

    const topicType = techTypes.get(topic);
    return <div className={`${styles.topicBubble} ${topicType}`}>{topic}</div>;
}
