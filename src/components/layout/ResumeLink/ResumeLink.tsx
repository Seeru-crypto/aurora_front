import { HTMLProps } from 'react';
import Download from '../../../icons/Download.svg';
import styled from 'styled-components';

interface ResumeLinkProps extends HTMLProps<HTMLAnchorElement> {
  label: string;
}

export default function ResumeLink(props: ResumeLinkProps): JSX.Element {

  return  (
    <TimelineStyles href={props.href} download>
        <Download className="download"/>
        {props.label}
    </TimelineStyles>
  )
}

const TimelineStyles = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: .5rem;

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.buttonTextColor};
  padding: 1rem;
  border-radius: 1rem;

  > svg {
    fill: ${(props) => props.theme.buttonTextColor};
    margin: 0 0.5rem 0 0;
    transition: fill ${(props) => props.theme.transition};
  }
`;