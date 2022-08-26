import { ProjectInterface } from '../../lib/load-data';
import styled from "styled-components";

export default function Archive({
    projects,
}: {
    projects: ProjectInterface[];
}) {
    return (
        <ArchiveStyle>
            <h3>Arhive list!</h3>
            {projects.map((project, index) => (
                <div key={index}>
                    <p>{`${index+1}. ${project.project_name}`}</p>
                </div>
            ))}
        </ArchiveStyle>
    );
}
const ArchiveStyle = styled.div`
    height: 50vh;
`
