import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Moon from '../../../icons/Moon.svg';
import Sun from '../../../icons/Sun.svg';
import { RootState, useAppDispatch } from '../../../state/store';
import { ActiveTheme, changeTheme } from '../../../state/themeSlice';

export default function ThemeSelector(): JSX.Element {
  const activeTheme = useSelector((state: RootState) => state.theme.activeTheme);
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [activeRotation, setActiveRotation] = useState(0);
  const dispatch = useAppDispatch();
  const animationDuration = 1500;

  function handleOnClick() {
    if (!isAnimationActive) {
      dispatch(changeTheme());
      setIsAnimationActive(true);
      setTimeout(() => setIsAnimationActive(false), animationDuration);
      setActiveRotation(activeRotation + 180);
    }
  }

  return (
    <ThemeSelectorStyles
      animationDuration={animationDuration}
      activeTheme={activeTheme}
      activeRotation={activeRotation}
      onClick={handleOnClick}>
      <div className="rotatingIcons">
        <Sun />
        <Moon />
      </div>

      <div className="iconLabels">
        <span>{activeTheme === ActiveTheme.DAY ? 'Sun' : 'Moon'}</span>
      </div>
    </ThemeSelectorStyles>
  );
}

const ThemeSelectorStyles = styled.button<{
  activeTheme: string;
  animationDuration: number;
  activeRotation: number;
}>`
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  height: 40px;
  margin: 0 1rem;
  overflow: hidden;
  position: relative;
  width: 40px;

  .rotatingIcons {
    height: 24px;
    margin: 4px auto;
    transform: rotate(${(props) => props.activeRotation}deg);
    transform-origin: center bottom;
    transition: transform ${(props) => props.animationDuration}ms ease-out,
      opacity ${(props) => props.animationDuration}ms ease-in;
    width: 24px;

    > svg {
      display: flex;
      fill: ${(props) => props.theme.primary};
      flex-flow: column nowrap;
      transition: opacity ${(props) => props.animationDuration / 3}ms ease-out;
      position: absolute;
      top: 0;

      :first-of-type {
        opacity: ${(props) => (props.activeTheme === ActiveTheme.DAY ? '100%' : 0)};
      }

      :last-of-type {
        top: 24px;
        opacity: ${(props) => (props.activeTheme === ActiveTheme.NIGHT ? '100%' : 0)};
        transform: rotate(180deg);
        visibility: ${(props) => (props.activeRotation === 0 ? 'hidden' : 'visible')};
      }
    }
  }

  .iconLabels > span {
    bottom: 0;
    display: flex;
    flex-flow: column nowrap;
    font-size: 8px;
    font-weight: bold;
    left: 0;
    position: absolute;
    right: 0;
    text-transform: uppercase;
  }
`;
