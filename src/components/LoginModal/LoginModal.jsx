import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";
import { useEffect, useState } from "react";

export default function LoginModal({
  isOpen,
  onClose,
  onSignup,
  onOverlay,
  onLoginModalSubmit,
  onResetReady,
  displayError,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    onResetReady(handleReset);
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const checkValid = () => email.length >= 1 && password.length >= 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginModalSubmit({ email, password });
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <ModalWithForm
      buttonText="Log in"
      title="Log in"
      isOpen={isOpen}
      onClose={onClose}
      onOverlay={onOverlay}
      onSubmit={handleSubmit}
      isValid={checkValid()}
      extraButtonText="or Register"
      extraButtonOnClick={onSignup}
      extraButtonClassName="modal__register-btn"
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
      {displayError ? <p className="modal__error-msg">{displayError}</p> : null}
    </ModalWithForm>
  );
}
