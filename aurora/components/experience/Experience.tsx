import styles from '../../styles/Experience.module.css';
export interface ExperienceInterface {
    date_started: Date;
    date_ended: Date;
    employer: string;
    job_title: string;
    job_description: string;
    job_type: JobTypes;
}

export type JobTypes = ['course', 'freelance', 'main'];

const Experience = () => {
    return (
        <section id="experience" className={styles.container}>
            <h2>Experience</h2>
            <p>Option B</p>
        </section>
    );
};

export default Experience;
