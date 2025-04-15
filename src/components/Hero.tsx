import { HeroProps } from "@/app/_lib/definitions";
import clsx from "clsx";

const Hero = ({ slogan, title, text, children, className }: HeroProps) => {
  return (
    <section
      className={clsx(
        "text-center py-10 flex flex-col items-center justify-center gap-5 bg-brand-red pattern",
        className
      )}
    >
      <div className="max-w-[80%] mx-auto flex gap-5 flex-col items-center">
        <p className="bg-brand-yellow font-semibold uppercase p-2 rounded-lg text-pretty">
          {slogan}
        </p>
        <h1 className="p-5 uppercase text-3xl font-bold bg-black text-white text-balance">
          {title}
        </h1>
        <p className="text-brand-white">{text}</p>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Hero;
