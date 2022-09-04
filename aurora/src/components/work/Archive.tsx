import styled from 'styled-components';
import config from '../../config.json';
import { ProjectInterface } from '../../lib/load-data';

export default function Archive({
    projects,
}: {
    projects: ProjectInterface[];
}) {
    const { GITHUB_URL } = config;
    return (
        <ArchiveStyle>
            <h3>Arhive list!</h3>
            <table className="table">
                <tbody>
                    <tr className="tableHeader">
                        <th>Year</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Topics</th>
                        <th>Links</th>
                    </tr>
                    {projects.map((project, index) => (
                        <tr className="tableRow" key={index}>
                            <td className="tableContent">{index + 1}</td>
                            <td className="tableContent">
                                {project.project_name}
                            </td>
                            <td className="tableContent">
                                {project.project_type}
                            </td>
                            <td className="tableContent">
                                {project.topics?.map((topic) => (
                                    <span key={topic}>{`${topic}, `}</span>
                                ))}
                            </td>
                            <td>
                                {project.repo_name && (
                                    <a
                                        href={`${GITHUB_URL}/${project.repo_name}`}
                                    >
                                        repo_link
                                    </a>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </ArchiveStyle>
    );
}
const ArchiveStyle = styled.div`
    height: 50vh;
    padding: 2rem 0;
    .table {
        width: 100%;
        border: 1px solid black;
    }
    .tableContent {
        border: 1px solid orange;
    }
`;
