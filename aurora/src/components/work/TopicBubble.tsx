import styles from '../../styles/TopicBubble.module.css';
const techTypes = new Map<string, string>()
    .set('react', 'front')
    .set('Spring-Boot', 'back');

export default function TopicBubble({ topic }: { topic: string }) {
    const topicType = techTypes.get(topic);

    return <div className={`${styles.topicBubble} ${topicType}`}>{topic}</div>;
}
