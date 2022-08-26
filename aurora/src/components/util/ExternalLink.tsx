import React from 'react';
import styled, {css} from 'styled-components';

export interface ExternalLinkInterface {
    onClick: string;
    label: string;
    isNavbarButton: boolean;
}

export default function ExternalLink ({ linkData }: { linkData: ExternalLinkInterface }) : JSX.Element {
    const {onClick, isNavbarButton, label} = linkData;

    return (
        <ButtonStyle isNavbarButton={isNavbarButton} href={onClick}>
            {label}
        </ButtonStyle>
    );
}

const ButtonStyle = styled.a<{isNavbarButton: boolean}>`
    border-radius: 0.5rem;
    border: 1px solid var(--secondary-color);
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: var(--primary-color);
    cursor: pointer;
    opacity: 1;
    transition: 0.3s;
    :hover{
      opacity: .6;
    }

  ${(props) => props.isNavbarButton && NavLinkStyle}
`;

const NavLinkStyle = css`
  margin-left: 12px;
  font-weight: bold;
  padding: 0 1rem;
  border-color: purple;
  color: purple;
  
  :hover{
    background-color: purple;
    color: white;
  }
`