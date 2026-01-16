import { useEffect, useState } from "react";

// animation number couting up
export function useCountUp(
  target: number,
  start: boolean,
  duration = 1500
): { value: number; done: boolean } {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    setDone(false);

    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        setDone(true);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, target, duration]);

  return { value: count, done };
}
