import Image from 'next/image';
import { ProjectInterface } from '../../lib/load-data';
import styles from '../../styles/Card.module.css';

const Card = ({ project }: { project: ProjectInterface }) => {
    console.log('project is ', project);

    return (
        <div className={styles.container} key={project.repo_name}>
            {project.project_name}
            <Image
                src={project.picture_url}
                width={500}
                height={400}
                alt="no-creep!"
            />
        </div>
    );
};

export default Card;
