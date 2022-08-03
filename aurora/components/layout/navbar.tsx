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
            <button
                onClick={() => console.log('download resume')}
                className="resume"
            >
                resume
            </button>
        </nav>
    );
};
export default Navbar;
