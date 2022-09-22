import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import { TimelineCard } from '../../lib/load-data';
import SectionCounter from './SectionCounter';
import data from '../../data.json';

interface ExperienceProps {
  timeLineCards: TimelineCard[];
}

const Experience = React.forwardRef((props: ExperienceProps, ref: ForwardedRef<HTMLElement>): JSX.Element => {
    const { EXPERIENCE_SECTION_TITLE } = data.text;

    return (
    <ExperienceStyle id="experience" ref={ref}>
        <h2>{EXPERIENCE_SECTION_TITLE}</h2>
      <SectionCounter />
      {/* TODO: To be pair programmed */}
    </ExperienceStyle>
  );
});
Experience.displayName = 'Experience display';

export default Experience;

const ExperienceStyle = styled.section``;
