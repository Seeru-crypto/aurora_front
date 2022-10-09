import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export enum ButtonType {
  DEFAULT = 'default',
  GHOST = 'ghost',
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  isActive?: boolean;
}

const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>): JSX.Element => {
  const { buttonType = ButtonType.GHOST, children, isActive } = props;

  return (
    <ButtonStyles
      {...props}
      className={`${props.className}${isActive ? ' active' : ''}`}
      buttonType={buttonType}
      ref={ref}>
      {children}
    </ButtonStyles>
  );
});

Button.displayName = 'Button';

export default Button;

const DefaultStyles = css`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.buttonTextColor};

  > svg {
    fill: ${(props) => props.theme.primary};
    margin: 0 0.5rem 0 0;
    transition: fill ${(props) => props.theme.transition};
  }

  &.active,
  :hover {
    background-color: ${(props) => props.theme.buttonHoverBkgColor};
    border-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.buttonHoverTextColor};

    > svg {
      fill: ${(props) => props.theme.background};
    }
  }
`;

const GhostStyles = css`
  background-color: transparent;
  border-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};

  > svg {
    fill: ${(props) => props.theme.primary};
    margin: 0 0.5rem 0 0;
    transition: fill ${(props) => props.theme.transition};
  }

  &.active,
  :hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.gray.$900};

    > svg {
      fill: ${(props) => props.theme.white};
      margin: 0 0.5rem 0 0;
      transition: fill ${(props) => props.theme.transition};
    }
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
