import { useGradientText } from "@/animations/useGradientText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import useAnimateButton from "@/animations/animateButton";

gsap.registerPlugin(ScrollTrigger);

interface ContactFoldProps {
  footerRef: React.RefObject<HTMLDivElement>;
}

export default function ContactFold({ footerRef }: ContactFoldProps) {
  const textRef1 = useGradientText();
  const textRef2 = useGradientText();
  const textRef3 = useGradientText();
  const textGithub = useRef(null);
  const textLinkedin = useRef(null);
  const buttonsRef1 = useRef(null);
  const buttonsRef2 = useRef(null);
  const contactTrigger = useRef(null);
  const headlineRef = useRef(null);

  useAnimateButton(textGithub, buttonsRef1, "/SAMSHH", "GITHUB", 0.5);
  useAnimateButton(textLinkedin, buttonsRef2, "/SAMSHH", "LINKED IN", 0.5);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactTrigger.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
        onEnter: () => {
          document.title = "Sam Dacara | Contact";
        },
        onLeaveBack: () => {
          document.title = "Sam Dacara | Projects";
        },
      },
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    tl.fromTo(
      contactTrigger.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 }
    )
      .fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.5"
      )
      .fromTo(
        buttonsRef1.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        "-=0.5"
      )
      .fromTo(
        buttonsRef2.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        "-=0.5"
      )
      .fromTo(textRef1.current, { text: "lien" }, { text: "connect" }, "-=0.5")
      .fromTo(textRef2.current, { text: "créer" }, { text: "create" }, "-=0.5")
      .fromTo(
        textRef3.current,
        { text: "incroyable" },
        { text: "amazing" },
        "-=0.5"
      );
  });

  return (
    <div
      ref={contactTrigger}
      className="h-screen px-4 py-4 max-w-[1280px] min-h-[400px] mx-auto flex flex-col justify-center items-start select-none relative"
    >
      <div className="flex flex-grow flex-col justify-center items-start gap-[1.5rem] md:w-1/2">
        <div ref={headlineRef}>
          <em className="font-normal text-[1.50rem] md:text-[1.75rem] text-[#535353] font-serif flex items-center gap-[0.25rem]">
            <Icon icon="mdi:location" /> Davao City | Philippines
          </em>
          <h1>
            Let's <span ref={textRef1}></span> and <span ref={textRef2}></span>{" "}
            something <span ref={textRef3}></span>
            <span className="text-[#333333]">.</span>
          </h1>
        </div>
        <div className="flex justify-start flex-wrap items-start gap-[1rem]">
          <a
            href="https://github.com/Samshh/"
            target="_blank"
            rel="noopener"
            title="GitHub"
          >
            <Button ref={buttonsRef1}>
              <div className="flex justify-center items-center gap-[.5rem]">
                <Icon className="text-[23px]" icon="mdi:github" />
                <h6 className="font-light">
                  <span ref={textGithub}>GITHUB</span>
                </h6>
              </div>
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/samshh/"
            target="_blank"
            rel="noopener"
            title="LinkedIn"
          >
            <Button ref={buttonsRef2}>
              <div className="flex justify-center items-center gap-[.5rem]">
                <Icon className="text-[19px]" icon="bi:linkedin" />
                <h6 className="font-light">
                  <span ref={textLinkedin}>LINKED IN</span>
                </h6>
              </div>
            </Button>
          </a>
        </div>
      </div>
      <footer
        ref={footerRef}
        className="w-full max-w-[1280px] flex flex-col md:justify-between md:flex-row items-center"
      >
        <p className="font-normal text-[1rem] text-[#535353] font-serif">
          <span className="font-special text-[1.75rem] mr-[0.5rem]">
            Samuel
          </span>
          <em> | © All Rights Reserved</em>
        </p>
        <em className="font-normal text-[1rem] text-[#535353] font-serif">
          Powered by Vercel
        </em>
      </footer>
    </div>
  );
}
