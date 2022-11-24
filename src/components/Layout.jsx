import Navbars from "./Navbars";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navbars />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
