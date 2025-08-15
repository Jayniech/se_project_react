import "./ClothingSection.css";
import ItemCard from "../ItemCard/ItemCard";

export default function ClothingSection({
  onCardClick,
  clothingItems,
  onClick,
}) {
  console.log(clothingItems);
  return (
    <div className="clothing-section">
      <div className="clothing-section__header">
        <p className="clothing-section__title">Your items</p>
        <button onClick={onClick} className="clothing-section__button">
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}
