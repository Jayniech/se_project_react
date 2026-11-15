import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

export default function AddItemModal({
  isOpen,
  onClose,
  onOverlay,
  onAddItemModalSubmit,
  onResetReady,
  formId,
}) {
  const {values, handleChange, setValues} = useForm({ name:"", imageUrl:"", weather:"" });

  useEffect(() => {
    onResetReady(handleReset);
  }, []);

  const checkValid = () =>
    values.name.length >= 1 && values.imageUrl.length >= 1 && values.weather.length >= 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit({ name: values.name, imageUrl: values.imageUrl, weather: values.weather });
  };

  const handleReset = () => {
    setValues({name: "", imageUrl: "", weather: ""});
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
          onChange={handleChange}
          value={values.name}
          required
        />
      </label>
      <label htmlFor="garment-imageURL" className="modal__label">
        Image
        <input
          id="garment-imageURL"
          type="url"
          className="modal__input"
          name="imageUrl"
          placeholder="Image URL"
          onChange={handleChange}
          value={values.imageUrl}
          required
        />
      </label>
      <fieldset className="modal__radio-btns">
        <legend className="modal__radio-title">Select weather type:</legend>
        <label
          htmlFor="garment-hot"
          className={`modal__radio-label ${
            values.weather === "hot" ? "modal__radio-label_active" : ""
          }`}
        >
          <input
            type="radio"
            id="garment-hot"
            name="weather"
            value="hot"
            checked={values.weather === "hot"}
            className="modal__radio-input"
            onChange={handleChange}
          />
          Hot
        </label>
        <label
          htmlFor="garment-warm"
          className={`modal__radio-label ${
            values.weather === "warm" ? "modal__radio-label_active" : ""
          }`}
        >
          <input
            type="radio"
            id="garment-warm"
            name="weather"
            value="warm"
            className="modal__radio-input"
            onChange={handleChange}
            checked={values.weather === "warm"}
            required
          />
          Warm
        </label>
        <label
          htmlFor="garment-cold"
          className={`modal__radio-label ${
            values.weather === "cold" ? "modal__radio-label_active" : ""
          }`}
        >
          <input
            type="radio"
            id="garment-cold"
            name="weather"
            value="cold"
            className="modal__radio-input"
            onChange={handleChange}
            checked={values.weather === "cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
