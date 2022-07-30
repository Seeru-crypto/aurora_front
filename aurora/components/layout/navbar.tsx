import Link from 'next/link';

const navObjects = [
    { value: 'Home', key: '/' },
    { value: 'About', key: '#about' },
    { value: 'Experience', key: '#experience' },
    { value: 'Work', key: '#work' },
    { value: 'Contact', key: '#contact' },
];

const Navbar = () => {
    return (
        <nav>
            {navObjects.map((object) => (
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
