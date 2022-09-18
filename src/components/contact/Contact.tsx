import React, { ForwardedRef, useEffect, useState } from 'react';
import { RiLinkedinFill } from 'react-icons/ri';
import { SiGoodreads } from 'react-icons/si';
import { VscGithubAlt } from 'react-icons/vsc';
import styled from 'styled-components';
import config from '../../config.json';
import data from '../../data.json';
import { changeToastValue } from '../../state/appSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../state/store';
import { Button, ButtonInterface, ExternalLink, ExternalLinkInterface } from '../util';
import ClipboardDisplayField from './ClipboardDisplayField';

const Contact = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  const isToastShown: boolean = useAppSelector((state: RootState) => state.app.isToastShown);

  const [isEmailShown, setIsEmailShown] = useState(isToastShown);

  useEffect(() => {
    if (isToastShown && !isEmailShown) setIsEmailShown(true);
  }, [isToastShown, isEmailShown]);

  const dispatch = useAppDispatch();

  const { CONTACT_HEADER, CONTACT_BODY } = data.text;
  const { EMAIL_ADDRESS, CV_DOWNLOAD_LINK, LINKEDIN_URL, GITHUB_URL, GOODREADS_URL } = config;

  const resumeLinkData: ExternalLinkInterface = {
    onClick: CV_DOWNLOAD_LINK,
    label: 'get my stuff',
    isNavbarButton: false,
  };
  const resumeButtonData: ButtonInterface = {
    label: 'my email',
    onClickFunction: () => dispatch(changeToastValue()),
    bordered: true,
  };

  return (
    <ContactStyle ref={ref} id="contact">
      <div className={'contactMain'}>
        <h1 className={'heading'}>{CONTACT_HEADER}</h1>
        <section className={'contactBody'}>{CONTACT_BODY}</section>
        <div className={'contactButtons'}>
          <ExternalLink linkData={resumeLinkData} />
          <div>or</div>
          {isEmailShown ? <ClipboardDisplayField text={EMAIL_ADDRESS} /> : <Button buttonData={resumeButtonData} />}
        </div>
      </div>
      <div className={'contactIcons'}>
        <IconStyle href={LINKEDIN_URL} id={'linkedIn'} target="_blank">
          <RiLinkedinFill />
        </IconStyle>
        <IconStyle href={GITHUB_URL} id={'gitHub'} target="_blank">
          <VscGithubAlt />
        </IconStyle>
        <IconStyle href={GOODREADS_URL} id={'goodReads'} target="_blank">
          <SiGoodreads />
        </IconStyle>
      </div>
    </ContactStyle>
  );
});

Contact.displayName = 'Contact display';

export default Contact;

const ContactStyle = styled.section`
  border: 1px solid var(--primary-color);
  width: 100%;
  display: flex;
  flex-direction: column;

  .contactMain {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30vh;
  }

  .heading {
    font-weight: bold;
  }

  .contactBody {
    max-width: 40%;
    padding: 2rem 1rem;
  }

  .contactButtons {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  .contactIcons {
    margin-top: 30vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: row;
    padding: 0.5rem;
    gap: 2rem;
  }

  @media (max-width: 1200px) {
    .contactBody {
      max-width: 80%;
    }
    .contactButtons {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0.5rem;
      gap: 1rem;
    }
    .contactIcons {
      gap: 1rem;
    }
  }
`;
const IconStyle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;

  svg {
    transition: var(--transition);
  }

  :hover svg {
    fill: var(--icon-highlight-border);
    transform: translateY(-10px);
  }

  @media (max-width: 1200px) {
    padding: 0.5rem;
  }
`;
