import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import SectionCounter from './SectionCounter';
import Timeline from './Timeline';
import Wave from "./Wave.svg"

const Experience = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  return (
    <ExperienceStyle id='experience' ref={ref}>
      <div className='custom-shape-divider-top-1727523338'>
        <Wave className='shape-fill' />
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