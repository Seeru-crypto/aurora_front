import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export enum ButtonType {
  DEFAULT = 'default',
  GHOST = 'ghost',
}

export interface ButtonProps {
  buttonType?: ButtonType;
  children: string | ReactNode;
}

export default function Button(props: ButtonProps): JSX.Element {
  const { buttonType = ButtonType.GHOST, children } = props;

  return (
    <ButtonStyles {...props} buttonType={buttonType}>
      {children}
    </ButtonStyles>
  );
}

const DefaultStyles = css`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};

  > svg {
    fill: ${(props) => props.theme.primary};
    margin: 0 0.5rem 0 0;
    transition: fill ${(props) => props.theme.transition};
  }

  :hover {
    background-color: ${(props) => props.theme.secondary};
    border-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.background};

    > svg {
      fill: ${(props) => props.theme.background};
    }
  }
`;

const GhostStyles = css`
  background-color: transparent;
  border-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};

  /* TODO: Fill in SVG as well */

  :hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
  }
`;

const ButtonStyles = styled.button<{ buttonType: ButtonType }>`
  border: 2px solid transparent;
  border-radius: ${(props) => props.theme.borderRadius};
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: background-color ${(props) => props.theme.transition}, border-color ${(props) => props.theme.transition},
    color ${(props) => props.theme.transition};
  ${(props) => (props.buttonType === ButtonType.DEFAULT ? DefaultStyles : GhostStyles)}
`;
