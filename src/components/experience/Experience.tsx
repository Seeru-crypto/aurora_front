import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import SectionCounter from './SectionCounter';

const Experience = React.forwardRef((props, ref: ForwardedRef<HTMLElement>) => {
    return (
        <ExperienceStyle id="experience" ref={ref}>
            <h2>Experience</h2>
            <SectionCounter />
            <p>Option B</p>
        </ExperienceStyle>
    );
});
Experience.displayName = 'Experience display';

export default Experience;

const ExperienceStyle = styled.section`
    border: 1px solid var(--primary-color);
    height: 100vh;
    width: 100%;
`;
