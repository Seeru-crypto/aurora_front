import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import ProjectTag, { IProjectTag } from './ProjectTag';
import Button from '../../components/util/Button';

export interface IProjectCard {
  imageSrc: string;
  title: string;
  desc: string;
  tags: IProjectTag[];
  link?: string;
}

const ProjectCard = (props: IProjectCard) => {
  return (
    <ProjectCardStyle>
      <Image src={props.imageSrc}
             className='image'
             width={500}
             height={500}
             alt='project_image'
             data-position='center center' />
      <div className='card-content'>
        <div className='card-top'>
          <h2 className='project-title'>{props.title}</h2>
          <p className='card-desc'>{props.desc}</p>
          {props.link && (
            <Button> <a target='_blank' href={props.link} className='nav-button'>github</a></Button>
          )}
        </div>
        <div className='tags-container'>
          {props.tags.map(tag => <ProjectTag
            key={tag.name}
            name={tag.name}
            type={tag.type} />)}
        </div>
      </div>
    </ProjectCardStyle>
  );
};

const ProjectCardStyle = styled.section`
  max-width: 80%;
  padding-right: .5rem;
  border: 1px solid green;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  min-height: 22.5em;
  margin-bottom: 2rem;

  .image {
    background-position: center center;
  }

  .card-content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .tags-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .nav-button {
    text-decoration: none;
    color: inherit;
    border: none;
    background-color: transparent;
  }

  .card-desc {
    font-size: ${(props) => props.theme.size.$350};
  }

  .image {
    border-radius: 1rem;
  }

  :hover {
    .project-title {
      color: ${(props) => props.theme.primaryColor.$500};
    }
  }

  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

export default ProjectCard;