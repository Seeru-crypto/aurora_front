import { ProjectInterface } from '../../lib/load-data';

export default function Archive({
    projects,
}: {
    projects: ProjectInterface[];
}) {
    return (
        <div>
            <h3>Arhive list!</h3>
            <p>number of arhcive projects {projects.length}</p>
        </div>
    );
}
