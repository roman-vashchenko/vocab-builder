import { useState } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import WordsTable from "../../components/WordsTable/WordsTable";
import css from "./Dictionary.module.css";
import AddWordModal from "../../components/AddWordModal/AddWordModal";

const DictionaryPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <section className={css.section}>
      <Dashboard openModal={handleOpenModal} />
      <WordsTable />
      <AddWordModal isOpen={isOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default DictionaryPage;
