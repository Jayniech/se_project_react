import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import {
  defaultCoordinates,
  apiKey,
  defaultClothingItems,
} from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import { getItems, addItems, deleteItems } from "../../utils/api";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });

  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [reset, setReset] = useState(() => {});

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleDeleteModalClick = () => {
    setActiveModal("delete");
  };

  const handleCloseClick = () => {
    setActiveModal("");
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseClick();
    }
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    addItems({ name, weather, imageUrl })
      .then((res) => {
        setClothingItems((prevItems) => [...prevItems, res]);
        handleCloseClick();
        reset();
      })
      .catch(console.error);
  };

  const handleDeleteModalSubmit = (selectedCard) => {
    deleteItems({ _id: selectedCard._id })
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => {
            return item._id !== selectedCard._id;
          })
        );
        handleCloseClick();
      })
      .catch(console.error);
  };

  const handleResetCall = (reset) => {
    setReset(() => reset);
  };

  useEffect(() => {
    getWeather(defaultCoordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);

    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseClick();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                // pass clothing items as a prop
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  onClick={handleAddClick}
                />
              }
            />
          </Routes>

          <Footer />
        </div>
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onClose={handleCloseClick}
          onOverlay={handleOverlayClick}
          onAddItemModalSubmit={handleAddItemModalSubmit}
          onResetReady={handleResetCall}
        />
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          handleCloseClick={handleCloseClick}
          handleOverlayClick={handleOverlayClick}
          onClick={handleDeleteModalClick}
        />
        <ConfirmationModal
          onClose={handleCloseClick}
          isOpen={activeModal === "delete"}
          onDelete={handleDeleteModalSubmit}
          selectedCard={selectedCard}
          onOverlay={handleOverlayClick}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
