import { useEffect, useRef } from "react";

export default function useResetAnimation(className, dependencies = []) {
 const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.classList.remove(className);
    void node.offsetWidth;
    node.classList.add(className);
  }, dependencies);

  return ref;
}
