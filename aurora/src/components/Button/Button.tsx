import styled, { css } from "styled-components";

export enum ButtonVersion {
  ACTION = "action",
  HEADER = "header",
  DEFAULT = "default",
}

export interface ButtonProps {
  label: string;
  selected: boolean;
  version?: ButtonVersion;
}

export default function Button(props: ButtonProps): JSX.Element {
  const { label = ButtonVersion.DEFAULT } = props;

  return <ButtonStyles>{label}</ButtonStyles>;
}

// TODO: Some bug here, cannot pass 'ButtonProps'
const ButtonStyles = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 1.2em;
  padding: 0.5rem 1.5rem;
  position: relative;
  transition: ${(props) => props.theme.transition} color,
    ${(props) => props.theme.transition} background-color;

  /* ${(props) => props.version === ButtonVersion.ACTION && ActionStyles}
  ${(props) => props.selected && HeaderStyles} */
`;

const HeaderStyles = css`
  color: red;

  ::after {
    background-color: transparent;
    bottom: 0.5rem;
    content: "";
    height: 2px;
    left: 1.25rem;
    position: absolute;
    transition: ${(props) => props.theme.transition} background-color;
    right: 1.25rem;
  }

  :hover {
    ::after {
      background-color: ${(props) => props.theme.colors.button};
    }
  }
`;

const ActionStyles = css`
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.button};
  color: ${(props) => props.theme.colors.button};

  :hover {
    background-color: ${(props) => props.theme.colors.button};
    color: ${(props) => props.theme.colors.buttonText};
  }
`;
