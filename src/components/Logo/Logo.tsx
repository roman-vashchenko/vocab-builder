import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={css.logo}>
      <svg width={36} height={36}>
        <use href="/src/assets/img/icons.svg#icon-logo"></use>
      </svg>
      <h1 className={css.title}>VocabBuilder</h1>
    </div>
  );
};

export default Logo;
