import { Outlet, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  const location = useLocation();
  const noFooterComp = ["/login", "/user/edit"];
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Outlet />
      {noFooterComp.includes(location.pathname) ? null : <Footer />}
    </>
  );
};

export default Layout;
