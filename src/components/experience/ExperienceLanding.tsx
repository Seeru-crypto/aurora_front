import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import SectionCounter from './SectionCounter';
import Timeline from './Timeline';
import { LABELS } from '../../data';

const ExperienceLanding = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  // https://excalidraw.com/#room=5ac138994a903ddb6b8b,FOI9bwwGzZM-R3KmGJzyqA
  return (
    <ExperienceStyle id="experience" ref={ref}>
      <h2>{LABELS.EXPERIENCE_SECTION_TITLE}</h2>
      <SectionCounter />
      <Timeline />
    </ExperienceStyle>
  );
});

ExperienceLanding.displayName = 'Experience main component';

export default ExperienceLanding;

const ExperienceStyle = styled.section``;
