import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function ClothesSection({
  onCardClick,
  clothingItems,
  onClick,
}) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your items</p>
        <button onClick={onClick} className="clothes-section__button">
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.filter((item) =>
          item.owner === currentUser._id
        )
        .map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}
