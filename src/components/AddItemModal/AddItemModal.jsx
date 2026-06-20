import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";

export default function AddItemModal({
  isOpen,
  onClose,
  onOverlay,
  onAddItemModalSubmit,
  onResetReady,
  formId,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    onResetReady(handleReset);
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const checkValid = () =>
    name.length >= 1 && imageUrl.length >= 1 && weather.length >= 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit({ name, imageUrl, weather });
  };

  const handleReset = () => {
    setName("");
    setImageUrl("");
    setWeather("");
  };

  return (
    <ModalWithForm
    formId={formId}
      buttonText="Add garment"
      title="New garment"
      isOpen={isOpen}
      onClose={onClose}
      onOverlay={onOverlay}
      isValid={checkValid()}
      onSubmit={handleSubmit}
    >
      <label htmlFor="garment-name-input" className="modal__label">
        Name
        <input
          id="garment-name-input"
          type="text"
          className="modal__input"
          name="name"
          placeholder="Name"
          onChange={handleNameChange}
          value={name}
          required
        />
      </label>
      <label htmlFor="garment-imageURL" className="modal__label">
        Image
        <input
          id="garment-imageURL"
          type="url"
          className="modal__input"
          name="link"
          placeholder="Image URL"
          onChange={handleImageUrlChange}
          value={imageUrl}
          required
        />
      </label>
      <fieldset className="modal__radio-btns">
        <legend className="modal__radio-title">Select weather type:</legend>
        <label
          htmlFor="garment-hot"
          className={`modal__radio-label ${
            weather === "hot" ? "modal__radio-label_active" : ""
          }`}
        >
          <input
            type="radio"
            id="garment-hot"
            name="weather"
            value="hot"
            checked={weather === "hot"}
            className="modal__radio-input"
            onChange={handleWeatherChange}
          />
          Hot
        </label>
        <label
          htmlFor="garment-warm"
          className={`modal__radio-label ${
            weather === "warm" ? "modal__radio-label_active" : ""
          }`}
        >
          <input
            type="radio"
            id="garment-warm"
            name="weather"
            value="warm"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            checked={weather === "warm"}
            required
          />
          Warm
        </label>
        <label
          htmlFor="garment-cold"
          className={`modal__radio-label ${
            weather === "cold" ? "modal__radio-label_active" : ""
          }`}
        >
          <input
            type="radio"
            id="garment-cold"
            name="weather"
            value="cold"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            checked={weather === "cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
