import { HTMLProps } from 'react';
import Download from '../icons/Download.svg';
import Button from './util/Button';

interface ResumeLinkProps extends HTMLProps<HTMLAnchorElement> {
  label: string;
}

export default function ResumeLink(props: ResumeLinkProps): JSX.Element {
  const { label } = props;

  return (
    <Button>
      <Download className="download" />
      {label}
    </Button>
  );
}
