import "./ConfirmationModal.css";

export default function ConfirmationModal({
  isOpen,
  onClose,
  onDelete,
  selectedCard,
  onOverlay,
}) {
  return (
    <div
      onClick={onOverlay}
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      title="delete"
    >
      <div className="modal__content modal__content_type_confirm">
        <button onClick={onClose} type="button" className="modal__close-btn" />
        <p className="confirm-modal__title">
          Are you sure you want to delete this image? This action is
          irreversible.
        </p>
        <button
          type="submit"
          className="confirm-modal__button confirm-modal__button_type_delete"
          onClick={() => {
            onDelete(selectedCard);
          }}
        >
          Yes, delete item
        </button>
        <button
          type="button"
          className="confirm-modal__button confirm-modal__button_type_cancel"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
