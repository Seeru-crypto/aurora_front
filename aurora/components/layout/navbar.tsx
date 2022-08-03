import Link from 'next/link';
import { NAVIGATION_PATHS } from '../../config.json';

const Navbar = () => {
    return (
        <nav>
            {NAVIGATION_PATHS.map((object) => (
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
