import { useMediaQuery } from "react-responsive";
import ButtonLogOut from "../ButtonLogOut/ButtonLogOut";
import css from "./UserBar.module.css";

const UserBar = () => {
  const isNone: boolean = useMediaQuery({
    query: "(min-width: 1439px)",
  });
  return (
    <div className={css.content}>
      <p className={css.name}>User</p>
      <div className={css.iconWrapper}>
        <svg width={30} height={30} className={css.icon}>
          <use href="/src/assets/img/icons.svg#icon-gridicons_user"></use>
        </svg>
      </div>
      {isNone && <ButtonLogOut />}
    </div>
  );
};

export default UserBar;
