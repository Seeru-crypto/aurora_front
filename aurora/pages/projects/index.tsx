export interface ProjectInterface {
    name: string;
    id: number;
    stack: Array<string>;
}

interface ProjectsInterface {
    projects: Array<ProjectInterface>;
}

export default function ProjectList({ projects }: ProjectsInterface) {
    return (
        <div>
            <h1>All projects</h1>
            {projects.map((project) => (
                <div>{project.name}</div>
            ))}
        </div>
    );
}

export async function getStaticProps() {
    const req = await fetch(
        `https://e469abe1-ffd5-4df1-89d9-d80090a1779b.mock.pstmn.io/projects`
    );
    const data = await req.json();

    return {
        props: { projects: data.projects },
        revalidate: 30,
    };
}
