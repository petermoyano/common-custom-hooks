import { useCallback, useEffect, useRef } from "react";
//delay is how long you want to wait before the callback runs
export default function useTimeout(callback, delay) {
  //we use refs in case tje TimeoutComponent re renders, we dont want to create new functions every time it does
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}
