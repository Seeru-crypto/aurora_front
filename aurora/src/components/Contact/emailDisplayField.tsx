import React from 'react';
import styled from 'styled-components';

const emailAddress = 'email@gmail.com';
const EmailDisplayField = () => {
    navigator.clipboard.writeText(emailAddress);

    return <EmailStyle>{emailAddress}</EmailStyle>;
};

export default EmailDisplayField;

const EmailStyle = styled.div`
    border-radius: 0.5rem;
    border: transparent;
    padding: 0.5rem 1rem;
    background-color: var(--primary-color);
    color: var(--button-text);

    padding: 0.5rem 1rem;
`;
