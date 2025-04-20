import React from 'react';
import styled from 'styled-components';
import { Position } from './Title.styled';

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const produceSpans = (name: string) => {
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

const AnimatedSpan = styled.span<{index: number, letter: string }>`
  transition: 0.5s;
  animation-delay: ${(props) => props.index * 0.05}s !important;
  padding: ${(props) => (props.letter === " " ? "0.325rem" : null)};
`;