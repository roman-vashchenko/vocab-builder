import OptionType from "../../types";
import { StylesConfig } from "react-select";
import Select from "react-select";
import FormControl from "@mui/material/FormControl";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import css from "./AddWordForm.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import * as yup from "yup";
import { FC } from "react";

interface FormValues {
  ua: string;
  en: string;
  category: string;
  isIrregular?: boolean;
}

interface AddWordFormProps {
  onClose: () => void;
}

const schema = yup
  .object({
    ua: yup
      .string()
      .required()
      .matches(/^[А-ЯІЄЇҐґа-яієїʼ\s]+$/u, "only ukrainian letters are allowed"),
    en: yup
      .string()
      .required()
      .matches(/^[A-Za-z'’\- ]+$/u, "only english letters allowed"),
    category: yup.string().required(),
  })
  .required();

const AddWordForm: FC<AddWordFormProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(errors);
    console.log(data);
  };
  const options: OptionType[] = [
    { value: "verb", label: "Verb" },
    { value: "participle", label: "Participle" },
    { value: "noun", label: "Noun" },
  ];

  const customStyles: StylesConfig<OptionType, false> = {
    control: (base) => ({
      ...base,
      backgroundColor: "rgb(133, 170, 159);",
      borderRadius: "15px",
      padding: "4px 12px",
      boxShadow: "none",
      marginBottom: "8px",
      borderColor: "rgb(209, 213, 219)",
      "@media (min-width: 768px)": {
        marginBottom: 8,
        width: "204px",
        fontWeight: 500,
        cursor: "pointer",
        "&:hover": {
          borderColor: "rgb(209, 213, 219)",
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
      "&:hover": {
        color: "#333",
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: "rgb(252, 252, 252)",
    }),
    placeholder: (base) => ({
      ...base,
      color: "rgb(252, 252, 252)",
      fontWeight: 500,
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: "rgb(252, 252, 252)",
      transform: state.selectProps.menuIsOpen
        ? "rotate(180deg)"
        : "rotate(0deg)",
      transition: "transform 0.2s ease",
      "&:hover": {
        color: "rgb(252, 252, 252)",
      },
    }),
    indicatorSeparator: () => ({ display: "none" }),
  };
  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={{ width: "100%" }}>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select<OptionType, false>
                options={options}
                placeholder="Categories"
                styles={customStyles}
                value={
                  options.find((option) => option.value === field.value) || null
                }
                onChange={(option) => field.onChange(option?.value)}
              />
            )}
          />
          <p style={{ color: "rgb(216, 0, 39)" }}>{errors.category?.message}</p>
          <Controller
            name="isIrregular"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                value={String(value)}
                onChange={(e) => onChange(e.target.value === "true")}
                sx={{ display: "flex", gap: "16px", flexDirection: "row" }}
              >
                <FormControlLabel
                  sx={{
                    width: "fit-content",
                    margin: 0,
                    marginBottom: "32px",
                    "&.MuiRadioButtonIcon-root": { marginLeft: "8px" },
                  }}
                  value="false"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": { color: "rgb(252, 252, 252)" },
                        padding: 0,
                        marginRight: "8px",
                        color: "rgb(252, 252, 252)",
                      }}
                    />
                  }
                  label="Regular"
                />
                <FormControlLabel
                  sx={{
                    width: "fit-content",
                    margin: 0,
                    marginBottom: "32px",
                  }}
                  value="true"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": { color: "rgb(252, 252, 252)" },
                        padding: 0,
                        marginRight: "8px",
                        color: "rgb(252, 252, 252)",
                      }}
                    />
                  }
                  label="Irregular"
                />
              </RadioGroup>
            )}
          />
        </FormControl>
        <div className={css.fieldsWrapper}>
          <div className={css.inputWrapper}>
            <div className={css.iconLanguage}>
              <svg width={28} height={28}>
                <use href="/src/assets/img/icons.svg#icon-ukraine"></use>
              </svg>
              <p>Ukrainian</p>
            </div>
            <input type="text" {...register("ua")} className={css.field} />
            <p className={css.textError}>{errors.ua?.message}</p>
          </div>
          <div className={css.inputWrapper}>
            <div className={css.iconLanguage}>
              <svg width={28} height={28}>
                <use href="/src/assets/img/icons.svg#icon-united-kingdom"></use>
              </svg>
              <p>English</p>
            </div>
            <input
              type="text"
              {...register("en", {
                pattern: /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/,
              })}
              className={css.field}
            />
            <p className={css.textError}>{errors.en?.message}</p>
          </div>
        </div>
        <div className={css.wrapButtons}>
          <button type="submit" className={css.btn}>
            Add
          </button>
          <button type="button" className={css.btn} onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWordForm;
