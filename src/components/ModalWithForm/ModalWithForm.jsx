import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  handleCloseClick,
}) {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseClick();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={`modal ${isOpen ? "modal_opened" : ""}`}
    >
      <div className="modal__content">
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close-btn"
        />
        <p className="modal__title">{title}</p>
        <form id="add-garment-modal" className="modal__form">
          {children}
          <button
            type="submit"
            className="modal__submit-btn modal__submit-btn_disable"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
