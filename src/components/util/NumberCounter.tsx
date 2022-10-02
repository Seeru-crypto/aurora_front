import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const NumberCounter = ({ numberValue }: any) => {
  const [currentValue, setCurrentValue] = useState(0);

  // TODO: this should only run when user is in view and only once!
  function animateValue(start: number, end: number, duration: number) {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCurrentValue(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  useEffect(() => {
    animateValue(0, numberValue, 1500);
  }, [numberValue]);

  return <CounterStyle>{currentValue}</CounterStyle>;
};

export default NumberCounter;

const CounterStyle = styled.div`
  display: inherits;
  font-size: inherits;
  margin-block-start: inherits;
  margin-block-end: inherits;
  margin-inline-start: inherits;
  margin-inline-end: inherits;
  font-weight: inherits;
`;
