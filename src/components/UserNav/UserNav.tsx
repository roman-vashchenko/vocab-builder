import { NavLink } from "react-router-dom";
import css from "./UserNav.module.css";
import clsx from "clsx";
import { FC } from "react";
import ButtonLogOut from "../ButtonLogOut/ButtonLogOut";
import { useMediaQuery } from "react-responsive";

interface UserNavProps {
  toggleMenu?: () => void;
}

const UserNav: FC<UserNavProps> = ({ toggleMenu }) => {
  const isMobileOrTablet: boolean = useMediaQuery({
    query: "(max-width: 1440px)",
  });

  const buildLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return clsx(css.link, isActive && css.active);
  };

  const handleMenuClick = () => {
    if (window.innerWidth < 1440) {
      if (toggleMenu) toggleMenu();
    }
  };
  return (
    <div className={css.content}>
      <nav className={css.nav}>
        <NavLink
          className={buildLinkClass}
          to="dictionary"
          onClick={handleMenuClick}
        >
          Dictionary
        </NavLink>
        <NavLink
          className={buildLinkClass}
          to="recommend"
          onClick={handleMenuClick}
        >
          Recommend
        </NavLink>
        <NavLink
          className={buildLinkClass}
          to="training"
          onClick={handleMenuClick}
        >
          Training
        </NavLink>
      </nav>
      {isMobileOrTablet && <ButtonLogOut toggleMenu={toggleMenu} />}
    </div>
  );
};

export default UserNav;
