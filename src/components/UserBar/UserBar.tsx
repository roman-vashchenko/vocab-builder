import css from "./UserBar.module.css";

const UserBar = () => {
  return (
    <div className={css.content}>
      <p className={css.name}>User</p>
      <div className={css.iconWrapper}>
        <svg width={40} height={40} className={css.icon}>
          <use href="/src/assets/img/icons.svg#icon-gridicons_user"></use>
        </svg>
      </div>
    </div>
  );
};

export default UserBar;
