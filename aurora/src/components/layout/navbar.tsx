import Link from 'next/link';
import styled from 'styled-components';
import config from '../../config.json';
import { RootState, useAppSelector } from '../../state/store';
import { ExternalLink, ExternalLinkInterface } from '../util';

const Navbar = () => {
    const currentPage: string = useAppSelector(
        (state: RootState) => state.counter.currentPage
    );

    const linkData: ExternalLinkInterface = {
        onClick: config.CV_DOWNLOAD_LINK,
        label: 'résumé',
        isNavbarButton: true,
    };

    function isInView(pageName: string) {
        if (pageName.toLowerCase() === currentPage) {
            // Question how to handle this situation where user clicks but a url changes for a moment, thus cancelling
            // navigation
            // window.history.replaceState(null, "title", `${currentPage}`)
            return 'inView';
        } else return '';
    }

    return (
        <NavbarStyle>
            {config.NAVIGATION_PATHS.map((object) => (
                <Link href={object.key} key={object.value}>
                    <a className={`navigationLink ${isInView(object.value)}`}>{object.value}</a>
                </Link>
            ))}
            <ExternalLink linkData={linkData} />
        </NavbarStyle>
    );
};
export default Navbar;

const NavbarStyle = styled.nav`
    margin: 10px auto 0;
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border-bottom: 1px solid #ddd;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 999;
    flex-grow: 1;
  
  .logo{
    margin-right: auto;
  }

  .navigationLink {
    margin-left: 12px;
    border-bottom: 1px solid transparent;
    padding: 0 5px 0 5px;
    font-weight: bold;
  }
  .navigationLink:hover {
    border-bottom: 1px solid var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
  }
  
  .navigationLink.inView {
    color: purple;
  }
`;
