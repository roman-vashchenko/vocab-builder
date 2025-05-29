import { FC } from "react";
import css from "./ButtonMenu.module.css";
import { RiMenu3Fill } from "react-icons/ri";

interface Menu {
  toggleMenu: () => void;
}

const ButtonMenu: FC<Menu> = ({ toggleMenu }) => {
  return (
    <>
      <button type="button" className={css.btn} onClick={toggleMenu}>
        <RiMenu3Fill className={css.icon} />
      </button>
    </>
  );
};

export default ButtonMenu;
