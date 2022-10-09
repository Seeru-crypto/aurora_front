import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import data from '../../data.json';
import SectionCounter from './SectionCounter';
import Timeline from './Timeline';

const Experience = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  const { EXPERIENCE_SECTION_TITLE } = data.text;

  // https://excalidraw.com/#room=5ac138994a903ddb6b8b,FOI9bwwGzZM-R3KmGJzyqA
  return (
    <ExperienceStyle id="experience" ref={ref}>
      <h2>{EXPERIENCE_SECTION_TITLE}</h2>
      <SectionCounter />
      <Timeline />
    </ExperienceStyle>
  );
});

Experience.displayName = 'Experience main component';

export default Experience;

const ExperienceStyle = styled.section``;
