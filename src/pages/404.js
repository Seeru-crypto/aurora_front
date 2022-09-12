import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

const NotFound = () => {
    const router = useRouter();
    const timer = 10 * 1000;

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, timer);
    }, [timer, router]);

    return (
        <NotFoundStyle>
            <h1>Ooops.. </h1>
            <h2>The page cannot be found</h2>
            <p>
                Go back to the main page{' '}
                <Link href="/">
                    <a className="homeButton">Homepage</a>
                </Link>
            </p>
        </NotFoundStyle>
    );
};
export default NotFound;

const NotFoundStyle = styled.div`
    text-align: center;

    .homeButton {
        color: #4979ff;
        text-decoration: underline;
        cursor: pointer;
    }
`;
