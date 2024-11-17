import animateText from "@/animations/animateText";
import { useGradientText } from "@/animations/useGradientText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ExperienceStruct from "./components/ExperienceStruct";

export default function ExperienceFold() {
  const text = useGradientText();
  const trigger = useRef(null);
  const experienceRef1 = useRef(null);
  const experienceRef2 = useRef(null);
  const experienceRef3 = useRef(null);

  useGSAP(() => {
    animateText(text, trigger, "Parcours", "Experience", 2);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
        onEnter: () => {
          document.title = "Sam Dacara | Experience";
        },
        onLeaveBack: () => {
          document.title = "Sam Dacara | About";
        },
      },
      defaults: { ease: "power2.out" },
    });

    tl.fromTo(
      [experienceRef1.current, experienceRef2.current, experienceRef3.current],
      { opacity: 0, y: 50, x: -50 },
      { opacity: 1, y: 0, x: 0, stagger: 0.15, duration: 1, ease: "power3.out" }
    );
  });

  const handleMouseEnter1 = () => {
    gsap.to(text.current, { text: "Parcours", duration: 0.5 });
  };

  const handleMouseLeave1 = () => {
    gsap.to(text.current, { text: "Experience", duration: 0.5 });
  };

  return (
    <div
      ref={trigger}
      className="h-full px-4 py-4 flex flex-col items-start justify-center min-h-screen max-w-[1280px] mx-auto select-none gap-[1rem]"
    >
      <div className="w-full h-auto flex flex-col">
        <h1 className="w-[290px]" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
          <span ref={text}></span>
          <span className="text-[#333333]">.</span>
        </h1>
      </div>
      <div className="flex flex-col">
        <div ref={experienceRef1}>
          <ExperienceStruct
            title="Freelance Work"
            role="Front-end Developer & Web Designer (2022-Present)"
          />
        </div>
        <div ref={experienceRef2}>
          <ExperienceStruct
            title="Mapúa Malayan Colleges Mindanao"
            role="OCP Lead Front-end Developer (2024-Present)"
          />
        </div>
        <div ref={experienceRef3}>
          <ExperienceStruct
            title="Google Developer Groups Davao"
            role="Technical Staff (2024-Present)"
          />
        </div>
      </div>
    </div>
  );
}