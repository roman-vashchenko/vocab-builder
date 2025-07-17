import Dashboard from "../../components/Dashboard/Dashboard";
import WordsTable from "../../components/WordsTable/WordsTable";
import css from "./Dictionary.module.css";

const DictionaryPage = () => {
  return (
    <section className={css.section}>
      <Dashboard />
      <WordsTable />
    </section>
  );
};

export default DictionaryPage;
