import Link from 'next/link';
import React, { ForwardedRef, useEffect, useState } from 'react';
import { RiLinkedinFill } from 'react-icons/ri';
import { VscGithubAlt } from 'react-icons/vsc';
import styled from 'styled-components';
import config from '../../config.json';
import data from '../../data.json';
import { RootState, useAppSelector } from '../../state/store';
import Footer from '../layout/Footer';
import Button, { ButtonType } from '../util/Button';
import ContactButton from './ContactButton';

const Contact = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  const isToastShown: boolean = useAppSelector((state: RootState) => state.app.isToastShown);
  const [isEmailShown, setIsEmailShown] = useState(isToastShown);
  const { CONTACT_HEADER, CONTACT_BODY } = data;
  const { EMAIL_ADDRESS, CV_DOWNLOAD_LINK, LINKEDIN_URL, GITHUB_URL } = config;

  useEffect(() => {
    if (isToastShown && !isEmailShown) setIsEmailShown(true);
  }, [isToastShown, isEmailShown]);

  return (
    <>
      <ContactStyle ref={ref} id="contact">
        <div className="contactContent">
          <h1 className="contactHeader">{CONTACT_HEADER}</h1>
          <p>{CONTACT_BODY}</p>

          <div className="contactLinks">
            <Link href={CV_DOWNLOAD_LINK} passHref>
              <Button buttonType={ButtonType.DEFAULT}>get my stuff</Button>
            </Link>
            <span>or</span>
            <ContactButton label="my email" contactEmail={EMAIL_ADDRESS} showEmail={isEmailShown} />
          </div>
        </div>

        <div className="socialIcons">
          {/* TODO: Make into a special component */}
          <IconStyle href={LINKEDIN_URL} id="linkedIn" target="_blank">
            <RiLinkedinFill />
          </IconStyle>
          <IconStyle href={GITHUB_URL} id="gitHub" target="_blank">
            <VscGithubAlt />
          </IconStyle>
        </div>

        <Footer />
      </ContactStyle>
    </>
  );
});

Contact.displayName = 'Contact display';

export default Contact;

const ContactStyle = styled.section`
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
  }
`;
