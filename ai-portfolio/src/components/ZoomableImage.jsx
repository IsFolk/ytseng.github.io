import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./ZoomableImage.module.css";

export default function ZoomableImage({ src, alt = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={styles.zoomableImage}
        onClick={() => setIsOpen(true)}
      />

      {isOpen &&
        createPortal(
          <div className={styles.viewer} onClick={() => setIsOpen(false)}>
            <button
              className={styles.close}
              onClick={() => setIsOpen(false)}
              aria-label="Close image"
            >
              ×
            </button>

            <img
              src={src}
              alt={alt}
              className={styles.viewerImage}
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </>
  );
}