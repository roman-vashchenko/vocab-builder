import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import Logo from "../Logo/Logo";

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <Logo />
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
