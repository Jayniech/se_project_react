import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

export default function AddItemModal({
  isOpen,
  onClose,
  onOverlay,
  onAddItemModalSubmit,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setimageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit({ name, imageUrl, weather });
    setName("");
    setimageUrl("");
    setWeather("");
  };

  return (
    <ModalWithForm
      buttonText="Add garment"
      title="New garment"
      isOpen={isOpen}
      onClose={onClose}
      onOverlay={onOverlay}
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
          onChange={handleImageUrlChange}
          value={imageUrl}
        />
      </label>
      <fieldset className="modal__radio-btns">
        <legend className="modal__radio-title">Select weather type:</legend>
        <label
          htmlFor="hot"
          className={`modal__radio-label ${
            weather === "hot" ? "modal__radio-label_active" : ""
          }`}
        >
          <input
            type="radio"
            id="hot"
            name="weather"
            value="hot"
            checked={weather === "hot"}
            className="modal__radio-input"
            onChange={handleWeatherChange}
          />
          Hot
        </label>
        <label
          htmlFor="warm"
          className={`modal__radio-label ${
            weather === "warm" ? "modal__radio-label_active" : ""
          }`}
        >
          <input
            type="radio"
            id="warm"
            name="weather"
            value="warm"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            checked={weather === "warm"}
          />
          Warm
        </label>
        <label
          htmlFor="cold"
          className={`modal__radio-label ${
            weather === "cold" ? "modal__radio-label_active" : ""
          }`}
        >
          <input
            type="radio"
            id="cold"
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
