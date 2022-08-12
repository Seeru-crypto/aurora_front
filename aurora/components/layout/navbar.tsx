import Link from 'next/link';
import config from '../../config.json';

const Navbar = () => {
    return (
        <nav>
            {config.NAVIGATION_PATHS.map((object) => (
                <Link href={object.key} key={object.value}>
                    {object.value}
                </Link>
            ))}
            <Link className="resume" href={config.CV_DOWNLOAD_LINK}>
                <button className="resume">resume</button>
            </Link>
        </nav>
    );
};
export default Navbar;
