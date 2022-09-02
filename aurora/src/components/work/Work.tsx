import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import { ProjectInterface, WorkProps } from '../../lib/load-data';
import Archive from './Archive';
import Card from './Card';

const Work = React.forwardRef(
    (
        { workProps }: { workProps: WorkProps },
        ref: ForwardedRef<HTMLElement>
    ) => {
        const showcaseList: ProjectInterface[] = workProps.projects.filter(
            (project) => project.showcase
        );

        return (
            <WorkStyle ref={ref} id="work">
                <h1>All projects</h1>
                <div className={'workCards'}>
                    {showcaseList.map((project, index) => (
                        <Card
                            key={index}
                            project={project}
                            techTypes={workProps.techTypes}
                        />
                    ))}
                </div>
                <Archive
                    projects={workProps.projects.filter(
                        (project) => !project.showcase
                    )}
                />
            </WorkStyle>
        );
    }
);

Work.displayName = 'Work';

export default Work;

const WorkStyle = styled.section`
    border: 1px solid gray;
    transition: linear 0.25s;
    padding: 1rem;

    .workCards {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: flex-start;
    }
`;
