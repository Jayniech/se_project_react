import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";
import { useEffect, useState } from "react";

export default function LoginModal({
  isOpen,
  onClose,
  onSignup,
  onOverlay,
  onLoginModalSubmit,
  onResetReady,
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
      onSignup={onSignup}
      onOverlay={onOverlay}
      onSubmit={handleSubmit}
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
      <button onClick={onSignup} type="button" className="modal__login-btn">or Register</button>
    </ModalWithForm>
  );
}
