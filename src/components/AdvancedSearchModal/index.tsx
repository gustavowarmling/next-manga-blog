import Modal from "react-modal";

interface AdvancedSearchModalProps {
  modalIsOpen: boolean;
  onRequestClose: () => void;
}

export function AdvancedSearchModal({
  modalIsOpen,
  onRequestClose,
}: AdvancedSearchModalProps) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    ></Modal>
  );
}
