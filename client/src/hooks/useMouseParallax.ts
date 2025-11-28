import { useEffect, useState, useRef, useCallback } from "react";

interface MousePosition {
  x: number;
  y: number;
}

interface ParallaxValues {
  x: number;
  y: number;
  rotateX: number;
  rotateY: number;
}

export function useMouseParallax(
  sensitivity: number = 0.05,
  maxRotation: number = 15
): ParallaxValues {
  const [parallax, setParallax] = useState<ParallaxValues>({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const deltaX = (e.clientX - centerX) / centerX;
      const deltaY = (e.clientY - centerY) / centerY;

      setParallax({
        x: deltaX * sensitivity * 100,
        y: deltaY * sensitivity * 100,
        rotateX: -deltaY * maxRotation,
        rotateY: deltaX * maxRotation,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [sensitivity, maxRotation]);

  return parallax;
}

export function useElementMouseParallax<T extends HTMLElement = HTMLDivElement>(
  sensitivity: number = 0.1
) {
  const ref = useRef<T>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      setTransform({
        x: deltaX * sensitivity * 20,
        y: deltaY * sensitivity * 20,
        rotateX: -deltaY * sensitivity * 10,
        rotateY: deltaX * sensitivity * 10,
      });
    },
    [sensitivity]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return { ref, transform };
}

export function useMagneticButton<T extends HTMLElement = HTMLButtonElement>(
  strength: number = 0.3
) {
  const ref = useRef<T>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      setPosition({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return { ref, position };
}
