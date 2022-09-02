import React, { ForwardedRef, useEffect, useState } from 'react';
import { RiLinkedinFill } from 'react-icons/Ri';
import { VscGithubAlt } from 'react-icons/Vsc';
import styled from 'styled-components';
import config from '../../config.json';
import data from '../../data.json';
import { changeToastValue } from '../../state/appSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../state/store';
import {
    Button,
    ButtonInterface,
    ExternalLink,
    ExternalLinkInterface,
} from '../util';
import ClipboardDisplayField from './ClipboardDisplayField';

const Contact = React.forwardRef(
    (_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
        const { CV_DOWNLOAD_LINK } = config;
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

        const isToastShown: boolean = useAppSelector(
            (state: RootState) => state.counter.isToastShown
        );

        const [isEmailShown, setIsEmailShown] = useState(isToastShown);

        useEffect(() => {
            if (isToastShown && !isEmailShown) setIsEmailShown(true);
        }, [isToastShown]);

        const dispatch = useAppDispatch();

        const { CONTACT_HEADER, CONTACT_BODY } = data;
        const { EMAIL_ADDRESS } = config;

        return (
            <ContactStyle ref={ref} id="contact">
                <div className={'contactMain'}>
                    <h1 className={'heading'}>{CONTACT_HEADER}</h1>
                    <section className={'contactBody'}>{CONTACT_BODY}</section>
                    <div className={'contactButtons'}>
                        <ExternalLink linkData={resumeLinkData} />
                        <div>or</div>
                        {isEmailShown ? (
                            <ClipboardDisplayField text={EMAIL_ADDRESS} />
                        ) : (
                            <Button buttonData={resumeButtonData} />
                        )}
                    </div>
                </div>
                <div className={'contactIcons'}>
                    <IconStyle
                        href={'https://www.linkedin.com/in/fred-oja-8749b1182/'}
                        id={'linkedIn'}
                        target="_blank"
                    >
                        <RiLinkedinFill />
                    </IconStyle>
                    <IconStyle
                        href={'https://github.com/Seeru-crypto'}
                        id={'gitHub'}
                        target="_blank"
                    >
                        <VscGithubAlt />
                    </IconStyle>
                </div>
            </ContactStyle>
        );
    }
);

Contact.displayName = 'Contact display';

export default Contact;

const ContactStyle = styled.section`
    border: 1px solid purple;
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
    border: 1px solid orange;
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
    .contactIcons{
      gap: 1rem;
    }
  }`;
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
        fill: purple;
        transform: translateY(-10px);
    }
  
  @media(max-width: 1200px){
    padding: .5rem;
    border: 1px solid var(--primary-color);
    border-radius: 1rem;
  }
`;
