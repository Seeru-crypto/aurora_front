import { ProjectInterface } from '../../lib/load-data';
import styles from '../../styles/Work.module.css';
import Card from './Card';

export type TechTypes = ['front', 'back', 'db'];

export interface Tech {
    name: string;
    bytesOfCode: number;
    type: TechTypes;
}

export default function Work({ projects }: { projects: ProjectInterface[] }) {
    return (
        <section className={styles.container} id="work">
            <h1>All projects</h1>
            <div className={styles.workCards}>
                {projects.map((project: ProjectInterface, index) => (
                    <Card key={index} project={project} />
                ))}
            </div>

            <h3>Archive list</h3>
        </section>
    );
}
