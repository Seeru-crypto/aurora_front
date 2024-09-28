import { transparentize } from 'polished';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from '../../icons/Logo.svg';
import { setActiveSection } from '../../state/appSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../state/store';
import ResumeLink from './ResumeLink/ResumeLink';
import ThemeSelector from './ThemeSelector/ThemeSelector';
import NavLink from './NavLink';
import { CV_DOWNLOAD_LINK, NAVIGATION_PATHS } from '../../config';
import Link from 'next/link';

export default function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state: RootState) => state.app.currentPage);
  const [isScrolling, setIsScrolling] = useState(false);

  function isInView(pageName: string): boolean {
    return pageName.toLowerCase() === currentPage.toLowerCase();
  }

  useEffect(() => {
    window.onscroll = () => {
      window.scrollY === 0 && setIsScrolling(false);
      window.scrollY > 0 && setIsScrolling(true);
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <HeaderStyles isScrolling={isScrolling}>
      <Link href="/">
        <Logo className="logo" />
      </Link>
      <nav className="navigation">
        {NAVIGATION_PATHS.map((object) => (
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
        <ResumeLink href={CV_DOWNLOAD_LINK} label="Résumé" />
      </div>
    </HeaderStyles>
  );
}

export const HeaderStyles = styled.header<{ isScrolling: boolean }>`
  align-items: center;
  background-color: ${(props) =>
    props.isScrolling ? transparentize(0.3, props.theme.headerBkgColor) : 'transparent'};
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
    gap: 1rem;
  }

  .controls {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
