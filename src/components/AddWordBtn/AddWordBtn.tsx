import { FaPlus } from "react-icons/fa6";
import css from "./AddWordBtn.module.css";

const AddWordBtn = () => {
  return (
    <button className={css.btn} type="button">
      Add word
      <FaPlus
        width={20}
        height={20}
        style={{
          position: "relative",
          top: "-2px",
          color: "rgb(133, 170, 159)",
        }}
      />
    </button>
  );
};

export default AddWordBtn;
