import { useEffect, useRef, useState } from "react";

export function useCountUp(
  end: number,
  duration: number = 1.5,
  startCounting: boolean = false,
) {
  const [count, setCount] = useState(0);
  const prevEndRef = useRef(0);

  useEffect(() => {
    if (!startCounting) return;

    const startValue = prevEndRef.current;
    const difference = end - startValue;
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startValue + easeOut * difference));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        prevEndRef.current = end;
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
}
