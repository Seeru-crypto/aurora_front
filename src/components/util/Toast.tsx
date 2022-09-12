import React from 'react';
import styled from 'styled-components';

const Toast = () => {
    return (
        <StyledToast>
            <span className="toastIcon">i</span>
            <span>Saved to clipboard!</span>
        </StyledToast>
    );
};

const StyledToast = styled.div`
    position: fixed;
    top: 4rem;
    right: 1rem;
    z-index: 9999;
    display: inline-flex;
    padding: 10px 20px;
    background: var(--primary-color);
    color: var(--button-text);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 15px;

    .toastIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        background: #2196f3;
        color: #fff;
        border-radius: 50%;
    }
`;
export default Toast;
