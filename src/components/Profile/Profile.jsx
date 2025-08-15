import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothingSection from "../ClothingSection/ClothingSection";

export default function Profile({ onCardClick, clothingItems, onClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-items">
        <ClothingSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          onClick={onClick}
        />
      </section>
    </div>
  );
}
