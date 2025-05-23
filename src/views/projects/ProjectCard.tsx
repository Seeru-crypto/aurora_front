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
  codeRepository?: string;
  liveInstance?: string;
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

  let framerConfig: Variants = {}
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

  const isMobile = window.innerWidth < 768; //should be same as $screenSm
  if (!isMobile) {
    framerConfig = animationConfig
  }

  return (
    <ProjectCardStyle>
      <motion.div
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.6 }}
        variants={framerConfig}
        className='container'
      >
        <div className='image-container'>
          <Image src={getImage(props.imageSrc, props.alternativeImageSrc)}
                 className='image'
                 width={0}
                 height={0}
                 sizes="100vw"
                 style={{ width: '100%', height: '100%' }}

                 alt='project_image'
                 data-position='center center' />
        </div>

        <div className='card-content'>
          <div className='card-top'>
            <h2 className='project-title'>{props.title}</h2>
            <p className='card-desc'>{props.desc}</p>

          </div>
          <div className='card-bottom'>
            <div className='link-container'>
              {props.codeRepository && (
                <Button> <a target='_blank' href={props.codeRepository} className='nav-button'>code</a></Button>
              )}
              {props.liveInstance && (
                <Button> <a target='_blank' href={props.liveInstance} className='nav-button'>live</a></Button>
              )}
            </div>
            <div className='tags'>
              {props.tags.map(tag => <ProjectTag
                key={tag.name}
                name={tag.name}
                type={tag.type} />)}
            </div>
          </div>
        </div>
      </motion.div>
    </ProjectCardStyle>
  );
};

const ProjectCardStyle = styled.section`
  max-width: 60%;

  .card-desc {
    font-size: ${(props) => props.theme.size.$350};
  }
  
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-bottom {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .link-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  
  .tags {
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
      
      :hover {
        color: inherit;
      }
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

  @media screen and (max-width: ${(props) => props.theme.viewSizesMin.$screenLg}) {
    //border: 2px solid lightseagreen;
    padding: 0 1rem;
    max-width: 100%;
    width: 100%;

    .image {
      height: 20rem;
      width: 30rem;
    }
    
    .card-top {
      padding:  0 .5rem;
    }
    
    .card-content {
      padding: .5rem !important;
    }

    .container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin-bottom: .5rem;
    }

    .card-desc {
      font-size: 1rem;
    }

    .card-bottom {
      font-size: .5rem;
      padding-top: 2rem;
      gap: .5rem;
    }

    .image-container {
      padding-top: 1rem;
      width: 90%;
    }
  }
`;

export default ProjectCard;