import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent";
export function useWindowScroll() {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  function scrollTo(position) {
    const x = position.x ?? scroll.x;
    const y = position.y ?? scroll.y;
    window.scrollTo(x, y);
  }

  const handleScroll = (e) => {
    const newPos = {
      x: window.scrollX,
      y: window.scrollY
    };
    setScroll(newPos);
  };

  useWindowEvent("scroll", handleScroll);

  return [scroll, scrollTo];
}
