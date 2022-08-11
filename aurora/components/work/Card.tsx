import Image from 'next/image';
import { ProjectInterface, TechTypes } from '../../lib/load-data';
import styles from '../../styles/Card.module.css';
import TopicBubble from './TopicBubble';

const Card = ({
    project,
    techTypes,
}: {
    project: ProjectInterface;
    techTypes: TechTypes;
}) => {
    const formatDate = (date: string) => {
        const newDate = new Date(date);
        const monthName = newDate.toLocaleString('default', { month: 'short' });
        return monthName + '/' + newDate.getFullYear();
    };

    // ToDo: Show 4 or 5 topics and when on hover then display all
    return (
        <div className={styles.container} key={project.repo_name}>
            <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>{project.project_name}</h2>
            </div>
            <div className={styles.cardBody}>
                <div className={styles.imageContainer}>
                    <Image
                        src={project.picture_url}
                        width={200}
                        height={200}
                        alt="no image found!"
                    />
                </div>
                <span>Languages:</span>

                <div className={styles.topicList}>
                    {project.topics &&
                        project.topics.map((topic) => (
                            <span key={topic} className={styles.topic}>
                                <TopicBubble
                                    techTypes={techTypes}
                                    topic={topic}
                                />
                            </span>
                        ))}
                </div>
            </div>

            <div className={styles.cardDetails}>
                <div className={styles.cardDescription}>
                    {project.description}
                </div>

                <div className={styles.projectDates}>
                    {project.updated_at && (
                        <small>
                            Date updated: {formatDate(project.updated_at)}
                        </small>
                    )}
                    {project.created_at && (
                        <small>
                            Date created: {formatDate(project.created_at)}
                        </small>
                    )}
                </div>

                <div className={styles.showcaseButtons}>
                    {project.repo_name && (
                        <a
                            href={`https://github.com/Seeru-crypto/${project.repo_name}`}
                            className={styles.sourceCode}
                            target="_blank"
                        >
                            Source
                        </a>
                    )}
                    {project.homepage && (
                        <a
                            href={project.homepage}
                            className={styles.liveDemo}
                            target="_blank"
                        >
                            Live example
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
