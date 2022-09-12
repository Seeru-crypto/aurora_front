import React from 'react';
import styled from 'styled-components';

export interface ExternalLinkInterface {
    classes?: string;
    onClick: string;
    label: string;
}

const ExternalLink = ({ linkData }: { linkData: ExternalLinkInterface }) => {
    return (
        <ButtonStyle className={linkData.classes} href={linkData.onClick}>
            {linkData.label}
        </ButtonStyle>
    );
};

export default ExternalLink;

const ButtonStyle = styled.a`
    border-radius: 0.5rem;
    border: transparent;
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 1px solid gray;
    color: var(--primary-color);
    cursor: pointer;
`;
