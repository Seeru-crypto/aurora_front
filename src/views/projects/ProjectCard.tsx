import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import ProjectTag, { IProjectTag } from './ProjectTag';
import Button from '../../components/Button';
import { RootState, useAppSelector } from '../../state/store';
import { ActiveTheme } from '../../state/themeSlice';
import { motion, Variants } from 'framer-motion';

export interface IProjectCard {
  imageSrc: string;
  title: string;
  desc: string;
  tags: IProjectTag[];
  link?: string;
  alternativeImageSrc?: string;
}

const ProjectCard = (props: IProjectCard) => {
  const activeTheme = useAppSelector((state: RootState) => state.theme.activeTheme);

  function getImage(imageSrc: string, alternativeImageSrc?: string) {
    if (alternativeImageSrc === undefined) return imageSrc;

    // for aurora dual dm picture
    if (activeTheme === ActiveTheme.DAY) return alternativeImageSrc;
    else return imageSrc;
  }


  const animationConfig: Variants = {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 1.8,
      },
    },
  };

  return (
    <ProjectCardStyle>
      <motion.div
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.6 }}
        variants={animationConfig}
        className='container'
      >
        <Image src={getImage(props.imageSrc, props.alternativeImageSrc)}
               className='image'
               width={750}
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
      </motion.div>
    </ProjectCardStyle>
  );
};

const ProjectCardStyle = styled.section`
  max-width: 80%;

  .card-desc {
    font-size: ${(props) => props.theme.size.$350};
  }

  .tags-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .container {
    padding: 1rem;
    border: 1px solid ${(props) => props.theme.primaryColor.$300};
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

    .nav-button {
      text-decoration: none;
      color: inherit;
      border: none;
      background-color: transparent;
    }


    .image {
      border-radius: 1rem;
    }

    :hover {
      border-color: ${(props) => props.theme.primaryColor.$400};

      .project-title {
        color: ${(props) => props.theme.primaryColor.$500};
      }
    }

    @media (min-width: ${(props) => props.theme.viewSizesMin.$screenLg}) {
      .image {
        height: 25rem;
        max-width: 40rem;
      }
    }

    @media (min-width: ${(props) => props.theme.viewSizesMin.$screenXl}) {
      .image {
        height: 25rem;
        width: 40rem;
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.viewSizesMin.$screenXs}) and (max-width: ${(props) => props.theme.viewSizesMin.$screenSm}) {
    //border: 2px solid lightseagreen;
    padding: 0 1rem;
    max-width: 100%;

    .image {
      height: 20rem;
      width: 30rem;
    }

    .container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      margin-bottom: .5rem;
    }

    .card-desc {
      font-size: 1rem;
    }

    .tags-container {
      padding-top: 2rem;
      margin-bottom: -2rem;
      gap: .5rem;
    }

  }
`;

export default ProjectCard;