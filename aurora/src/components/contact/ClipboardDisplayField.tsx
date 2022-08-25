import React from 'react';
import styled from 'styled-components';

const ClipboardDisplayField = ({text} : {text:string}) => {
    navigator.clipboard.writeText(text);
    return <EmailStyle>{text}</EmailStyle>;
};

export default ClipboardDisplayField;

const EmailStyle = styled.div`
    border-radius: 0.5rem;
    border: transparent;
    padding: 0.5rem 1rem;
    background-color: var(--primary-color);
    color: var(--button-text);
`;
