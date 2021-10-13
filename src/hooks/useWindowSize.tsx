import { useState, useEffect } from "react";

type windowSizeProps = {
  width: number | undefined;
  height: number | undefined;
};

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<windowSizeProps>({
    width: undefined,
    height: undefined,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return windowSize;
}
