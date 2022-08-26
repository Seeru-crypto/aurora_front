import React, {ForwardedRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import config from '../../config.json';
import data from '../../data.json';
import {changeToastValue} from '../../state/appSlice';
import {RootState, useAppDispatch, useAppSelector} from '../../state/store';
import {Button, ButtonInterface, ExternalLink, ExternalLinkInterface,} from '../util';
import ClipboardDisplayField from './ClipboardDisplayField';
import ContactIcon from './ContactIcon';

export interface ContactIconInterface {
    name: string;
    icon: string;
    href: string;
}

const Contact = React.forwardRef(
    (_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
        const icons: ContactIconInterface[] = config.ICONS;
        const resumeLinkData: ExternalLinkInterface = {
            onClick: config.CV_DOWNLOAD_LINK,
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

        const {CONTACT_HEADER, CONTACT_BODY} = data;
        const {EMAIL_ADDRESS} = config;

        return (
            <ContactStyle ref={ref} id="contact">
                <div className={'contactMain'}>
                    <h1 className={'heading'}>{CONTACT_HEADER}</h1>
                    <section className={'contactText'}>
                        {CONTACT_BODY}
                    </section>
                    <div className={'contactButtons'}>
                        <ExternalLink linkData={resumeLinkData} />
                        <div>or</div>
                        {isEmailShown ? (
                            <ClipboardDisplayField
                                text={EMAIL_ADDRESS}
                            />
                        ) : (
                            <Button buttonData={resumeButtonData} />
                        )}
                    </div>
                </div>
                <div className={'contactIcons'}>
                    {icons.map((icon) => (
                        <ContactIcon key={icon.name} icon={icon} />
                    ))}
                </div>
            </ContactStyle>
        );
    }
);

Contact.displayName = 'Contact display';

export default Contact;

const ContactStyle = styled.section`
    border: 1px solid purple;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .contactMain {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 50vh;
    }

    .heading {
        font-weight: bold;
    }

    .contactText {
        max-width: 60%;
        padding: 1rem;
    }

    .contactButtons {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }

    .contactIcons {
        margin-top: 25vh;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        flex-direction: row;
        padding: 0.5rem;
        gap: 0.5rem;
    }
`;
