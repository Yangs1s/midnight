import { useRef, useCallback, useEffect } from "react";

function useLongPress(callback: () => void, ms = 500) {
  const longPressTriggeredRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const start = useCallback(() => {
    longPressTriggeredRef.current = false;
    timerRef.current = setTimeout(() => {
      callback();
      longPressTriggeredRef.current = true;
    }, ms);
  }, [callback, ms]);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop,
    longPressTriggeredRef,
  };
}

export default useLongPress;
