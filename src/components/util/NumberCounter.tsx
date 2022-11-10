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
  const [currentValue, setCurrentValue] = useState(0);
  // TODO: Why just keep a static boolean, if you could toggle it?
  const [isInView] = useState(true);
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

  return <span className={className}>{currentValue}</span>;
}
