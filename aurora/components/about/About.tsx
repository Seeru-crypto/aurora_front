import styles from '../../styles/About.module.css';
export interface AboutInterface {
    main_text: string[];
    main_stack: string[];
    location: string;
    resume_url: string;
    linkedIn__url: string;
    contact_email: string;
}
const About = () => {
    return (
        <section id="about" className={styles.container}>
            <h1>About</h1>
        </section>
    );
};

export default About;
