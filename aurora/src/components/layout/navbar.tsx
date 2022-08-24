import Link from 'next/link';
import { useEffect } from 'react';
import config from '../../config.json';
import { RootState, useAppSelector } from '../../state/store';
import {ExternalLink, ExternalLinkInterface} from "../util";

const Navbar = () => {
    const currentPage: string = useAppSelector(
        (state: RootState) => state.counter.currentPage
    );

    const linkData: ExternalLinkInterface = {
        onClick: config.CV_DOWNLOAD_LINK,
        label: "résumé",
        isNavbarButton: true
    }

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
            <ExternalLink linkData={linkData} />
        </nav>
    );
};
export default Navbar;
