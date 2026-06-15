import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";

export default function RegisterModal({
  isOpen,
  onClose,
  onOverlay,
  onResetReady,
  onEditProfileModalSubmit,
}) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    onResetReady(handleReset);
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProfileModalSubmit({ name, avatar });
  };

  const handleReset = () => {
    setName("");
    setAvatar("");
  };

  return (
    <ModalWithForm
      buttonText="Save changes"
      title="Change profile data"
      isOpen={isOpen}
      onClose={onClose}
      onOverlay={onOverlay}
      onSubmit={handleSubmit}
    >
      <label htmlFor="user-name-input" className="modal__label">
        Name
        <input
          id="user-name-input"
          type="text"
          className="modal__input"
          name="name"
          placeholder="Name"
          onChange={handleNameChange}
          value={name}
          required
        />
      </label>
      <label htmlFor="avatar-imageURL" className="modal__label">
        Avatar
        <input
          id="avatar-imageURL"
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
