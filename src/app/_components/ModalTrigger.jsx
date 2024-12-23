"use client";
import ModalContent from "./ModalContet";
import { useState } from "react";
import { createPortal } from "react-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
export default function ModalTrigger({
  children,
  className,
  index,
  arr,
  width,
  height,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <AspectRatio
        ratio={width / height}
        className={className}
        onClick={() => setShowModal(true)}
      >
        {children}
      </AspectRatio>{" "}
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
