import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import css from "./PopoverButton.module.css";

const PopoverButton = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={css.popoverBtn}
        style={{ color: open ? "rgb(18, 20, 23)" : "rgba(18, 20, 23, 0.5)" }}
      >
        ...
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: 5,
            boxShadow: "0px 4px 47px 0px rgba(18, 20, 23, 0.08)",
            background: "rgb(255, 255, 255)",
          },
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Typography sx={{ p: "12px 24px" }}>
          <button type="button" className={css.btn}>
            <span>
              <svg width={16} height={16} className={css.icon}>
                <use href="/src/assets/img/icons.svg#icon-edit"></use>
              </svg>
            </span>
            Edit
          </button>
          <button type="button" className={css.btn}>
            <span>
              <svg width={16} height={16} className={css.icon}>
                <use href="/src/assets/img/icons.svg#icon-delete"></use>
              </svg>
            </span>
            Delete
          </button>
        </Typography>
      </Popover>
    </>
  );
};

export default PopoverButton;
