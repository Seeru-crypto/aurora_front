import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import SectionCounter from './SectionCounter';
import Timeline from './Timeline';

const Experience = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  return (
    <ExperienceStyle id='experience' ref={ref}>
      <div className='custom-shape-divider-top-1727523338'>
        <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='shape-fill'></path>
        </svg>
      </div>

      <div className='container'>
        <h2>Experience</h2>
        <SectionCounter />
        <Timeline />
      </div>

    </ExperienceStyle>
  );
});

const ExperienceStyle = styled.section`
  margin-bottom: 2rem;
  background-color: ${(props) => props.theme.background};

  .container {
    padding: 0 4rem;
  }

  .custom-shape-divider-top-1727523338 svg {
    position: relative;
    display: block;
    width: calc(149% + 1.3px);
    height: 84px;
  }

  .custom-shape-divider-top-1727523338 .shape-fill {
    fill: ${(props) => props.theme.backgroundAlternative};
  }
`;

Experience.displayName = 'Experience main component';

export default Experience;