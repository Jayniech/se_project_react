import "./ItemModal.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({
  activeModal,
  handleOverlayClick,
  handleCloseClick,
  card,
  onClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = currentUser && card && card.owner === currentUser._id;
  // const isOwn = card.owner === currentUser._id;

  const itemDeleteButtonClassName = `modal__delete-btn ${
    isOwn ? "" : "modal__delete-btn_hidden"
  }`;

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
        <img src={card?.imageUrl} alt={card?.name} className="modal__image" />
        <div className="modal__footer">
          <div>
            <p className="modal__caption">{card?.name}</p>
            <p className="modal__weather">Weather: {card?.weather}</p>
          </div>
          <button
            type="submit"
            className={itemDeleteButtonClassName}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
