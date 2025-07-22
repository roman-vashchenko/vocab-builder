import OptionType from "../../types";
import { StylesConfig } from "react-select";
import Select from "react-select";
import RadioButtons from "../RadioButtons/RadioButtons";

const AddWordForm = () => {
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
      borderRadius: "15px",
      overflow: "hidden",
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
    <div>
      <p>Add word</p>
      <p>
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </p>
      <Select<OptionType, false>
        options={options}
        placeholder="Categories"
        styles={customStyles}
      />
      <RadioButtons />
      <input
        type="text"
        pattern="^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$"
        name="ua"
      />
      <input
        type="text"
        pattern="\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b"
        name="en"
      />
    </div>
  );
};

export default AddWordForm;
