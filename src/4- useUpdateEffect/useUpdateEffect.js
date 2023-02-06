import { useEffect, useRef } from "react";
// The whole idea behind this hook is to avoid running the effect when mounting the component on the first render.
//And notice how he uses a Ref for the boolean value firstRenderRef. It doesn't make sense to use state
// since we are not going to use that value to update the UI using a state wouldn't make sense
export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
