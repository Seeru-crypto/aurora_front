import styled from 'styled-components';
import { changeToastValue } from '../../state/appSlice';
import { useAppDispatch } from '../../state/store';
import Button from '../../components/util/Button';

interface ContactButtonProps {
  contactEmail: string;
  label: string;
  showEmail: boolean;
}

export default function ContactButton(props: ContactButtonProps) {
  const { contactEmail, label, showEmail } = props;
  const dispatch = useAppDispatch();

  return (
    <ContactButtonStyles
      isActive={showEmail}
      showEmail={showEmail}
      onClick={() => {
        navigator.clipboard.writeText(contactEmail);
        dispatch(changeToastValue());
      }}>
      {showEmail ? contactEmail : label}
    </ContactButtonStyles>
  );
}

const ContactButtonStyles = styled(Button)<{ showEmail: boolean }>`
  cursor: ${(props) => (props.showEmail ? 'default' : 'pointer')};
`;
