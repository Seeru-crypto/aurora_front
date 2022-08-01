import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <div className="content">
                {children}
                <Footer />
            </div>
        </>
    );
};
export default Layout;
