import { FC } from "react";
import css from "./Menu.module.css";
import clsx from "clsx";
import UserBar from "../UserBar/UserBar";
import UserNav from "../UserNav/UserNav";

interface MenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Menu: FC<MenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div className={clsx(css.menu, isOpen && css.isOpen)}>
      <button type="button" className={css.btn} onClick={toggleMenu}>
        <svg width={40} height={40}>
          <use href="/src/assets/img/icons.svg#icon-close"></use>
        </svg>
      </button>
      <div className={css.menuContainer}>
        <UserBar />
        <UserNav toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default Menu;
