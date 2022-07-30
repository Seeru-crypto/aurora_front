import { ProjectInterface } from './Work';
import styles from '../../styles/Card.module.css';

const Card = ({ project }: { project: ProjectInterface }) => {
    return (
        <div className={styles.container} key={project.id}>
            {project.title}
        </div>
    );
};

export default Card;
