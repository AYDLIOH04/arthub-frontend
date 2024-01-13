import { isEscapeKey } from "@/utils";
import { useEffect } from "react";

const useEscapeKeydown = (callback: () => void, isOpen: boolean) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (isEscapeKey(event) && isOpen) {
        callback();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyPress);

      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [callback, isOpen]);
};

export default useEscapeKeydown;
