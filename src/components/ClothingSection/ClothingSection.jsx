import "./ClothingSection.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

export default function ClothingSection({ onCardClick }) {
  return (
    <div className="clothing-section">
      <div className="clothing-section__header">
        <p className="clothing-section__title">Your items</p>
        <button className="clothing-section__button">+ Add new</button>
      </div>
      <ul className="clothes-section__items">
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}
