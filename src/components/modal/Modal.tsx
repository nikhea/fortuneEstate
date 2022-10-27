import { FC, useState } from "react";
import ReactModal from "react-modal";

interface modals {
  modalIsOpen: any;
  setIsOpen: any;
}
const Modal: FC = () => {
  let subtitle: { style: { color: string } };
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const style = {
    container: `w-[59%]`,
  };
  return (
    <div className={style.container}>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 999999999999,
          },
          content: {
            color: "lightsteelblue",
          },
        }}
        contentLabel="Example Modal"
      >
     
      </ReactModal>
    </div>
  );
};

export default Modal;
