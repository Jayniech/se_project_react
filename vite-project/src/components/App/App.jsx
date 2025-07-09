import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Footer from "../Footer/Footer";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
        <Footer />
      </div>
      <ModalWithForm buttonText="Add garment" title="New garment">
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
      </ModalWithForm>
    </div>
  );
}

export default App;
