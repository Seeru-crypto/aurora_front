import Image from 'next/image';
import { ProjectInterface } from '../../lib/load-data';
import styles from '../../styles/Card.module.css';

const Card = ({ project }: { project: ProjectInterface }) => {
    return (
        <div className={styles.container} key={project.repo_name}>
            <h2 className={styles.cardTitle}>{project.project_name}</h2>

            <div className={styles.imageContainer}>
                <Image
                    src={project.picture_url}
                    layout="fill"
                    alt="no-creep!"
                />
            </div>
            <div>Languages:</div>
            <div className={styles.topicList}>
                {project.topics &&
                    project.topics.map((topic) => (
                        <span key={topic} className={styles.topic}>
                            {' ' + topic}
                        </span>
                    ))}
            </div>

            <div className={styles.showcaseButtons}>
                <button
                    onClick={() => console.log('show source code')}
                    className={styles.sourceCode}
                >
                    Source
                </button>
                <button
                    onClick={() => console.log('show live demo')}
                    className={styles.liveDemo}
                >
                    Live Example
                </button>
            </div>
        </div>
    );
};

export default Card;
