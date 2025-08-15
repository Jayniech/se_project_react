import "./ConfirmationModal.css";

export default function ConfirmationModal() {
  return (
    <div className="confirm-modal">
      <p className="confirm-modal__title">
        Are you sure you want to delete this image? This action is irreversible.
      </p>
      <button
        type="submit"
        className="confirm-modal__submit-btn confirm-modal__submit-btn_type_delete"
      >
        Yes, delete item
      </button>
      <button
        type="button"
        className="confirm-modal__submit-btn confirm-modal__submit-btn_type_cancel"
      >
        Cancel
      </button>
    </div>
  );
}
