import { RefObject, useEffect } from "react";

type Handler = (event: MouseEvent) => void;

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
): void {
  const handleEvent = (event: MouseEvent) => {
    const el = ref?.current;

    if (!el || el.contains(event.target as Node)) {
      return;
    }

    handler(event);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleEvent);

    return () => {
      document.removeEventListener('mousedown', handleEvent);
    };
  }, [handleEvent]);
}
