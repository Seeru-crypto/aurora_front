import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import { TimelineCard } from '../../lib/load-data';
import SectionCounter from './SectionCounter';

interface ExperienceProps {
    timeLineCards: TimelineCard[];
}

const Experience = React.forwardRef(
    (props: ExperienceProps, ref: ForwardedRef<HTMLElement>) => {
        console.log(props.timeLineCards.length);
        return (
            <ExperienceStyle id="experience" ref={ref}>
                <h2>Experience</h2>
                <SectionCounter />
                <p>Option B</p>
            </ExperienceStyle>
        );
    }
);
Experience.displayName = 'Experience display';

export default Experience;

const ExperienceStyle = styled.section`
    border: 1px solid var(--primary-color);
    height: 100vh;
    width: 100%;
`;
