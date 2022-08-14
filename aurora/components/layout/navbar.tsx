import Link from 'next/link';
import config from '../../config.json';

const Navbar = () => {
    function isInView(pageName: string) {
        if (pageName === 'About') return 'inView';
        else return '';
    }

    return (
        <nav>
            {config.NAVIGATION_PATHS.map((object) => (
                <Link className="test" href={object.key} key={object.value}>
                    <a className={isInView(object.value)}>{object.value}</a>
                </Link>
            ))}
            <Link className="resume" href={config.CV_DOWNLOAD_LINK}>
                <button className="resume">resume</button>
            </Link>
        </nav>
    );
};
export default Navbar;
