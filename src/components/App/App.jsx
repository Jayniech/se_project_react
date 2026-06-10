import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { defaultCoordinates, apiKey } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import { getItems, addItems, deleteItems } from "../../utils/api";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import { registerUser, loginUser } from "../../utils/auth";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [resetAdditem, setResetAddItem] = useState(() => {});
  const [resetRegister, setResetRegister] = useState(() => {});
  const [resetLogin, setResetLogin] = useState(() => {});

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

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleSignupClick = () => {
    setActiveModal("sign-up")
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
        setClothingItems((prevItems) => [res, ...prevItems]);
        handleCloseClick();
        resetAdditem();
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

  const handleRegisterModalSubmit = ({email, password, name, avatar }) => {
    registerUser({ email, password, name, avatar})
    .then((res) => {
        loginUser({ email, password })
        .then((res) => {
          localStorage.setItem("jwt", res.token);
          handleCloseClick();
          resetRegister();
        })
        .catch(console.error);
    })
    .catch(console.error);
  };

  const handleLoginModalSubmit = ({email, password }) => {
    loginUser({ email, password })
    .then((res) => {
        localStorage.setItem("jwt", res.token);
        handleCloseClick();
        resetLogin();
    })
    .catch(console.error);
  };

  const handleResetAddItemCall = (reset) => {
    setResetAddItem(() => reset);
  };

  const handleResetRegisterCall = (reset) => {
    setResetRegister(() => reset);
  };

  const handleResetLoginCall = (reset) => {
    setResetLogin(() => reset);
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
          onResetReady={handleResetAddItemCall}
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
        <RegisterModal
          isOpen={activeModal === "sign-up"}
          onClose={handleCloseClick}
          onLogin={handleLoginClick}
          onOverlay={handleOverlayClick}
          onRegisterModalSubmit={handleRegisterModalSubmit}
          onResetReady={handleResetRegisterCall}
        />
        <LoginModal
          isOpen={activeModal === "login"}
          onClose={handleCloseClick}
          onSignup={handleSignupClick}
          onOverlay={handleOverlayClick}
          onLoginModalSubmit={handleLoginModalSubmit}
          onResetReady={handleResetLoginCall}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
