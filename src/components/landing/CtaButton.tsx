import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import styled from 'styled-components';

const CtaButton = (): JSX.Element => {
    const text = 'Check out my projects!';
    return (
        <CtaStyle>
            <a className="btnContainer" href={'#work'}>
                {text}
                <svg id="more-arrows">
                    <polygon
                        className="arrow-top"
                        points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
                    />
                    <polygon
                        className="arrow-middle"
                        points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
                    />
                    <polygon
                        className="arrow-bottom"
                        points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
                    />
                </svg>
            </a>
        </CtaStyle>
    );
};
export default CtaButton;

const CtaStyle = styled.div`
    padding: 0.5rem;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid var(--icon-highlight-border);
    border-radius: 1rem;
    width: 100%;

    .btnContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    #more-arrows {
        padding-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75px;
        height: 65px;

        &:hover {
            polygon {
                fill: var(--icon-highlight-border);
                transition: all 0.2s ease-out;

                &.arrow-bottom {
                    transform: translateY(-18px);
                }

                &.arrow-top {
                    transform: translateY(18px);
                }
            }
        }
    }

    polygon {
        fill: var(--icon-highlight-border);
        transition: all 0.2s ease-out;

        &.arrow-middle {
            opacity: 0.75;
        }

        &.arrow-top {
            opacity: 0.5;
        }
    }
`;
