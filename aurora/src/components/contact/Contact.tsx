import { useEffect, useState } from 'react';
import config from '../../config.json';
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
    const [isEmailFieldVisible, setIsEmailFieldVisible] = useState(false);
    const resumeLinkData: ExternalLinkInterface = {
        onClick: config.CV_DOWNLOAD_LINK,
        label: 'get my stuff',
    };

    const resumeButtonData: ButtonInterface = {
        label: 'my email',
        onClickFunction: () => setIsEmailFieldVisible(!isEmailFieldVisible),
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

    useEffect(() => {
        if (isEmailFieldVisible) {
            setTimeout(() => {
                alert('saved to clipboard');
            }, 100);
        }
    }, [isEmailFieldVisible]);

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
                    {isEmailFieldVisible ? (
                        <EmailDisplayField />
                    ) : (
                        <>
                            <Button buttonData={resumeButtonData} />
                        </>
                    )}
                </div>
            </div>
            <div className={styles.contactIcons}>
                {icons.map((icon) => (
                    <ContactIcon icon={icon} />
                ))}
            </div>
        </section>
    );
};

export default Contact;
