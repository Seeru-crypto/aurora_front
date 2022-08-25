import Link from 'next/link';
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

    function isInView(pageName: string) {
        if (pageName.toLowerCase() === currentPage) {
            // Question how to handle this situation where user clicks but a url changes for a moment, thus cancelling
            // navigation
            // window.history.replaceState(null, "title", `${currentPage}`)
            return 'inView';
        }
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
