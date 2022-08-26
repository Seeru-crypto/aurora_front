import Image from 'next/image';
import React, {ForwardedRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import data from "../../data.json"

const LandingPage = React.forwardRef(
    (_props, ref: ForwardedRef<HTMLElement>) => {
        const [greetingMessage, setGreetingMessage] = useState("");

        useEffect(() => {
            const sysTimeHour = new Date().getHours();
            switch (true){
                case (sysTimeHour < 6):
                    setGreetingMessage(data.GREETING_EVENING);
                    break;
                case (7 <= sysTimeHour && sysTimeHour <= 11 ):
                    setGreetingMessage(data.GREETING_MORNING);
                    break;
                case (12 <= sysTimeHour && sysTimeHour < 20):
                    setGreetingMessage(data.GREETING_DAY);
                    break;
                case (20 <= sysTimeHour):
                    setGreetingMessage(data.GREETING_EVENING);
                    break;
                default: setGreetingMessage("Howdy");
            }
        }, [])

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
                    <h1>{greetingMessage}</h1>
                    <h1>My name is Fred</h1>
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
