import Link from 'next/link';
import { useEffect } from 'react';
import config from '../../config.json';
import { RootState, useAppDispatch, useAppSelector } from '../../state/store';

const Navbar = () => {
    const currentPage: string = useAppSelector(
        (state: RootState) => state.counter.currentPage
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log('currentPage ' + currentPage);
    }, [currentPage]);

    function isInView(pageName: string) {
        if (pageName === 'About') return 'inView';
        else return '';
    }

    return (
        <nav>
            {config.NAVIGATION_PATHS.map((object) => (
                <Link href={object.key} key={object.value}>
                    <a className={isInView(object.value)}>{object.value}</a>
                </Link>
            ))}
            <Link className="resume" href={config.CV_DOWNLOAD_LINK}>
                <button className="resume">résumé</button>
            </Link>
        </nav>
    );
};
export default Navbar;
