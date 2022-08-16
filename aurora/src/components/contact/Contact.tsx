import { useState } from "react";
import config from "../../config.json";
import styles from "../../styles/Contact.module.css";
import Button, { ButtonInterface } from "../util/Button";
import ExternalLink, { ExternalLinkInterface } from "../util/ExternalLink";
import EmailDisplayField from "./emailDisplayField";

export interface ContactIconInterface {
  name: string;
  icon: string;
  href: string;
}
const Contact = () => {
  const [isEmailFieldVisible, setIsEmailFieldVisible] = useState(false);
  const resumeLinkData: ExternalLinkInterface = {
    onClick: config.CV_DOWNLOAD_LINK,
    label: "get my stuff",
  };

  const resumeButtonData: ButtonInterface = {
    label: "my email",
    onClickFunction: () => setIsEmailFieldVisible(!isEmailFieldVisible),
  };

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.contactMain}>
        <h1 className={styles.heading}>Get in touch with me!</h1>
        <section className={styles.contactText}>
          You can share your impressions on why would someone need your services
          or whatnot, I don't know, I'm not the all-seeing entity of all.
        </section>
        <div className={styles.contactButtons}>
          <ExternalLink linkData={resumeLinkData} />
          <div>or</div>
          {isEmailFieldVisible ? (
            <EmailDisplayField />
          ) : (
            <Button buttonData={resumeButtonData} />
          )}
        </div>
      </div>
      {/* <div className={styles.contactIcons}>
                {icons.map((icon) => (
                    <ContactIcon icon={icon} />
                ))}
                ;
            </div> */}
    </section>
  );
};

export default Contact;
