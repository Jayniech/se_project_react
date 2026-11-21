import { useEffect } from "react";

export function useModalClose(isOpen, onClose, overlayRef) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleOverlayClick = (e) => {
      if (e.target === overlayRef.current) {
        onClose();
      }
    };

    overlayRef.current.addEventListener("click", handleOverlayClick);

    return() => {
      overlayRef.current.removeEventListener("click", handleOverlayClick);
    };
  }, [isOpen, onClose, overlayRef]);
}
