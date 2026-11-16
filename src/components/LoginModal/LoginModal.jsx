import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

export default function LoginModal({
  isOpen,
  onClose,
  onSignup,
  onOverlay,
  onLoginModalSubmit,
  onResetReady,
  displayError,
  formId,
  buttonText
}) {
  const {values, handleChange, setValues} = useForm({ email:"", password:"" });
  
  useEffect(() => {
    onResetReady(handleReset);
  }, []);

  const checkValid = () => values.email.length >= 1 && values.password.length >= 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginModalSubmit({ email: values.email, password: values.password });
  };

  const handleReset = () => {
    setValues({ email: "", password: ""});
  };

  return (
    <ModalWithForm
      formId={formId}
      buttonText={buttonText}
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
      <label htmlFor="login-email-input" className="modal__label">
        Email
        <input
          id="login-email-input"
          type="email"
          className="modal__input"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
          required
        />
      </label>
      <label htmlFor="login-password-input" className="modal__label">
        Password
        <input
          id="login-password-input"
          type="password"
          className="modal__input"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
          required
        />
      </label>
      {displayError ? <p className="modal__error-msg">{displayError}</p> : null}
    </ModalWithForm>
  );
}
