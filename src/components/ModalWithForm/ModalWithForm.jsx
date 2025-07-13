import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleCloseClick,
}) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" ? "modal_opened" : ""}`}
    >
      <div className="modal__content">
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close-btn"
        ></button>
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
