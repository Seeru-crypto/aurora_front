import styles from '../../styles/Card.module.css';
import { ProjectInterface } from './Work';

const Card = ({ project }: { project: ProjectInterface }) => {
    console.log(project);
    return (
        <div className={styles.container} key={project.id}>
            {project.title}
        </div>
    );
};

export default Card;
