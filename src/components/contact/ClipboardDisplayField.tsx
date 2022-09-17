import styled from 'styled-components';
import { changeToastValue } from '../../state/appSlice';
import { useAppDispatch } from '../../state/store';
import Button from '../util/Button';

interface ContactButtonProps {
  contactEmail: string;
  label: string;
  showEmail: boolean;
}

export default function ContactButton(props: ContactButtonProps) {
  const { contactEmail, label, showEmail } = props;
  const dispatch = useAppDispatch();
  // navigator.clipboard.writeText(contactEmail);

  return <ContactButtonStyles onClick={() => dispatch(changeToastValue())}>{label}</ContactButtonStyles>;
}

const ContactButtonStyles = styled(Button)`
  /* border-radius: 0.5rem;
  border: transparent;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary}; */

  /* border: 3px solid red !important; */
`;
