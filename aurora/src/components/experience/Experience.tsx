import styles from '../../styles/Experience.module.css';
import React, {ForwardedRef} from "react";
export interface ExperienceInterface {
    date_started: Date;
    date_ended: Date;
    employer: string;
    job_title: string;
    job_description: string;
    job_type: JobTypes;
}

export type JobTypes = ['course', 'freelance', 'main'];

const Experience = React.forwardRef (( props,ref: ForwardedRef<HTMLElement>) => {
    return (
        <section id="experience" ref={ref} className={styles.container}>
            <h2>Experience</h2>
            <p>Option B</p>
        </section>
    );
});
Experience.displayName = "Experience display"

export default Experience;
