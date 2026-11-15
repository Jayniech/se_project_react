import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";

export default function EditProfileModal({
  isOpen,
  onClose,
  onOverlay,
  onEditProfileModalSubmit,
  formId,
}) {
  const currentUser = useContext(CurrentUserContext);

  const {values, handleChange, setValues} = useForm({ name:"", avatar:"" });
  
  useEffect(() => {
  if (isOpen && currentUser) {
    setValues({ name: currentUser.name, avatar: currentUser.avatar});
  }
  }, [isOpen, currentUser]);

  const checkValid = () => values.name.length >= 1 && values.avatar.length >= 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProfileModalSubmit({ name: values.name, avatar: values.avatar });
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
          onChange={handleChange}
          value={values.name}
          required
        />
      </label>
      <label htmlFor="edit-avatar-imageURL" className="modal__label">
        Avatar
        <input
          id="edit-avatar-imageURL"
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
