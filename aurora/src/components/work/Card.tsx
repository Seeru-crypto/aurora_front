import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { ProjectInterface, TechTypes } from '../../lib/load-data';
import styles from '../../styles/Card.module.css';
import TopicBubble from './TopicBubble';

const maxNumberOfTopics = 30;
const minNumberOfTopics = 5;

const Card = ({
    project,
    techTypes,
}: {
    project: ProjectInterface;
    techTypes: TechTypes;
}) => {
    const [nrOfTopics, setNrOfTopics] = useState(5);

    const formatDate = (date: string) => {
        const newDate = new Date(date);
        const monthName = newDate.toLocaleString('default', { month: 'short' });
        return monthName + '/' + newDate.getFullYear();
    };

    return (
        <div
            onMouseEnter={() => setNrOfTopics(maxNumberOfTopics)}
            onMouseLeave={() => setNrOfTopics(minNumberOfTopics)}
            className={styles.container}
            key={project.repo_name}
        >
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
                <span className={styles.topicHeader}>Languages:</span>

                <div className={styles.topicList}>
                    {project.topics &&
                        project.topics.map((topic, index) => {
                            if (index < nrOfTopics)
                                return (
                                    <span key={topic} className={styles.topic}>
                                        <TopicBubble
                                            techTypes={techTypes}
                                            topic={topic}
                                        />
                                    </span>
                                );
                        })}
                    {nrOfTopics === 5 &&
                        project.topics &&
                        project.topics.length >= 6 && <span>...</span>}
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

const CardStyle = styled.div`
    margin: 1rem;
    overflow: auto;
    box-shadow: 0 15px 50px var(--box-shadow);
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    max-width: 33%;
    border-radius: 1rem;

    .container:hover .cardDetails {
        max-height: 15rem;
        transition: all ease-in-out 0.5s;
    }

    .cardHeader {
        margin-left: 1rem;
    }

    .cardBody {
        padding: 0 0.5rem;
    }

    .cardBody .imageContainer {
        margin: 0.5rem;
        border: 1px solid var(--secondary-color);
        border-radius: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cardBody .topic {
        text-transform: capitalize;
        display: inline-block;
        margin-left: 0.5rem;
    }

    .cardBody .topicHeader {
        margin-left: 0.5rem;
    }
    .cardDetails {
        margin-left: 1rem;
        padding: 0.5rem;
        overflow: hidden;
        transition: max-height 1s;
        max-height: 0;
    }

    .cardDetails .projectDates {
        display: flex;
        flex-direction: column;
        margin-top: 0.25rem;
    }

    .cardDetails .showcaseButtons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin: 0.5rem 0;
    }

    .cardDetails .sourceCode {
        border: 1px solid var(--secondary-color);
        color: var(--secondary-color);
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }

    .cardDetails .liveDemo {
        border-radius: 0.5rem;
        border: transparent;
        padding: 0.5rem 1rem;
        background-color: var(--primary-color);
        color: var(--button-text);
        cursor: pointer;
    }

    .cardDetails .cardDescription {
        border-top: 1px solid #eaeaea;
        margin-top: 0.25rem;
    }
`;
