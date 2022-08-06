import { ProjectInterface } from '../../lib/load-data';
import styles from '../../styles/Work.module.css';
import Archive from './Archive';
import Card from './Card';

export type TechTypes = ['front', 'back', 'db'];

export interface Tech {
    name: string;
    bytesOfCode: number;
    type: TechTypes;
}

export default function Work({ projects }: { projects: ProjectInterface[] }) {
    const showcaseList: ProjectInterface[] = projects.filter(
        (project) => project.showcase
    );

    console.log(showcaseList.length);

    // ToDo split projects into Showcase and arhice lists and pass them onto child components
    return (
        <section className={styles.container} id="work">
            <h1>All projects</h1>
            <div className={styles.workCards}>
                {showcaseList.map((project: ProjectInterface, index) => (
                    <Card key={index} project={project} />
                ))}
            </div>
            <Archive
                projects={projects.filter(
                    (project: ProjectInterface) => !project.showcase
                )}
            />
        </section>
    );
}
