import React from 'react';
import styled, { keyframes } from 'styled-components';

const textRotate1 = keyframes`
  0%, 20% {
    transform: rotateX(0deg);
    opacity: 1;
  }
  30%, 70% {
    transform: rotateX(-90deg);
    opacity: 0;
  }
  80%, 100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
`;

const textRotate2 = keyframes`
  0%, 20% {
    transform: rotateX(90deg);
    opacity: 0;
  }
  30%, 70% {
    transform: rotateX(0deg);
    opacity: 1;
  }
  80%, 100% {
    transform: rotateX(90deg);
    opacity: 0;
  }
`;

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

const TextContainer = styled.div`
  position: absolute;
  inset: 0;
  top: -30px;
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    top: -10px;
  }

  @media (min-width: 1024px) {
    top: 0;
  }
`;

const Text = styled.div`
  position: absolute;
  left: 4px;
  display: flex;

  @media (min-width: 768px) {
    left: 8px;
  }

  @media (min-width: 1536px) {
    left: 16px;
  }
`;

const FirstText = styled(Text)`
  z-index: 1;
  color: blue;
`;

const SecondText = styled(Text)`
  z-index: 2;
  color: red;
`;

const CharSpan = styled.span<{ delay: number, animationType: 'rotate1' | 'rotate2' }>`
  display: inline-block;
  transform-style: preserve-3d;
  transform-origin: bottom;
  animation: ${props => props.animationType === 'rotate1' ? textRotate1 : textRotate2} 10s ease infinite 2s;
  animation-delay: ${props => props.delay}s;
`;

const produceSpans = (text: string, animationType: 'rotate1' | 'rotate2') => {
    return text.split("").map((letter, index) => (
        <CharSpan
            key={index}
            delay={index * 0.05}
            animationType={animationType}
        >
            {letter === " " ? "\u00A0" : letter}
        </CharSpan>
    ));
};

const title: React.FC = () => {
    return (
        <PositionContainer>
            <TextContainer>
                <FirstText aria-label="Software Developer">
                    {produceSpans("Software Developer", 'rotate1')}
                </FirstText>
                <SecondText aria-label="Content Creator">
                    {produceSpans("Content Creator", 'rotate2')}
                </SecondText>
            </TextContainer>
        </PositionContainer>
    );
};

export default title;