import { HTMLProps } from 'react';
import styled from 'styled-components';
import Download from '../icons/Download.svg';

interface ResumeLinkProps extends HTMLProps<HTMLAnchorElement> {
  label: string;
}

export default function ResumeLink(props: ResumeLinkProps): JSX.Element {
  const { label } = props;

  return (
    <ResumeLinkStyles {...props}>
      <Download className="download" />
      {label}
    </ResumeLinkStyles>
  );
}

const ResumeLinkStyles = styled.a`
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  align-items: center;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
  display: flex;
  font-size: 20px;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: background-color ${(props) => props.theme.transition}, border-color ${(props) => props.theme.transition},
    color ${(props) => props.theme.transition};

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
