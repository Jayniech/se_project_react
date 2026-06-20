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
  formId,
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

  const checkValid = () =>
    email.length >= 1 &&
    password.length >= 1 &&
    name.length >= 1 &&
    avatar.length >= 1;

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
    formId={formId}
      buttonText="Next"
      title="Sign-up"
      isOpen={isOpen}
      onClose={onClose}
      onOverlay={onOverlay}
      isValid={checkValid()}
      onSubmit={handleSubmit}
      extraButtonText="or Log In"
      extraButtonOnClick={onLogin}
      extraButtonClassName="modal__login-btn"
    >
      <label htmlFor="register-email-input" className="modal__label">
        Email
        <input
          id="register-email-input"
          type="email"
          className="modal__input"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
          required
        />
      </label>
      <label htmlFor="register-password-input" className="modal__label">
        Password
        <input
          id="register-password-input"
          type="password"
          className="modal__input"
          name="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
          required
        />
      </label>
      <label htmlFor="register-name-input" className="modal__label">
        Name
        <input
          id="register-name-input"
          type="text"
          className="modal__input"
          name="name"
          placeholder="Name"
          onChange={handleNameChange}
          value={name}
          required
        />
      </label>
      <label htmlFor="register-avatar-imageURL" className="modal__label">
        Avatar
        <input
          id="register-avatar-imageURL"
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
