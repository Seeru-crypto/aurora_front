import React from 'react';
import styled from 'styled-components';
import {AnimatedSpan, Position} from "./Title.styled";

const PositionContainer = styled.div`
    position: relative;
    cursor: default;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 375px) {
        font-size: 20px;
    }

    @media (min-width: 640px) {
        font-size: 30px;
    }

    @media (min-width: 768px) {
        font-size: 36px;
    }

    @media (min-width: 1536px) {
        font-size: 66px;
        line-height: 40px;
    }
`;
const Container = styled.div`
    display: flex;
    justify-content: center;
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

const title: React.FC = () => {
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

export default title;