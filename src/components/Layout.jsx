import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <a href="#main" className="skip-to-main-link">
        Skip to main content
      </a>
      <Header />
      <main id="main" className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
