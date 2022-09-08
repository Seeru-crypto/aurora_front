import { FiExternalLink } from 'react-icons/fi';
import styled from 'styled-components';
import config from '../../config.json';
import { ProjectInterface } from '../../lib/load-data';

export default function Archive({
    projects,
}: {
    projects: ProjectInterface[];
}) {
    const { GITHUB_URL } = config;

    function getYear(project: ProjectInterface): number {
        if (project.updatedAt) return new Date(project.updatedAt).getFullYear();
        return 1984;
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
                                    <ArchiveIconStyle
                                        href={`${GITHUB_URL}/${project.repo_name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FiExternalLink />
                                    </ArchiveIconStyle>
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .table {
        border-collapse: collapse;
        width: 100%;

        .tableContent {
            padding: 0.5rem;
            text-transform: capitalize;
        }

        .tableHeader {
            background-color: var(--primary-color);
            color: var(--button-text);
            th {
                padding: 0.5rem;
            }
        }

        .even {
            background-color: var(--table-even);
            :hover {
                background-color: var(--primary-color-300);
            }
        }

        .unEven {
            background-color: var(--table-uneven);
            :hover {
                background-color: var(--primary-color-300);
            }
        }
    }
`;

const ArchiveIconStyle = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;

    svg {
        transition: var(--transition);
    }

    :hover svg {
        stroke: var(--icon-highlight-border);
    }

    @media (max-width: 1200px) {
        padding: 0.5rem;
    }
`;
