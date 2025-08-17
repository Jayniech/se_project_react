import "./ItemModal.css";

function ItemModal({
  activeModal,
  handleOverlayClick,
  handleCloseClick,
  card,
  onClick,
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
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div>
            <p className="modal__caption">{card.name}</p>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button
            type="submit"
            className="modal__delete-btn"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
