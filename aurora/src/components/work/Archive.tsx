import styled from 'styled-components';
import config from '../../config.json';
import { ProjectInterface } from '../../lib/load-data';
import Tooltip from '../util/ToolTip';

export default function Archive({
    projects,
}: {
    projects: ProjectInterface[];
}) {
    const { GITHUB_URL } = config;

    function getYear(project: ProjectInterface): number {
        if (project.repo_name && project.updatedAt)
            return new Date(project.updatedAt).getFullYear();
        else if (project.updatedAt)
            return new Date(project.updatedAt).getFullYear();
        else return 1970;
    }
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
                        <tr
                            className={`tableRow ${
                                index % 2 === 0 ? 'even' : 'unEven'
                            }`}
                            key={index}
                        >
                            <Tooltip message="test" />
                            <td className="tableContent">{getYear(project)}</td>
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
                                        target="_blank"
                                        rel="noopener noreferrer"
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
        //border: 1px solid black;
    }
    .tableContent {
        text-transform: capitalize;

        //border: 1px solid orange;
    }
    .tableHeader {
        background-color: var(--table-header-bkg);
        color: var(--button-text);
    }
    .even {
        background-color: var(--table-even);
    }
    .unEven {
        background-color: var(--table-uneven);
    }
`;
