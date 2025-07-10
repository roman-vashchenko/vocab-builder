import Radio from "@mui/material/Radio";
import { useState } from "react";
import css from "./RadioButtons.module.css";

const RadioButtons = () => {
  const [selectedValue, setSelectedValue] = useState<string>("Regular");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={css.buttons}>
      <Radio
        sx={{ "&.Mui-checked": { color: "rgb(133, 170, 159)" } }}
        checked={selectedValue === "Regular"}
        onChange={handleChange}
        value="Regular"
        name="radio-buttons"
        id="regular"
      />
      <label className={css.label} htmlFor="regular">
        Regular
      </label>
      <Radio
        sx={{ "&.Mui-checked": { color: "rgb(133, 170, 159)" } }}
        checked={selectedValue === "Irregular"}
        onChange={handleChange}
        value="Irregular"
        name="radio-buttons"
        id="irregular"
      />
      <label className={css.label} htmlFor="irregular">
        Irregular
      </label>
    </div>
  );
};

export default RadioButtons;
