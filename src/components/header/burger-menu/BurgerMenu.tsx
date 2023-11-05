'use client'

import { useState } from "react";
import BurgerButton from "./BurgerButton";
import BurgerPopup from "./BurgerPopup";

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
