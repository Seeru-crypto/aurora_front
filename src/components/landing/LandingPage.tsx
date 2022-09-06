import Image from 'next/image';
import React, {ForwardedRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import data from "../../data.json"

const LandingPage = React.forwardRef(
    (_props, ref: ForwardedRef<HTMLElement>) => {
        const [greetingMessage, setGreetingMessage] = useState("");
        const {GREETING_MORNING, GREETING_DAY, GREETING_EVENING, LANDING_HERO_TEXT} = data;

        useEffect(() => {
            const sysTimeHour = new Date().getHours();
            switch (true){
                case (sysTimeHour < 6):
                    setGreetingMessage(GREETING_EVENING);
                    break;
                case (7 <= sysTimeHour && sysTimeHour <= 11 ):
                    setGreetingMessage(GREETING_MORNING);
                    break;
                case (12 <= sysTimeHour && sysTimeHour < 20):
                    setGreetingMessage(GREETING_DAY);
                    break;
                case (20 <= sysTimeHour):
                    setGreetingMessage(GREETING_EVENING);
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
                    <h1>{greetingMessage} My name is Fred</h1>
                    <p>{LANDING_HERO_TEXT}</p>
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
