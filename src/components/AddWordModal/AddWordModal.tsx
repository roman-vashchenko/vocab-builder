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
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modal}
        overlayClassName={css.overlay}
        bodyOpenClassName={css.bodyOpen}
      >
        <AddWordForm />
      </ReactModal>
    </div>
  );
};

export default AddWordModal;
