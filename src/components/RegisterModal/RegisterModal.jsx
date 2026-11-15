import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

export default function RegisterModal({
  isOpen,
  onClose,
  onLogin,
  onOverlay,
  onRegisterModalSubmit,
  onResetReady,
  formId,
}) {
  const {values, handleChange, setValues} = useForm({ email:"", password:"", name:"", avatar: "" });

  useEffect(() => {
    onResetReady(handleReset);
  }, []);

  const checkValid = () =>
    values.email.length >= 1 &&
    values.password.length >= 1 &&
    values.name.length >= 1 &&
    values.avatar.length >= 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterModalSubmit({ 
      email: values.email, 
      password: values.password, 
      name: values.name, 
      avatar: values.avatar });
  };

  const handleReset = () => {
    setValues({ email:"", password:"", name:"", avatar: "" })
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
          onChange={handleChange}
          value={values.email}
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
          onChange={handleChange}
          value={values.password}
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
          onChange={handleChange}
          value={values.name}
          required
        />
      </label>
      <label htmlFor="register-avatar-imageURL" className="modal__label">
        Avatar
        <input
          id="register-avatar-imageURL"
          type="url"
          className="modal__input"
          name="avatar"
          placeholder="Avatar"
          onChange={handleChange}
          value={values.avatar}
          required
        />
      </label>
    </ModalWithForm>
  );
}
