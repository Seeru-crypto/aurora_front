import Footer from "./footer";
import Navbar from "./navbar";

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
