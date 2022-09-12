import React from 'react';
import styled from 'styled-components';

const Tooltip = ({ message }: { message: string }): JSX.Element => {
    return <TooltipStyle>{message}</TooltipStyle>;
};
export default Tooltip;

const TooltipStyle = styled.span`
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;

    :hover {
        visibility: visible;
    }
`;
