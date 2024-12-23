"use client";
import ModalContent from "./ModalContet";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function ModalTrigger({ children, className, index, arr }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={className} onClick={() => setShowModal(true)}>
        {children}
      </div>{" "}
      {showModal &&
        createPortal(
          <ModalContent
            index={index}
            onClose={() => setShowModal(false)}
            arr={arr}
          />,
          document.body
        )}
    </>
  );
}
