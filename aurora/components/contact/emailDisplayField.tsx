import React from 'react';
import styled from 'styled-components';

const EmailDisplayField = () => {
    return <EmailStyle>email@gmail.com</EmailStyle>;
};

export default EmailDisplayField;

const EmailStyle = styled.div`
    padding: 0.5rem 1rem;
    border: 1px solid black;
`;
