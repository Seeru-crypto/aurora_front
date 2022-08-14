import React from 'react';
import styled from 'styled-components';

export interface ButtonInterface {
    classes?: string;
    label: string;
    onClickFunction: () => void;
}

const Button = ({ buttonData }: { buttonData: ButtonInterface }) => {
    return (
        <ButtonStyle
            className={buttonData.classes}
            onClick={() => buttonData.onClickFunction()}
        >
            {buttonData.label}
        </ButtonStyle>
    );
};

export default Button;

const ButtonStyle = styled.button`
    border-radius: 0.5rem;
    border: transparent;
    padding: 0.5rem 1rem;
    background-color: var(--primary-color);
    color: var(--button-text);
    cursor: pointer;
`;
