import Image from 'next/image';
import React, { ForwardedRef } from 'react';
import styled from 'styled-components';

const LandingPage = React.forwardRef(
    (_props, ref: ForwardedRef<HTMLElement>) => {
        return (
            <LandingStyle id="home" ref={ref} className={'container'}>
                <div className={'right'}>
                    <Image
                        src="/resources/Creeper2.jpg"
                        width={500}
                        height={400}
                        alt="no-creep!"
                    />
                </div>

                <div className={'left'}>
                    <h1>Hi My name is Fred</h1>
                    <p>I do stuff for the interwebz</p>
                </div>
            </LandingStyle>
        );
    }
);

LandingPage.displayName = 'landing page';

export default LandingPage;

const LandingStyle = styled.section`
    padding-top: 10px;
    display: flex;
    flex-direction: row-reverse;
    height: 100vh;
    width: 95vw;

    .right {
        border: 1px solid green;
        width: 45%;
    }

    .left {
        border: 1px solid blue;
        width: 45%;
    }
`;
