import { transparentize } from 'polished';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from '../../icons/Logo.svg';
import { setActiveSection, setIsFilterActive } from '../../state/appSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../state/store';
import ResumeLink from '../ResumeLink';
import ThemeSelector from '../ThemeSelector';
import NavLink from './NavLink';
import { CV_DOWNLOAD_LINK, NAVIGATION_PATHS } from '../../config';
import { AiOutlineFilter } from 'react-icons/ai';

export default function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state: RootState) => state.app.currentPage);
  const [isScrolling, setIsScrolling] = useState(false);
  const isFilterActive = useAppSelector((state) => state.app.isFilterActive);

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

  function filterClick() {
    dispatch(setIsFilterActive(!isFilterActive));
  }

  return (
    <HeaderStyles isScrolling={isScrolling}>
      <span className="leftSide">
        <Logo className="logo" />
        <AiOutlineFilter onClick={() => filterClick()} className="filter" />
      </span>
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
    props.isScrolling ? transparentize(0.3, props.theme.primaryColor.$200) : 'transparent'};
  backdrop-filter: blur(8px);
  display: flex;
  max-height: 4.5rem;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  transition: background-color ${(props) => props.theme.transition};
  z-index: 999;

  .filter {
    justify-content: start;
    font-size: 2.5rem;
    border: 1px solid gray;
    border-radius: 0.35rem;
    cursor: pointer;
  }

  .leftSide {
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    align-items: center;
  }

  .leftSide,
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
