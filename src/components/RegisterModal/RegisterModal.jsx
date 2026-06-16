import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";
import { useEffect, useState } from "react";

export default function RegisterModal({
  isOpen,
  onClose,
  onLogin,
  onOverlay,
  onRegisterModalSubmit,
  onResetReady,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    onResetReady(handleReset);
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterModalSubmit({ email, password, name, avatar });
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setName("");
    setAvatar("");
  };

  return (
    <ModalWithForm
      buttonText="Next"
      title="Sign-up"
      isOpen={isOpen}
      onClose={onClose}
      onOverlay={onOverlay}
      onSubmit={handleSubmit}
      extraButtonText="or Log In"
      extraButtonOnClick={onLogin}
      extraButtonClassName="modal__login-btn"
    >
      <label htmlFor="user-email-input" className="modal__label">
        Email
        <input
          id="user-email-input"
          type="email"
          className="modal__input"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
          required
        />
      </label>
      <label htmlFor="user-password-input" className="modal__label">
        Password
        <input
          id="user-password-input"
          type="password"
          className="modal__input"
          name="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
          required
        />
      </label>
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
