import { FC, useState } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import ReactModal from "react-modal";
import SignUp from "../../autht/signIn";

interface modals {
  modalIsOpen?: any;
  setIsOpen?: any;
}

const ModalComponent: FC = NiceModal.create<any>(({ name }) => {
  console.log(name);

  const modal = useModal();

  const [modalIsOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <ReactModal
        isOpen={modal.visible}
        onRequestClose={() => modal.remove()}
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
        <SignUp />
      </ReactModal>
    </div>
  );
});

export default ModalComponent;
