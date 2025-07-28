import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import css from "./ProgressBar.module.css";

interface ProgressBarProps {
  value: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ value }) => {
  const isTabletOrDesktop: boolean = useMediaQuery({
    query: "(min-width: 768px)",
  });
  return (
    <div className={css.content}>
      {isTabletOrDesktop && <span className={css.progressValue}>{value}%</span>}
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={100}
          sx={{
            color: "rgb(212, 248, 211)",
          }}
          size={25}
          thickness={7}
        />
        <CircularProgress
          variant="determinate"
          value={value}
          sx={{
            color: "rgb(43, 214, 39)",
            position: "absolute",
            left: 0,
            "& .MuiCircularProgress-circle": {
              strokeLinecap: "round",
            },
          }}
          size={25}
          thickness={7}
        />
      </Box>
    </div>
  );
};

export default ProgressBar;
