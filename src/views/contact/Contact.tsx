import React, { ForwardedRef, useEffect, useState } from 'react';
import { RiLinkedinFill } from 'react-icons/ri';
import { SiGoodreads } from 'react-icons/si';
import { VscGithubAlt } from 'react-icons/vsc';
import styled from 'styled-components';
import { RootState, useAppSelector } from '../../state/store';
import Footer from '../../components/layout/footer';
import EmailField from './EmailField';
import { LABELS } from '../../data';
import { EMAIL_ADDRESS, GITHUB_URL, GOODREADS_URL, LINKEDIN_URL } from '../../config';

const Contact = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  const isToastShown: boolean = useAppSelector((state: RootState) => state.app.isToastShown);
  const [isEmailShown, setIsEmailShown] = useState(isToastShown);

  useEffect(() => {
    if (isToastShown && !isEmailShown) setIsEmailShown(true);
  }, [isToastShown, isEmailShown]);

  return (
    <ContactStyle ref={ref} id='contact'>
      <div className='custom-shape-divider-top-1727523569'>
        <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='shape-fill'></path>
        </svg>
      </div>

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
            <IconStyle href={LINKEDIN_URL} id='linkedIn' target='_blank'>
              <RiLinkedinFill />
            </IconStyle>
            <IconStyle href={GITHUB_URL} id='gitHub' target='_blank'>
              <VscGithubAlt />
            </IconStyle>
            <IconStyle href={GOODREADS_URL} id={'goodReads'} target='_blank'>
              <SiGoodreads />
            </IconStyle>
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
  

  .custom-shape-divider-top-1727523569 {
    margin-bottom: 20vh
  }

  .custom-shape-divider-top-1727523569 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 84px;
  }

  .custom-shape-divider-top-1727523569 .shape-fill {
    fill: ${(props) => props.theme.backgroundAlternative};
  }

  .container {
    display: flex;
    flex-flow: column wrap;

    .contactContent {
      align-items: center;
      display: flex;
      justify-content: center;
      flex: 1;
      flex-flow: column wrap;

      /* TODO: Make dynamic */
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

const IconStyle = styled.a`
  align-items: center;
  display: flex;
  font-size: 2rem;
  justify-content: center;
  margin: 0 0.5rem;

  svg {
    fill: ${(props) => props.theme.secondary};
    transition: fill ${(props) => props.theme.transition}, transform ${(props) => props.theme.transition};
  }

  :hover svg {
    fill: ${(props) => props.theme.primary};

    transform: translate3d(0, -15%, 0);
  }
`;

Contact.displayName = 'Contact display';

export default Contact;