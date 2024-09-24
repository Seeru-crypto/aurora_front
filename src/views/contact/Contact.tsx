import Link from 'next/link';
import React, { ForwardedRef, useEffect, useState } from 'react';
import { RiLinkedinFill } from 'react-icons/ri';
import { SiGoodreads } from 'react-icons/si';
import { VscGithubAlt } from 'react-icons/vsc';
import styled from 'styled-components';
import { RootState, useAppSelector } from '../../state/store';
import Footer from '../../components/layout/footer';
import Button, { ButtonType } from '../../components/util/Button';
import ContactButton from './ContactButton';
import { LABELS } from '../../data';
import { CV_DOWNLOAD_LINK, EMAIL_ADDRESS, GITHUB_URL, GOODREADS_URL, LINKEDIN_URL } from '../../config';

const Contact = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  const isToastShown: boolean = useAppSelector((state: RootState) => state.app.isToastShown);
  const [isEmailShown, setIsEmailShown] = useState(isToastShown);

  useEffect(() => {
    if (isToastShown && !isEmailShown) setIsEmailShown(true);
  }, [isToastShown, isEmailShown]);

  return (
    <>
      <ContactStyle ref={ref} id="contact">
        <div className="contactContent">
          <h1 className="contactHeader">{LABELS.CONTACT_HEADER}</h1>
          <p>{LABELS.CONTACT_BODY}</p>

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
          <IconStyle href={GOODREADS_URL} id={'goodReads'} target="_blank">
            <SiGoodreads />
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
`;
