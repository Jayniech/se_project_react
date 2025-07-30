import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onOverlay,
  onSubmit,
}) {
  return (
    <div
      onClick={onOverlay}
      className={`modal ${isOpen ? "modal_opened" : ""}`}
    >
      <div className="modal__content">
        <button onClick={onClose} type="button" className="modal__close-btn" />
        <p className="modal__title">{title}</p>
        <form
          onSubmit={onSubmit}
          id="add-garment-modal"
          className="modal__form"
        >
          {children}
          <button type="submit" className="modal__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
