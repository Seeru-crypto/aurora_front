import { transparentize } from 'polished';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import config from '../../config.json';
import Logo from '../../icons/Logo.svg';
import { setActiveSection } from '../../state/appSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../state/store';
import ResumeLink from '../ResumeLink';
import ThemeSelector from '../ThemeSelector';
import NavLink from './NavLink';

export default function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state: RootState) => state.app.currentPage);
  const [isScrolling, setIsScrolling] = useState(false);

  function isInView(pageName: string): boolean {
    return pageName.toLowerCase() === currentPage.toLowerCase();
  }

  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset === 0 && setIsScrolling(false);
      window.pageYOffset > 0 && setIsScrolling(true);
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <HeaderStyles isScrolling={isScrolling}>
      <Logo className="logo" />
      <nav className="navigation">
        {config.NAVIGATION_PATHS.map((object) => (
          <NavLink
            href={object.key}
            key={object.value}
            isActive={isInView(object.value)}
            onClick={() => dispatch(setActiveSection(object.value))}>
            {object.value}
          </NavLink>
        ))}
      </nav>
      <div className="controls">
        <ThemeSelector />
        <ResumeLink href={config.CV_DOWNLOAD_LINK} label="Résumé" />
      </div>
    </HeaderStyles>
  );
}

export const HeaderStyles = styled.header<{ isScrolling: boolean }>`
  align-items: center;
  background-color: ${(props) => (props.isScrolling ? transparentize(0.3, props.theme.secondary) : 'transparent')};
  backdrop-filter: blur(8px);
  display: flex;
  max-height: 4.5rem;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  transition: background-color ${(props) => props.theme.transition};
  z-index: 999;

  .logo,
  .navigation,
  .controls {
    flex: 1;
  }

  .navigation {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .controls {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }
`;
