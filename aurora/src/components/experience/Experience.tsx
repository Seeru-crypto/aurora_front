import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import SectionCounter from "./SectionCounter";
export interface ExperienceInterface {
    date_started: Date;
    date_ended: Date;
    employer: string;
    job_title: string;
    job_description: string;
    job_type: JobTypes;
}

export type JobTypes = ['course', 'freelance', 'main'];

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
    border: 1px solid red;
    height: 100vh;
    width: 100%;
`;
