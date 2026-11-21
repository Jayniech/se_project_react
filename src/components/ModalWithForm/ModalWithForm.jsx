import "./ModalWithForm.css";
import { useModalClose } from "../../hooks/useModalClose";
import { useRef } from "react";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
  extraButtonText,
  extraButtonOnClick,
  extraButtonClassName,
  isValid,
  formId
}) {

  const overlayRef = useRef(null);
  
  useModalClose(isOpen, onClose, overlayRef);

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      ref={overlayRef}
    >
      <div className="modal__content">
        <button onClick={onClose} type="button" className="modal__close-btn" />
        <p className="modal__title">{title}</p>
        <form
          onSubmit={onSubmit}
          id={formId}
          className="modal__form"
        >
          {children}
          <div className="modal__button-container">
            <button
              type="submit"
              className="modal__submit-btn"
              disabled={!isValid}
            >
              {buttonText}
            </button>
            {extraButtonText && (
              <button
                type="button"
                className={extraButtonClassName}
                onClick={extraButtonOnClick}
              >
                {extraButtonText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
