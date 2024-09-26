import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import SectionCounter from './SectionCounter';
import Timeline_v2 from '../timeline_v2/Timeline_v2';

const Experience = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  // https://excalidraw.com/#room=5ac138994a903ddb6b8b,FOI9bwwGzZM-R3KmGJzyqA
  return (
    <ExperienceStyle id="experience" ref={ref}>
      <h2>Experience</h2>
      <SectionCounter />
      <Timeline_v2 />
    </ExperienceStyle>
  );
});

Experience.displayName = 'Experience main component';

export default Experience;

const ExperienceStyle = styled.section`
padding: 0 4rem;
  margin-bottom: 2rem;
`;
