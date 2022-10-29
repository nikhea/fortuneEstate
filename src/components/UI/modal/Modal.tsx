import { FC, useState } from "react";
import ReactModal from "react-modal";
import Auth from "../../autht/auth";
interface modals {
  modalIsOpen: any;
  setIsOpen: any;
}
const Modal: FC = () => {
  let subtitle: { style: { color: string } };
  const [modalIsOpen, setIsOpen] = useState(true);

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

  return (
    <div>
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
            // color: "lightsteelblue",
            width: "70%",
            margin: " 0 auto",
            overflow: "hidden",
            // display: "flex",
            border: "none",
            borderRadius: "20px",
            // justifyContent: "space-between",
            padding: "0px",
          },
        }}
        contentLabel="Example Modal"
      >
        <Auth />
      </ReactModal>
    </div>
  );
};

export default Modal;
