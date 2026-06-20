import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

export default function Profile({
  onCardClick,
  clothingItems,
  onClick,
  onEditProfileClick,
  onLogOut,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          onEditProfileClick={onEditProfileClick}
          onLogOut={onLogOut}
        />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          onClick={onClick}
        />
      </section>
    </div>
  );
}
