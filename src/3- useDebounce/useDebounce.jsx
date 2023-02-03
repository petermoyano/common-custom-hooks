import useTimeout from "@/2- useTimeout/useTimeout";
import { useEffect } from "react";

export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}
