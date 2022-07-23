import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }: any) => {
    return (
        <div className="content">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};
export default Layout;
