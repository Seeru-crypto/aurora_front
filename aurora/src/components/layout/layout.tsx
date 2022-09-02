import Navbar from './navbar';
import Footer from './footer';
import styled from "styled-components";

const Layout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <LayoutStyle>
                {children}
                <Footer />
            </LayoutStyle>
        </>
    );
};
export default Layout;

const LayoutStyle = styled.div`
  margin: 0 auto;
  max-width: 95%;
`