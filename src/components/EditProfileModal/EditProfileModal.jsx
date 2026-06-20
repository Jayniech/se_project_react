import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditProfileModal({
  isOpen,
  onClose,
  onOverlay,
  onResetReady,
  onEditProfileModalSubmit,
  formId,
}) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
  if (isOpen && currentUser) {
    setName(currentUser.name);
    setAvatar(currentUser.avatar);
  }
}, [isOpen, currentUser]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const checkValid = () => name.length >= 1 && avatar.length >= 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProfileModalSubmit({ name, avatar });
  };

  return (
    <ModalWithForm
      formId={formId}
      buttonText="Save changes"
      title="Change profile data"
      isOpen={isOpen}
      onClose={onClose}
      onOverlay={onOverlay}
      isValid={checkValid()}
      onSubmit={handleSubmit}
    >
      <label htmlFor="edit-name-input" className="modal__label">
        Name
        <input
          id="edit-name-input"
          type="text"
          className="modal__input"
          name="name"
          placeholder="Name"
          onChange={handleNameChange}
          value={name}
          required
        />
      </label>
      <label htmlFor="edit-avatar-imageURL" className="modal__label">
        Avatar
        <input
          id="edit-avatar-imageURL"
          type="url"
          className="modal__input"
          name="link"
          placeholder="Avatar"
          onChange={handleAvatarChange}
          value={avatar}
          required
        />
      </label>
    </ModalWithForm>
  );
}
