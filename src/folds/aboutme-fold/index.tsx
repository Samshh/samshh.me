import animateText from "@/animations/animateText";
import { useGradientText } from "@/animations/useGradientText";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
gsap.registerPlugin(TextPlugin);

export default function AboutMeFold() {
  const trigger = useRef(null);
  const text2 = useRef(null);
  const text = useGradientText();

  useGSAP(() => {
    animateText(text, trigger, "Sur moi", "About me", 2);
    animateText(
      text2,
      trigger,
      "Un développeur React dédié avec une profonde appréciation pour divers langages de codage, un passionné d'anime enthousiaste qui aime explorer différents genres, et un musicien passionné.",
      "A dedicated React developer with a deep appreciation for various coding languages, an enthusiastic anime aficionado who enjoys exploring different genres, and a passionate musician.",
      2
    );
  });

  const handleMouseEnter1 = () => {
    gsap.to(text.current, { text: "Sur moi", duration: 0.5 });
  };

  const handleMouseLeave1 = () => {
    gsap.to(text.current, { text: "About me", duration: 0.5 });
  };

  return (
    <main
      ref={trigger}
      className="h-auto flex flex-col md:grid md:grid-cols-2 md:h-screen items-center justify-center px-4 py-4 max-w-[1280px] min-h-[720px] mx-auto select-none gap-[1rem]"
    >
      <div className="flex flex-col gap-[1rem]">
        <div>
          <h1 className="text-[#333333] w-[238px]" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
            <span ref={text}></span>.
          </h1>
        </div>
        <div>
          <h5 ref={text2} className="font-light flex flex-wrap"></h5>
        </div>
      </div>
    </main>
  );
}
