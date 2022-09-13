import { useEffect, useState } from 'react';
import config from '../../config.json';
import { NAVIGATION_PATHS } from '../../Navigation';
import { toggleToastVisibility } from '../../state/appSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../state/store';
// import { changeToastValue } from '../../state/appSlice';
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

export default function ContactSection(): JSX.Element {
  const dispatch = useAppDispatch();
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
  const resumeLinkData: ExternalLinkInterface = {
    onClick: config.CV_DOWNLOAD_LINK,
    label: 'get my stuff',
  };
  const resumeButtonData: ButtonInterface = {
    label: 'my email',
    onClickFunction: () => dispatch(toggleToastVisibility()),
    bordered: true,
  };

  const isToastShown: boolean = useAppSelector((state: RootState) => state.app.isToastShown);

  const [isEmailShown, setIsEmailShown] = useState(isToastShown);

  useEffect(() => {
    if (isToastShown && !isEmailShown) setIsEmailShown(true);
  }, [isToastShown]);

  // ToDo fix contactIcons css in mobile view!
  return (
    <section id={NAVIGATION_PATHS.Contact}>
      <div className={styles.contactMain}>
        <h1 className={styles.heading}>Get in touch with me!</h1>
        <section className={styles.contactText}>
          You can share your impressions on why would someone need your services or whatnot, I don&apos;t know, I&apos;m
          not the all-seeing entity of all.
        </section>
        <div className={styles.contactButtons}>
          <ExternalLink linkData={resumeLinkData} />
          <div>or</div>
          {isEmailShown ? <EmailDisplayField /> : <Button buttonData={resumeButtonData} />}
        </div>
      </div>
      <div className={styles.contactIcons}>
        {icons.map((icon) => (
          <ContactIcon key={icon.name} icon={icon} />
        ))}
      </div>
    </section>
  );
}
