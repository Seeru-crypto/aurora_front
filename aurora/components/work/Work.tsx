import { ProjectInterface } from '../../lib/load-data';
import styles from '../../styles/Work.module.css';
import Archive from './Archive';
import Card from './Card';
import TopicBubble from './TopicBubble';

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

    return (
        <section className={styles.container} id="work">
            <h1>All projects</h1>
            <div className={styles.workCards}>
                {showcaseList.map((project, index) => (
                    <Card key={index} project={project} />
                ))}
            </div>
            <Archive
                projects={projects.filter((project) => !project.showcase)}
            />
            <TopicBubble topic="react" />
            <TopicBubble topic="Spring-Boot" />
            <TopicBubble topic="No type" />
        </section>
    );
}

// ToDo: AddTransfer list iteration proccess to a server side function!
