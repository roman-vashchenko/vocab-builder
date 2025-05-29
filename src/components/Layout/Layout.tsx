import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import Logo from "../Logo/Logo";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import Menu from "../Menu/Menu";

const Layout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={css.header}>
        <Logo />
        <ButtonMenu toggleMenu={toggleMenu} />
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Menu isOpen={isOpen} />
    </>
  );
};

export default Layout;
