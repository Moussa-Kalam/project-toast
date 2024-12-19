import React from "react";

const useKeydown = (key, callback) => {
  React.useEffect(() => {
    const keydownHandler = (event) => {
      if (event.code === key) {
        callback(event);
      }
    };

    window.addEventListener("keydown", keydownHandler);

    return () => window.removeEventListener("keydown", keydownHandler);
  }, [key, callback]);
};

export default useKeydown;
