import { FC } from "react";
import css from "./ButtonMenu.module.css";
import { RiMenu3Fill } from "react-icons/ri";

interface ButtonMenuProps {
  toggleMenu: () => void;
}

const ButtonMenu: FC<ButtonMenuProps> = ({ toggleMenu }) => {
  return (
    <>
      <button type="button" className={css.btn} onClick={toggleMenu}>
        <RiMenu3Fill className={css.icon} />
      </button>
    </>
  );
};

export default ButtonMenu;
