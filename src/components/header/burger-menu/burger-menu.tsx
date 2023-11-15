'use client'

import { useState } from "react";
import BurgerButton from "./burger-button";
import BurgerPopup from "./burger-popup";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BurgerButton toggleMenu={toggleMenu} isOpen={isOpen} />
      <BurgerPopup toggleMenu={toggleMenu} isOpen={isOpen} />
    </>
  );
}
