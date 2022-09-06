import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import { decrement, increment } from '../../state/appSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../state/store';
export interface AboutInterface {
    main_text: string[];
    main_stack: string[];
    location: string;
    resume_url: string;
    linkedIn__url: string;
    contact_email: string;
}
const About = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>) => {
    const activeCount = useAppSelector(
        (state: RootState) => state.counter.value
    );
    const dispatch = useAppDispatch();

    return (
        <AboutStyle id="about" ref={ref}>
            <h1>About</h1>
            <p>Counter:&nbsp;{activeCount}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </AboutStyle>
    );
});

About.displayName = 'about display';

export default About;

const AboutStyle = styled.section`
    height: 100vh;
    border: 1px solid pink;
`;
