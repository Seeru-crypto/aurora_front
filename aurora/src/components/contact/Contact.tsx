import { useEffect, useState } from 'react';
import config from '../../config.json';
import { changeToastValue } from '../../state/appSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../state/store';
import styles from '../../styles/Contact.module.css';
import Button, { ButtonInterface } from '../util/Button';
import ExternalLink, { ExternalLinkInterface } from '../util/ExternalLink';
import ContactIcon from './ContactIcon';
import EmailDisplayField from './emailDisplayField';

export interface ContactIconInterface {
    name: string;
    icon: string;
    href: string;
}
const Contact = () => {
    const resumeLinkData: ExternalLinkInterface = {
        onClick: config.CV_DOWNLOAD_LINK,
        label: 'get my stuff',
    };
    const isToastShown: boolean = useAppSelector(
        (state: RootState) => state.counter.isToastShown
    );

    const [isEmailShown, setIsEmailShown] = useState(isToastShown);

    useEffect(() => {
        if (isToastShown) setIsEmailShown(true);
    }, [isToastShown]);

    const resumeButtonData: ButtonInterface = {
        label: 'my email',
        onClickFunction: () => dispatch(changeToastValue()),
        bordered: true,
    };

    const icons: ContactIconInterface[] = [
        {
            name: 'linkedIn',
            icon: 'svg-linkedin.svg',
            href: 'https://www.linkedin.com',
        },
        {
            name: 'gitHub',
            icon: 'svg-github.svg',
            href: 'https://github.com/Seeru-crypto',
        },
    ];

    const dispatch = useAppDispatch();

    // ToDo fix contactIcons css in mobile view!
    return (
        <section id="contact" className={styles.container}>
            <div className={styles.contactMain}>
                <h1 className={styles.heading}>Get in touch with me!</h1>
                <section className={styles.contactText}>
                    You can share your impressions on why would someone need
                    your services or whatnot, I don't know, I'm not the
                    all-seeing entity of all.
                </section>
                <div className={styles.contactButtons}>
                    <ExternalLink linkData={resumeLinkData} />
                    <div>or</div>
                    {isEmailShown ? (
                        <EmailDisplayField />
                    ) : (
                        <Button buttonData={resumeButtonData} />
                    )}
                </div>
            </div>
            <div className={styles.contactIcons}>
                {icons.map((icon) => (
                    <ContactIcon key={icon.name} icon={icon} />
                ))}
            </div>
        </section>
    );
};

export default Contact;
