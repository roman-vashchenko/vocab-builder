import { FC } from "react";
import css from "./ButtonLogOut.module.css";
import { useMediaQuery } from "react-responsive";
import { FaArrowRightLong } from "react-icons/fa6";

interface ButtonLogOutProps {
  toggleMenu?: () => void;
}

const ButtonLogOut: FC<ButtonLogOutProps> = ({ toggleMenu }) => {
  const isDesktop: boolean = useMediaQuery({
    query: "(min-width: 1439px)",
  });
  const handleMenuClick = () => {
    if (window.innerWidth < 1440) {
      if (toggleMenu) toggleMenu();
    }
  };
  return (
    <button type="button" className={css.btn} onClick={handleMenuClick}>
      Log out
      <svg width={16} height={16}>
        {!isDesktop ? (
          <use href="/src/assets/img/icons.svg#icon-arrow-right"></use>
        ) : (
          <FaArrowRightLong width={16} height={16} />
        )}
      </svg>
    </button>
  );
};

export default ButtonLogOut;
