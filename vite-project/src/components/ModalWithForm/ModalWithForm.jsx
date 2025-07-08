import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <button type="button" className="modal__close-btn"></button>
        <p className="modal__title">New garment</p>
        <form id="add-garment-modal" className="modal__form">
          <label htmlFor="garment-name-input" className="modal__label">
            Name
            <input
              id="garment-name-input"
              type="text"
              className="modal__input"
              name="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="imageURL" className="modal__label">
            Image
            <input
              id="imageURL"
              type="url"
              className="modal__input"
              name="link"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-btns">
            <legend className="modal__radio-title">Select weather type:</legend>
            <label htmlFor="hot" className="modal__radio-label">
              <input
                type="radio"
                id="hot"
                name="weather"
                value="hot"
                checked
                className="modal__radio-input"
              />
              Hot
            </label>
            <label htmlFor="warm" className="modal__radio-label">
              <input
                type="radio"
                id="warm"
                name="weather"
                value="warm"
                className="modal__radio-input"
              />
              Warm
            </label>
            <label htmlFor="cold" className="modal__radio-label">
              <input
                type="radio"
                id="cold"
                name="weather"
                value="cold"
                className="modal__radio-input"
              />
              Cold
            </label>
          </fieldset>
          <button type="submit" className="modal__submit-btn">
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
