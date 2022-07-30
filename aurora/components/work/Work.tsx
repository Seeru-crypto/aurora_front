import { Project } from '@prisma/client';
import Card from './Card';
import styles from '../../styles/Work.module.css';

export type ProjectTypes = ['personal', 'freelance', 'main'];
export type TechTypes = ['front', 'back', 'db'];

export interface ProjectInterface {
    title: string;
    description: string;
    github_url_1: string;
    github_url_2: string;
    live_url: string;
    showcase: boolean;
    project_type: ProjectTypes;
    build_version: number;
    picture_url: string;
    date_first_commit: Date;
    date_latest_commit: Date;
    number_of_commits: number;
    stack: Tech[];
    id: string;
}

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
