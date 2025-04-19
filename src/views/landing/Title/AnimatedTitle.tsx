import React from 'react';
import styled from 'styled-components';
import { AnimatedSpan, Position } from './Title.styled';

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const produceSpans = (name) => {
    return name.split("").map((letter, index) => (
        <AnimatedSpan
            index={index}
            letter={letter}
            aria-hidden="true"
            key={index}
        >
            {letter}
        </AnimatedSpan>
    ));
};

const AnimatedTitle: React.FC = () => {
    return (
        <Container>
            <Position>
                <div className="text first" aria-label="Full Stack Developer">
                    {produceSpans("Full Stack Developer")}
                </div>
                <div className="text second" aria-label="Homelab Enthusiast">
                    {produceSpans("Homelab Enthusiast")}
                </div>
            </Position>
        </Container>
    );
};

export default AnimatedTitle;