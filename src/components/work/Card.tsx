import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { ProjectInterface } from '../../lib/load-data';
import Button, { ButtonType } from '../util/Button';
import TopicBubble from './TopicBubble';
import { Tech } from '../../data';
import { MAX_TOPICS, MIN_TOPICS } from '../../config';

export const formatDate = (isoDateString: string, shortFormat: boolean) => {
  const newDate = new Date(isoDateString);
  if (shortFormat) {
    const monthName = newDate.toLocaleString('en-US', { month: 'short' });
    return monthName + '/' + newDate.getFullYear();
  } else {
    const monthName = newDate.toLocaleString('en-US', { month: 'long' });
    return monthName + ' ' + newDate.getFullYear();
  }
};

const Card = ({ project, techTypes }: { project: ProjectInterface; techTypes: Tech[] }) => {
  const [nrOfTopics, setNrOfTopics] = useState<number>(MIN_TOPICS);
  const pictureUrl: string = project.picture_url ? project.picture_url : '/resources/default.jpg';

  return (
    <CardStyle
      onMouseEnter={() => setNrOfTopics(MAX_TOPICS)}
      onMouseLeave={() => setNrOfTopics(MIN_TOPICS)}
      key={project.repo_name}>
      <div className={'cardHeader'}>
        <h2 className={'cardTitle'}>{project.project_name}</h2>
      </div>
      <div className={'cardBody'}>
        <div className={'imageContainer'}>
          <Image src={pictureUrl} width={200} height={200} alt="image not found!" />
        </div>
        <span className={'topicHeader'}>Languages:</span>

        <div className="topicList">
          {project.topics &&
            project.topics.map((topic: string, index: number) => {
              return index < nrOfTopics ? (
                <span className="topic" key={topic}>
                  <TopicBubble techTypes={techTypes} topic={topic} />
                </span>
              ) : (
                <span key={index}></span>
              );
            })}
          {nrOfTopics === 5 && project.topics && project.topics.length >= 6 && <span>...</span>}
        </div>
      </div>

      <div className={'cardDetails'}>
        <div className={'cardDescription'}>{project.description}</div>

        <div className={'projectDates'}>
          {project.updatedAt && <small>Updated: {formatDate(project.updatedAt, true)}</small>}
          {project.created_at && <small>Created: {formatDate(project.created_at, true)}</small>}
        </div>
        <div className={'showcaseButtons'}>
          {project.repo_name && (
            <Link href={`https://github.com/Seeru-crypto/${project.repo_name}`} target="_blank" rel="noreferrer">
              <Button buttonType={ButtonType.GHOST}>Source</Button>
            </Link>
          )}
          {project.homepage && (
            <Link href={project.homepage} target="_blank" rel="noreferrer">
              <Button buttonType={ButtonType.DEFAULT}>Live example</Button>
            </Link>
          )}
        </div>
      </div>
    </CardStyle>
  );
};

export default Card;

const CardStyle = styled.div`
  margin: 1rem;
  overflow: auto;
  box-shadow: 0 15px 50px ${(props) => props.theme.showCaseBoxShadowColor};
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  border-radius: 1rem;

  :hover .cardDetails {
    max-height: 15rem;
    transition: all ease-in-out 0.5s;
  }

  .cardHeader {
    margin-left: 1rem;
  }

  .cardBody {
    padding: 0 0.5rem;

    .imageContainer {
      margin: 0.5rem;
      border: 1px solid ${(props) => props.theme.primary};
      border-radius: 0.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .topicHeader {
      margin-left: 0.5rem;
    }
    .topic {
      text-transform: capitalize;
      margin-left: 0.5rem;
      display: inline-block;
    }
  }

  .cardDetails {
    margin-left: 1rem;
    padding: 0.5rem;
    overflow: hidden;
    transition: max-height 1s;
    max-height: 0;

    .projectDates {
      display: flex;
      flex-direction: column;
      margin-top: 0.25rem;
    }

    .showcaseButtons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin: 0.5rem 0;
    }

    .cardDescription {
      border-top: 1px solid ${(props) => props.theme.primary};
      margin-top: 0.25rem;
    }
  }

  @media (max-width: 1200px) {
    width: 50%;
  }
`;
