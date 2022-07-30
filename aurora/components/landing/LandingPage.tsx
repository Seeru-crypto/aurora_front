import styles from '../../styles/LandingPage.module.css';
import creep from '../styles/Creeper2.jpg';
import Image from 'next/image';

const LandingPage = () => {
    return (
        <section className={styles.container}>
            <div className={styles.right}>
                <Image
                    src="/Creeper2.jpg"
                    width={500}
                    height={500}
                    alt="no-creep!"
                ></Image>
            </div>

            <div className={styles.left}>
                <h1>Hi My name is Fred</h1>
                <p>I do stuff for the interwebz</p>
            </div>
        </section>
    );
};

export default LandingPage;
