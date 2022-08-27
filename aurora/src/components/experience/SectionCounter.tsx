import { BsCalendarCheck } from 'react-icons/bs';
import { MdOutlineDone, MdOutlineLocationOn, MdUpdate } from 'react-icons/md';
import styled from 'styled-components';
import { RootState, useAppSelector } from '../../state/store';
export default function SectionCounter() {
    const numberOfProjects: number = useAppSelector(
        (state: RootState) => state.counter.numberOfProjects
    );

    const auroraLastUpdated: string = useAppSelector(
        (state: RootState) => state.counter.auroraLastUpdated
    );
    return (
        <SectionCounterStyle>
            <div className="card">
                <i className={'icon'}>
                    <MdOutlineDone />
                </i>
                <p>Number of projects</p>
                <h3>{numberOfProjects}</h3>
            </div>
            <div className="card">
                <i className="icon">
                    <BsCalendarCheck />
                </i>
                <p>Coding since</p>
                <h3>2016</h3>
            </div>
            <div className="card">
                <i className="icon">
                    <MdUpdate />
                </i>
                <p>Site last updated</p>
                <h3>{auroraLastUpdated}</h3>
            </div>
            <div className="card">
                <i className="icon">
                    <MdOutlineLocationOn />
                </i>
                <p>Current location</p>
                <h3>
                    Estonia, Tallinn <small>127.0.0.1</small>
                </h3>
            </div>
        </SectionCounterStyle>
    );
}

const SectionCounterStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem 0;

    .icon {
        font-size: 2rem;
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 16px;
        background-color: #444;
        color: white;
        width: 21%;
        border-radius: 1rem;
    }

    @media (max-width: 1200px) {
        border: 1px solid orange;
    }
`;
