import { HTMLProps } from 'react';
import styled from 'styled-components';

interface NavLinkProps extends HTMLProps<HTMLAnchorElement> {
  isActive?: boolean;
}

export default function NavLink(props: NavLinkProps): JSX.Element {
  const { children, isActive = false } = props;

  return (
    <NavLinkStyles isActive={isActive}>
      {children}
    </NavLinkStyles>
  );
}

const NavLinkStyles = styled.a<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? props.theme.primary : props.theme.text)};
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  padding: 0.5rem 1rem;
  position: relative;
  text-decoration: none;
  transition: color ${(props) => props.theme.transition};

  ::after {
    background-color: ${(props) => (props.isActive ? props.theme.primary : 'transparent')};
    bottom: 0.5rem;
    content: '';
    height: 2px;
    left: 1rem;
    position: absolute;
    right: 1rem;
    transition: background-color ${(props) => props.theme.transition};
  }

  :hover {
    ::after {
      background-color: ${(props) => props.theme.primary};
    }
  }
`;
