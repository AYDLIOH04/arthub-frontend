import { useState, useEffect, useRef, RefObject } from 'react';

const useHover = (
  onMouseEnterCallback?: () => void,
  onMouseLeaveCallback?: () => void
): [RefObject<HTMLDivElement>, boolean] => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    setIsHovered(true);
    if (onMouseEnterCallback) {
      onMouseEnterCallback();
    }
  };

  const onMouseLeave = () => {
    setIsHovered(false);
    if (onMouseLeaveCallback) {
      onMouseLeaveCallback();
    }
  };

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('mouseenter', onMouseEnter);
      node.addEventListener('mouseleave', onMouseLeave);

      return () => {
        node.removeEventListener('mouseenter', onMouseEnter);
        node.removeEventListener('mouseleave', onMouseLeave);
      };
    }
  }, [onMouseEnterCallback, onMouseLeaveCallback]);

  return [ref, isHovered];
};

export default useHover;
