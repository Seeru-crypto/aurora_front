import { useEffect, useState } from 'react';
import { setIsInitialHeroCounterAnimation } from '../../state/appSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../state/store';

type NumberCounterProps = {
  className?: string;
  startNumberValue: number;
  endNumberValue: number;
  duration: number;
};

export default function NumberCounter(props: NumberCounterProps): JSX.Element {
  const { startNumberValue, endNumberValue, duration, className } = props;
  const isAnimationEnabled: boolean = false;
  const [currentValue, setCurrentValue] = useState(0);
  const currentPage = useAppSelector<string>((state: RootState) => state.app.currentPage);
  const isInitialAnimation = useAppSelector<boolean>((state: RootState) => state.app.isInitialHeroCounterAnimation);
  const dispatch = useAppDispatch();

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
    if (currentPage === 'experience' && isInitialAnimation && isAnimationEnabled) {
      animateValue(startNumberValue, endNumberValue, duration);
      dispatch(setIsInitialHeroCounterAnimation());
    }
    else if (!isAnimationEnabled) {
      setCurrentValue(endNumberValue);
    }
  }, [startNumberValue, endNumberValue, duration, currentPage, isInitialAnimation, dispatch]);

  return <span className={className}>{currentValue}</span>;
}
