import React, { ForwardedRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { RootState, useAppSelector } from '../../state/store';
import Footer from './Footer';
import EmailField from './EmailField';
import { LABELS } from '../../data';
import { EMAIL_ADDRESS } from '../../config';
import SocialIcon from './SocialIcon';
import { icons } from './SocialIconsData';

const Contact = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  const isToastShown: boolean = useAppSelector((state: RootState) => state.app.isToastShown);
  const [isEmailShown, setIsEmailShown] = useState(isToastShown);

  useEffect(() => {
    if (isToastShown && !isEmailShown) setIsEmailShown(true);
  }, [isToastShown, isEmailShown]);

  return (
    <ContactStyle ref={ref} id='contact'>
      <div className='container'>
        <div className='contactContent'>
          <h1 className='contactHeader'>{LABELS.CONTACT_HEADER}</h1>
          <p>{LABELS.CONTACT_BODY}</p>

          <div className='contactLinks'>
            <EmailField contactEmail={EMAIL_ADDRESS} />
          </div>
        </div>

        <div className='footer-container'>
          <div className='socialIcons'>
            {icons.map(item => (
              <SocialIcon key={item.id} icon={item.icon} id={item.id} href={item.href} />
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </ContactStyle>
  );
});

const ContactStyle = styled.section`
  background-color: ${(props) => props.theme.background};
  min-height: calc(80vh - 80px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .container {
    display: flex;
    flex-flow: column wrap;

    .contactContent {
      margin-top: -25rem;
      align-items: center;
      display: flex;
      justify-content: center;
      flex: 1;
      flex-flow: column wrap;

      @media screen and (max-width: 1200px) {
        margin: 0 auto;
        max-width: 80%;
      }
    }

    .contactHeader {
      margin: 0 auto;
    }

    .contactLinks,
    .socialIcons {
      align-items: center;
      display: flex;
      justify-content: center;
    }

    .contactLinks {
      margin: 1rem auto;

      > span {
        margin: 0 1rem;
      }
    }

    .footer-container {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
`;

Contact.displayName = 'Contact display';

export default Contact;