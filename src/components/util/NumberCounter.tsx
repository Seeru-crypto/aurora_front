import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { setIsInitialHeroCounterAnimation } from '../../state/appSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../state/store';

const NumberCounter = ({ startNumberValue, endNumberValue, duration }: { startNumberValue: number, endNumberValue:  number, duration: number }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const isInView = true;
  const currentPage = useAppSelector<string>((state: RootState) => state.app.currentPage);

  const isInitialAnimation = useAppSelector<boolean>((state: RootState) => state.app.isInitialHeroCounterAnimation);
  const dispatch = useAppDispatch();

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
    if (currentPage === 'experience' && isInitialAnimation) {
      animateValue(startNumberValue, endNumberValue, duration);
      dispatch(setIsInitialHeroCounterAnimation());
    }
  }, [startNumberValue, endNumberValue, duration, isInView, currentPage, isInitialAnimation, dispatch]);

  return <CounterStyle>{currentValue}</CounterStyle>;
};

export default NumberCounter;

const CounterStyle = styled.div`
  display: inherit;
  font-size: inherit;
  margin-block-start: inherit;
  margin-block-end: inherit;
  margin-inline-start: inherit;
  margin-inline-end: inherit;
  font-weight: inherit;
`;
