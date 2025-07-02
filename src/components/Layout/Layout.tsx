import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import Logo from "../Logo/Logo";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import Menu from "../Menu/Menu";
import { useMediaQuery } from "react-responsive";
import UserNav from "../UserNav/UserNav";
import UserBar from "../UserBar/UserBar";

const Layout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobileOrTablet: boolean = useMediaQuery({
    query: "(max-width: 1439px)",
  });
  const isDesktop: boolean = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.container}>
      <header className={css.header}>
        <Logo />
        {isMobileOrTablet && <ButtonMenu toggleMenu={toggleMenu} />}
        {isDesktop && <UserNav />}
        {isDesktop && <UserBar />}
      </header>
      <main>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {isMobileOrTablet && <Menu isOpen={isOpen} toggleMenu={toggleMenu} />}
    </div>
  );
};

export default Layout;
