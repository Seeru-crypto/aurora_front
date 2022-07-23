import { Project } from '@prisma/client';

/* export interface ProjectInterface {
    name: string;
    id: number;
    stack: Array<string>;
}
 */

export default function ProjectList({ projects }: { projects: Project[] }) {
    return (
        <div>
            <h1>All projects</h1>
            {projects.map((project) => (
                <div key={project.id}>{project.title}</div>
            ))}
        </div>
    );
}
