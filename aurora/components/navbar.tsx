import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/projects">
                <a>Projects</a>
            </Link>
        </nav>
    );
};
export default Navbar;
