import { FiSearch } from "react-icons/fi";
import css from "./Filters.module.css";
import { IoIosArrowDown } from "react-icons/io";

const Filters = () => {
  return (
    <div className={css.filters}>
      <div className={css.field}>
        <FiSearch width={20} height={20} className={css.icon} />
        <input type="text" placeholder="Find the word" className={css.input} />
      </div>
      <div className={css.field}>
        <IoIosArrowDown width={20} height={20} className={css.icon} />
        <select name="categories_words" className={css.select}>
          <option value="" disabled selected>
            Categories
          </option>
          <option value="verb">Verb</option>
          <option value="participle">Participle</option>
          <option value="noun">Noun</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
