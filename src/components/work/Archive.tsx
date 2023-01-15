import { FiExternalLink } from 'react-icons/fi';
import styled from 'styled-components';
import { ProjectInterface } from '../../lib/load-data';
import { GITHUB_URL } from '../../config';

export default function Archive({ projects }: { projects: ProjectInterface[] }) {
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
            <th>Links</th>
          </tr>
          {projects.map((project, index) => (
            <tr className={`tableRow ${index % 2 === 0 ? 'even' : 'unEven'}`} key={index}>
              <td className="tableContent">{getYear(project)}</td>
              <td className="tableContent">
                {project.project_name} <div className="projectType"> {project.project_type} </div>
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
                    rel="noopener noreferrer">
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
      background-color: ${(props) => props.theme.archiveTableHeaderBkgColor};
      color: ${(props) => props.theme.textColor};

      th {
        padding: 0.5rem;
      }
    }

    .even,
    .unEven {
      transition: background-color ${(props) => props.theme.transition};

      :hover {
        background-color: ${(props) => props.theme.arhiveTableHoverBkgColor};
        color: ${(props) => props.theme.arhiveTableHoverColor};

        .projectType {
          color: ${(props) => props.theme.arhiveTableHoverColor};
        }
      }
    }

    .even {
      background-color: ${(props) => props.theme.secondary};
    }

    .unEven {
      background-color: ${(props) => props.theme.white};
    }

    .projectType {
      font-size: 0.7rem;
      color: ${(props) => props.theme.detailTextColor};
    }
  }
`;

// TODO: Match up with Contact
const ArchiveIconStyle = styled.a`
  align-items: center;
  display: flex;
  font-size: 2rem;
  justify-content: center;
  margin: 0 0.5rem;

  svg {
    fill: transparent;
    transition: fill ${(props) => props.theme.transition}, transform ${(props) => props.theme.transition};
  }

  :hover svg {
    stroke: ${(props) => props.theme.secondary};
    transform: translate3d(0, -15%, 0);
  }
`;
