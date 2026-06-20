import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import defaultButton from "../../assets/like-btn_default.svg";
import likedButton from "../../assets/like-btn_liked.svg";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = ({ _id, isLiked }) => {
    onCardLike({ _id, isLiked });
  };

  const isLiked =
    isLoggedIn &&
    currentUser &&
    item.likes.some((id) => id === currentUser._id);

  const itemLikeButtonClassName = isLiked
    ? `card__image-btn--liked`
    : `card__image-btn`;

  return (
    <li className="card">
      <p className="card__title">{item.name}</p>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
      {isLoggedIn ? (
        <button
          style={{
            backgroundImage: isLiked
              ? `url(${likedButton})`
              : `url(${defaultButton})`,
          }}
          className={itemLikeButtonClassName}
          onClick={() => handleLike({ _id: item._id, isLiked })}
        ></button>
      ) : null}
    </li>
  );
}

export default ItemCard;
