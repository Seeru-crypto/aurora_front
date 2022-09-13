import styled, { css } from "styled-components";

export interface ExternalLinkInterface {
  onClick: string;
  label: string;
  isNavbarButton: boolean;
}

export default function ExternalLink({
  linkData,
}: {
  linkData: ExternalLinkInterface;
}): JSX.Element {
  const { onClick, isNavbarButton, label } = linkData;

  return (
    <ButtonStyle isNavbarButton={isNavbarButton} href={onClick}>
      {label}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.a<{ isNavbarButton: boolean }>`
  border-radius: 0.5rem;
  font-size: 1rem;
  border: 1px solid var(--secondary-color);
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: var(--primary-color);
  cursor: pointer;
  text-decoration: none;
  transition: var(--transition);

  :hover {
    color: var(--button-text);
    background-color: var(--btn-hover-bkg);
  }

  ${(props) => props.isNavbarButton && NavLinkStyle}
`;

const NavLinkStyle = css`
  margin-left: 12px;
  font-weight: bold;
  padding: 0 1rem;
  border-color: var(--nav-main-btn-color);
  color: var(--nav-main-btn-color);

  :hover {
    background-color: var(--btn-hover-bkg);
    color: var(--button-text);
  }
`;
