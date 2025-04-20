import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export enum AnimatedButtonType {
  ANIMATED_CREATE = 'create',
  ANIMATED_DELETE = 'delete',
  ANIMATED_CTA = 'cta'
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  buttonType?: AnimatedButtonType;
  isActive?: boolean;
}

const AnimatedButton = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>): JSX.Element => {
  const { buttonType = AnimatedButtonType.ANIMATED_CREATE, children, isActive } = props;

  return (
    <BaseStyle
      {...props}
      className={`${props.className} ${isActive && ' active'}`}
      buttonType={buttonType}
      ref={ref}>
      {children}
    </BaseStyle>
  );
});

AnimatedButton.displayName = 'Animated Button';

export default AnimatedButton;

const CreateStyle = css`
        background: white;
        background: linear-gradient(315deg, white 0%, white 50%, #57a879 50%, #57a879 100%);
        color: #57a879;
        background-size: 250% 250%;
        background-position: bottom right;
        border-color: #57a879;

`;

const DeleteStyle = css`
  background: white;
  background: linear-gradient(315deg, white 0%, white 50%, #c8373c 50%, #c8373c 100%);
  color: #c8373c;
  background-size: 250% 250%;
  background-position: bottom right;
  border-color: #c8373c;
`;

const CtaStyle = css`
  background: ${(props) => `linear-gradient(315deg,
  ${props.theme.ctaButtonBkg} 0%,
  ${props.theme.ctaButtonBkg} 50%,
  ${props.theme.ctaButtonBkgAlt} 50%,
  ${props.theme.ctaButtonBkgAlt} 100%)`};

  color: ${(props) => props.theme.ctaButtonColor};
  background-size: 250% 250%;
  background-position: bottom right;

  border: 2px solid ${(props) => props.theme.ctaButtonBkg};;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
  margin: -2rem 0 2rem 0;
  padding: 1rem 2rem;
  color ${(props) => props.theme.transition};

  &:hover {
    color: ${(props) => props.theme.ctaButtonBkg};
    border-color: ${(props) => props.theme.ctaButtonBkg};
  }
`;

const BaseStyle = styled.button<{ buttonType: AnimatedButtonType }>`
  background: white;
  background: linear-gradient(315deg, white 0%, white 50%, #560bad 50%, #560bad 100%);
  background-size: 250% 250%;
  color: #560bad;
  font-weight: bold;
  font-size: 1rem;
  border: 2px solid #560bad;
  background-position: bottom right;
  transition: all 0.8s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  
  border-radius: ${(props) => props.theme.borderRadius};
  align-items: center;
  display: flex;
  padding: 0.5rem 1rem;
  text-decoration: none;
    color ${(props) => props.theme.transition};

  &:hover {
    background-position: top left;
    color: white;
  }

  &:active {
    transform: scale(0.95); /* Slight scale down when clicked */
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3); /* Inner shadow on click */
  }

  /* Create the ripple effect with pseudo-element */
  &::after {
    content: "";
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    opacity: 0;
    transform: scale(0);
    top: var(--y, 0);
    left: var(--x, 0);
    pointer-events: none;
    transform-origin: center;
    transition: transform 0.5s, opacity 0.5s;
    z-index: -1;
  }

  &:active::after {
    transform: scale(10);
    opacity: 1;
    transition: 0s;
  }
  ${(props) => {
    switch (props.buttonType) {
      case AnimatedButtonType.ANIMATED_CREATE: return CreateStyle
      case AnimatedButtonType.ANIMATED_DELETE: return DeleteStyle
      case AnimatedButtonType.ANIMATED_CTA: return CtaStyle
    }
  }}
`;