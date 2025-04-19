import React, { ForwardedRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import CtaButton from './CtaButton';
import { LABELS } from '../../data';
import Title from './Title/Title';
import AnimatedButton, { AnimatedButtonType } from '../../components/AnimatedButton';
import Button, { ButtonType } from '../../components/Button';

const LandingPage = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>) => {
  const [greetingMessage, setGreetingMessage] = useState('');
  const { GREETING_MORNING, GREETING_DAY, GREETING_MAIN_BODY, GREETING_EVENING, LANDING_HERO_TEXT, GREETING_DEFAULT } =
    LABELS;

  useEffect(() => {
    const sysTimeHour = new Date().getHours();
    switch (true) {
      case sysTimeHour < 6:
        setGreetingMessage(GREETING_EVENING);
        break;
      case 7 <= sysTimeHour && sysTimeHour <= 11:
        setGreetingMessage(GREETING_MORNING);
        break;
      case 12 <= sysTimeHour && sysTimeHour < 20:
        setGreetingMessage(GREETING_DAY);
        break;
      case 20 <= sysTimeHour:
        setGreetingMessage(GREETING_EVENING);
        break;
      default:
        setGreetingMessage(GREETING_DEFAULT);
    }
  }, [GREETING_EVENING, GREETING_MORNING, GREETING_DAY, GREETING_DEFAULT]);

  return (
    <LandingStyle id='landing' ref={ref} className='container'>
      <div className='hero'>
        <h1>
          {greetingMessage}&nbsp;
          {GREETING_MAIN_BODY}
        </h1>
        <p><span className="test">{LANDING_HERO_TEXT} <Title /></span> </p>
      </div>
      <CtaButton />
    </LandingStyle>
  );
});

LandingPage.displayName = 'landing main component';

export default LandingPage;

const LandingStyle = styled.section`
  align-items: center;
  display: flex;
  flex-flow: column;

  padding: 0 1rem;

  .hero {
    display: flex;
    flex-flow: column wrap;
    flex-grow: 1;
    justify-content: center;
    color: ${(props) => props.theme.textColor};
  }
  
  .test {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }

  @media screen and (min-width: ${(props) => props.theme.viewSizesMin.$screenXs}) and (max-width: ${(props) => props.theme.viewSizesMin.$screenSm}) {
    .hero {
      padding-top: 2rem;
      margin: 1rem;
      justify-content: flex-start;
    }

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
