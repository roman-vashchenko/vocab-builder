import { useMediaQuery } from "react-responsive";
import ButtonLogOut from "../ButtonLogOut/ButtonLogOut";
import css from "./UserBar.module.css";

const UserBar = () => {
  const isDesktop: boolean = useMediaQuery({
    query: "(min-width: 1440px)",
  });
  return (
    <div className={css.content}>
      <p className={css.name}>User</p>
      <div className={css.iconWrapper}>
        <svg width={24} height={24} className={css.icon}>
          <use href="/src/assets/img/icons.svg#icon-gridicons_user"></use>
        </svg>
      </div>
      {isDesktop && <ButtonLogOut />}
    </div>
  );
};

export default UserBar;
