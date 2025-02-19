import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import SectionCounter from './SectionCounter';
import Timeline from './Timeline';

const Experience = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  return (
    <ExperienceStyle id='experience' ref={ref}>
      <div className='container'>
        <h2>Experience</h2>
        <SectionCounter />
        <Timeline />
      </div>
    </ExperienceStyle>
  );
});

const ExperienceStyle = styled.section`
  background-color: ${(props) => props.theme.background};
  .container {
    padding: 0 4rem;
  }
`;

Experience.displayName = 'Experience main component';

export default Experience;