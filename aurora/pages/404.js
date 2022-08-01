import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();
    const timer = 5 * 1000;

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, timer);
    }, []);

    return (
        <div className="not-found">
            <h1>Ooops.. </h1>
            <h2>The page cannot be found</h2>
            <p>
                Go back to the main page{' '}
                <Link href="/">
                    <a>Homepage</a>
                </Link>
            </p>
        </div>
    );
};
export default NotFound;
