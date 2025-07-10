import css from "./Statistics.module.css";

const Statistics = () => {
  return (
    <div className={css.content}>
      <p className={css.text}>
        To study: <span className={css.number}>20</span>
      </p>
    </div>
  );
};

export default Statistics;
