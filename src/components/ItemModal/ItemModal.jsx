import "./ItemModal.css";

function ItemModal({
  activeModal,
  handleOverlayClick,
  handleCloseClick,
  card,
}) {
  return (
    <div
      onClick={handleOverlayClick}
      className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}
    >
      <div className="modal__content modal__content_type_image">
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close-btn modal__close-btn_type_image"
        ></button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <p className="modal__caption">{card.name}</p>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
