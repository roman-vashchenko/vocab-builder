import { FiSearch } from "react-icons/fi";
import css from "./Filters.module.css";
import { StylesConfig } from "react-select";
import Select from "react-select";
import RadioButtons from "../RadioButtons/RadioButtons";

interface OptionType {
  value: string;
  label: string;
}

const Filters = () => {
  const options: OptionType[] = [
    { value: "verb", label: "Verb" },
    { value: "participle", label: "Participle" },
    { value: "noun", label: "Noun" },
  ];

  const customStyles: StylesConfig<OptionType, false> = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "rgb(248, 248, 248)",
      borderRadius: "15px",
      padding: "4px 12px",
      boxShadow: "none",
      marginBottom: "14px",
      borderColor: state.isFocused
        ? "rgb(133, 170, 159)"
        : "rgba(18, 20, 23, 0.1)",
      "@media (min-width: 768px)": {
        marginBottom: 0,
        width: "164px",
        fontWeight: 500,
        cursor: "pointer",
        "&:hover": {
          borderColor: state.isFocused
            ? "rgb(133, 170, 159)"
            : "rgba(18, 20, 23, 0.1)",
        },
      },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "10px",
      boxShadow: "0px 4px 47px 0px rgba(18, 20, 23, 0.08)",
      background: "rgb(255, 255, 255)",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: "#fff",
      color: state.isSelected ? "rgb(133, 170, 159)" : "rgba(18, 20, 23, 0.5)",
    }),
    placeholder: (base) => ({
      ...base,
      color: "rgb(18, 20, 23)",
      fontWeight: 500,
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: "#333",
      transform: state.selectProps.menuIsOpen
        ? "rotate(180deg)"
        : "rotate(0deg)",
      transition: "transform 0.2s ease",
      "&:hover": {
        color: "#333",
      },
    }),
    indicatorSeparator: () => ({ display: "none" }),
  };
  return (
    <div className={css.filters}>
      <div className={css.field}>
        <FiSearch width={20} height={20} className={css.icon} />
        <input type="text" placeholder="Find the word" className={css.input} />
      </div>
      <Select<OptionType, false>
        options={options}
        placeholder="Categories"
        styles={customStyles}
      />
      <RadioButtons />
    </div>
  );
};

export default Filters;
