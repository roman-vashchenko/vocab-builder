import { NavLink } from "react-router-dom";
import css from "./UserNav.module.css";
import clsx from "clsx";
import { FC } from "react";

interface UserNavProps {
  toggleMenu: () => void;
}

const UserNav: FC<UserNavProps> = ({ toggleMenu }) => {
  const buildLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.content}>
      <nav className={css.nav}>
        <NavLink
          className={buildLinkClass}
          to="dictionary"
          onClick={toggleMenu}
        >
          Dictionary
        </NavLink>
        <NavLink className={buildLinkClass} to="recommend" onClick={toggleMenu}>
          Recommend
        </NavLink>
        <NavLink className={buildLinkClass} to="training" onClick={toggleMenu}>
          Training
        </NavLink>
      </nav>
      <button type="button" className={css.btn} onClick={toggleMenu}>
        Log out
        <svg width={16} height={16}>
          <use href="/src/assets/img/icons.svg#icon-arrow-right"></use>
        </svg>
      </button>
    </div>
  );
};

export default UserNav;
