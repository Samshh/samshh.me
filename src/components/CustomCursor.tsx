import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface CustomCursorProps {
  hasStarted?: boolean;
}

export default function CustomCursor({ hasStarted }: CustomCursorProps) {
  const bigBallRef = useRef<HTMLDivElement>(null);
  const smallBallRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    setIsActive(true);
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }
    inactivityTimeoutRef.current = setTimeout(() => {
      if (!isHoveredRef.current) {
        setIsActive(false);
      }
    }, 2000);

    gsap.to(bigBallRef.current, {
      x: e.clientX - 15,
      y: e.clientY - 15,
      duration: 0.4,
    });
    gsap.to(smallBallRef.current, {
      x: e.clientX - 5,
      y: e.clientY - 7,
      duration: 0.1,
    });
  };

  const handleMouseHover = () => {
    isHoveredRef.current = true;
    setIsActive(true);
    gsap.to([bigBallRef.current, smallBallRef.current], {
      scale: 4,
      duration: 0.3,
      stagger: 0.1,
    });
  };

  const handleMouseHoverOut = () => {
    isHoveredRef.current = false;
    gsap.to([bigBallRef.current, smallBallRef.current], {
      scale: 1,
      duration: 0.3,
      stagger: 0.1,
    });
  };

  useEffect(() => {
    if (!hasStarted) return;

    const addEventListeners = () => {
      document.body.addEventListener("mousemove", handleMouseMove);

      const hoverables = document.querySelectorAll(".hoverable");
      hoverables.forEach((hoverable) => {
        hoverable.addEventListener("mouseenter", handleMouseHover);
        hoverable.addEventListener("mouseleave", handleMouseHoverOut);
      });
    };

    const removeEventListeners = () => {
      document.body.removeEventListener("mousemove", handleMouseMove);

      const hoverables = document.querySelectorAll(".hoverable");
      hoverables.forEach((hoverable) => {
        hoverable.removeEventListener("mouseenter", handleMouseHover);
        hoverable.removeEventListener("mouseleave", handleMouseHoverOut);
      });
    };
    const cursor = cursorRef.current;
    gsap.set(cursor, {
      opacity: 1,
      delay: 1.5,
      duration: 0.5,
      ease: "power2.inOut",
    });

    addEventListeners();

    const observer = new MutationObserver(addEventListeners);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      removeEventListeners();
      observer.disconnect();
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    gsap.to([bigBallRef.current, smallBallRef.current], {
      opacity: isActive ? 1 : 0,
      duration: 0.5,
    });
  }, [isActive]);

  return (
    <div ref={cursorRef} className="opacity-0">
      <div
        ref={bigBallRef}
        className="fixed top-0 left-0 mix-blend-difference pointer-events-none w-[30px] h-[30px] bg-[#333333] opacity-50 rounded-full hidden sm:block -z-10"
      />
      <div
        ref={smallBallRef}
        className="fixed top-0 left-0 z-40 pointer-events-none mix-blend-difference w-[10px] h-[10px] bg-[#e7e7e7] rounded-full hidden sm:block"
      />
    </div>
  );
}
