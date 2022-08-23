import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

export default function Layout({ children }: any): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="content">
        {children}
        <Footer />
      </div>
    </>
  );
}
