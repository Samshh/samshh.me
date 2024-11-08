import { useGradientText } from "@/animations/useGradientText";
import SVGGrainEffect from "./SVGGrainEffect";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function PageNotFound() {
  const navigate = useNavigate();
  const textRef = useGradientText();

  useEffect(() => {
    document.title = "Sam Dacara | 404";
  }, []);

  return (
    <div className="relative w-full h-screen justify-center items-center flex flex-col select-none gap-[0.5rem]">
      <SVGGrainEffect />
      <em className="text-center text-[#535353] flex flex-col gap-[0.5rem]">
        <p className="text-[0.7rem]">(A lost star of the night)</p>
        <h4 className="font-thin font-special astra">Astra perdita noctis</h4>
      </em>
      <Button className="px-[2rem]" onClick={() => navigate("/")}>
        <h6 ref={textRef} className="font-light">
          GO BACK
        </h6>
      </Button>
      <div className="fixed bottom-4 text-center px-[1rem]">
        <p className="font-normal font-serif text-[1rem] md:text-[1.25rem] text-[#535353]">
          404
        </p>
        <p className="font-normal font-serif text-[0.6rem] md:text-[0.8rem] text-[#535353]">
          *Page not found*
        </p>
      </div>
    </div>
  );
}
