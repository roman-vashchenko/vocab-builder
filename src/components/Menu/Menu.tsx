import { FC } from "react";
import css from "./Menu.module.css";
import clsx from "clsx";

interface MenuProps {
  isOpen: boolean;
}

const Menu: FC<MenuProps> = ({ isOpen }) => {
  return <div className={clsx(css.menu, isOpen && css.isOpen)}>Menu</div>;
};

export default Menu;
