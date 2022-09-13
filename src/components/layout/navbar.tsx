import Link from "next/link";
import styled from "styled-components";
import config from "../../config.json";
import { RootState, useAppSelector } from "../../state/store";
import { ExternalLink, ExternalLinkInterface } from "../util";

export default function Navbar(): JSX.Element {
  const currentPage: string = useAppSelector(
    (state: RootState) => state.app.currentPage
  );

  const linkData: ExternalLinkInterface = {
    onClick: config.CV_DOWNLOAD_LINK,
    label: "résumé",
    isNavbarButton: true,
  };

  function isInView(pageName: string) {
    if (pageName.toLowerCase() === currentPage) {
      return "inView";
    } else return "";
  }

  return (
    <NavbarStyle>
      {config.NAVIGATION_PATHS.map((object: { value: string; key: string }) => (
        <Link
          href={object.key}
          key={object.value}
          className={`navigationLink ${isInView(object.value)}`}
        >
          {object.value}
        </Link>
      ))}
      <ExternalLink linkData={linkData} />
    </NavbarStyle>
  );
}

const NavbarStyle = styled.nav`
  margin: 10px auto 0;
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-bottom: 1px solid var(--nav-active-color);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 999;
  flex-grow: 1;

  .logo {
    margin-right: auto;
  }

  .navigationLink {
    margin-left: 12px;
    border-bottom: 1px solid transparent;
    padding: 0 5px 0 5px;
    font-weight: bold;
    transition: all ease-in-out 300ms;
  }
  .navigationLink:hover {
    border-bottom: 1px solid var(--nav-active-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navigationLink.inView {
    color: var(--nav-active-color);
  }
`;
