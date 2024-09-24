import styled from 'styled-components';
import { changeToastValue } from '../../state/appSlice';
import { useAppDispatch } from '../../state/store';
import {FaClipboard} from "react-icons/fa";

interface IEmailField {
  contactEmail: string;
}

export default function EmailField(props: IEmailField) {
  const { contactEmail } = props;
  const dispatch = useAppDispatch();
  
  function saveToClipboard() {
      navigator.clipboard.writeText(contactEmail);
      dispatch(changeToastValue());
  }

    return (
        <EmailFieldStyle>
            <span className="email-text">email@gmail.com</span>
            <FaClipboard onClick={saveToClipboard} className="icon" />
        </EmailFieldStyle>
    )
}

const EmailFieldStyle = styled.div`
  color: ${(props) => props.theme.primary};
  border-color: ${(props) => props.theme.primary};
  border: 1px solid;

  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .email-text {
    padding: 8px 18px;

  }

  .icon {
    border-radius: .5rem;
    padding: 10px;
    height: 100%;
    width: 100%;
    cursor: pointer;
    background-color: ${(props) => props.theme.clipboardBkgColor};
    color: ${(props) => props.theme.buttonTextColor};

    :hover {
      color: ${(props) => props.theme.buttonTextColor};
      background-color: ${(props) => props.theme.clipboardHoverBkgColor};
    }
  }
`;
