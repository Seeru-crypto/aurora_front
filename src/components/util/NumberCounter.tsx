import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { setIsInitialHeroCounterAnimation } from '../../state/appSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../state/store';

const NumberCounter = ({ numberValue }: any) => {
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
      animateValue(0, numberValue, 1500);
      dispatch(setIsInitialHeroCounterAnimation());
    }
  }, [numberValue, isInView, currentPage, isInitialAnimation, dispatch]);

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
