import { FC } from "react";
import css from "./ButtonLogOut.module.css";
import { useMediaQuery } from "react-responsive";
import { FaArrowRightLong } from "react-icons/fa6";

interface ButtonLogOutProps {
  toggleMenu?: () => void;
}

const ButtonLogOut: FC<ButtonLogOutProps> = ({ toggleMenu }) => {
  const isDesktop: boolean = useMediaQuery({
    query: "(min-width: 1440px)",
  });
  const handleMenuClick = () => {
    if (!isDesktop) {
      if (toggleMenu) toggleMenu();
    }
  };
  return (
    <button type="button" className={css.btn} onClick={handleMenuClick}>
      Log out
      {!isDesktop ? (
        <svg
          width={16}
          height={16}
          style={{ position: "relative", top: "-1px" }}
        >
          <use href="/src/assets/img/icons.svg#icon-arrow-right"></use>
        </svg>
      ) : (
        <FaArrowRightLong
          width={16}
          height={16}
          style={{ position: "relative", top: "-1px" }}
        />
      )}
    </button>
  );
};

export default ButtonLogOut;
