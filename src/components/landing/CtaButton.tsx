import React from 'react';
import styled from 'styled-components';

const CtaButton = (): JSX.Element => {
    const text = 'Check out my projects!';
    return <CtaStyle>{text}</CtaStyle>;
};
export default CtaButton;

const CtaStyle = styled.div`
    border: 1px solid aqua;
`;
