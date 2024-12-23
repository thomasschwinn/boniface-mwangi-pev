"use client";
import { useState } from "react";
import TheCarousel from "./TheCarousel";
export default function ModalContent({ onClose, index, arr }) {
  const [bg, setBg] = useState("bg-opacity-0 opacity-0");

  if (bg == "bg-opacity-0 opacity-0") {
    setTimeout(() => setBg("bg-opacity-100 opacity-100"), 50);
  }
  if (bg == "bg-opacity-100 opacity-0") {
    setTimeout(() => onClose(), 500);
  }

  return (
    <div
      className={`transition-all duration-300 fixed top-0 left-0 w-full h-full bg-black ${bg} flex items-center justify-center`}
    >
      <TheCarousel index={index} arr={arr} setBg={setBg} />
    </div>
  );
}
