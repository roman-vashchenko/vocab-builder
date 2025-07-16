import { FaArrowRightLong } from "react-icons/fa6";
import Filters from "../Filters/Filters";
import Statistics from "../Statistics/Statistics";
import AddWordBtn from "../AddWordBtn/AddWordBtn";
import { Link } from "react-router-dom";
import css from "./Dashboard.module.css";
import WordsTable from "../WordsTable/WordsTable";

const Dashboard = () => {
  return (
    <div className={css.dashboard}>
      <Filters />
      <div className={css.wrapper}>
        <Statistics />
        <div className={css.buttons}>
          <AddWordBtn />
          <Link to="/training" className={css.link}>
            Train oneself
            <FaArrowRightLong
              width={20}
              height={20}
              style={{
                position: "relative",
                top: "-2px",
                color: "rgb(133, 170, 159)",
              }}
            />
          </Link>
        </div>
      </div>
      <WordsTable />
    </div>
  );
};

export default Dashboard;
