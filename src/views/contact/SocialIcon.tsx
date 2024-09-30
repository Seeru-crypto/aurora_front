import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export interface ISocialIcon  extends HTMLAttributes<HTMLButtonElement>  {
  href: string;
  id: string;
  icon: ReactNode
}

const SocialIcon = (props: ISocialIcon) =>  {

  return (
    <IconStyle href={props.href} id={props.id} target='_blank'>
      {props.icon}
    </IconStyle>
  )
}

const IconStyle = styled.a`
  align-items: center;
  display: flex;
  font-size: 2rem;
  justify-content: center;
  margin: 0 0.5rem;

  svg {
    fill: ${(props) => props.theme.secondary};
    transition: fill ${(props) => props.theme.transition}, transform ${(props) => props.theme.transition};
  }

  :hover svg {
    fill: ${(props) => props.theme.primary};

    transform: translate3d(0, -15%, 0);
  }
`;


export default SocialIcon