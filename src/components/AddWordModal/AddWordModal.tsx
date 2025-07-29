import ReactModal from "react-modal";
import css from "./AddWordModal.module.css";
import { FC } from "react";
import AddWordForm from "../AddWordForm/AddWordForm";

ReactModal.setAppElement("#root");

interface addModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddWordModal: FC<addModalProps> = ({ isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      bodyOpenClassName={css.bodyOpen}
    >
      <button type="button" className={css.closeBtn} onClick={onClose}>
        <svg width={24} height={24}>
          <use href="/src/assets/img/icons.svg#icon-close"></use>
        </svg>
      </button>
      <p className={css.nameModal}>Add word</p>
      <p className={css.textModal}>
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </p>
      <AddWordForm onClose={onClose} />
    </ReactModal>
  );
};

export default AddWordModal;
