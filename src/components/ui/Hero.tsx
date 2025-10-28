import WelcomeText from "./elements/HeroText";
import SnowFlakes from "./elements/SnowFlakes";

export default function HeroSection() {
  return (
    <div
      className="
        w-full flex flex-col md:flex-row items-center 
        justify-center lg:justify-evenly 
        px-8 sm:px-10 md:px-16 lg:px-20
        text-black relative pt-24 sm:pt-28 md:pt-36 lg:pt-44
      "
    >
      {/* IMAGE CONTAINER */}
      <div
        className="
          relative flex justify-center md:justify-start
          lg:mr-4
        "
      >
        <div
          className="
            bg-center bg-cover 
            bg-[url('/assets/IMG_8981.JPEG')] 
            rounded-2xl 
            h-[60vh] w-[80vw] 
            sm:h-80 sm:w-72
            md:h-[420px] md:w-[420px]
            lg:h-[70vh] lg:w-[70vh]
            transition-all duration-300
          "
        >
          <SnowFlakes />
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div
        className="
          flex flex-col items-center md:items-start 
          text-center md:text-left 
          mt-8 md:mt-0 md:w-[45vw] lg:w-[40vw]
          px-4 sm:px-0
          md:ml-8 lg:ml-0
        "
      >
        <WelcomeText />
        <p className="mt-4 ml-[7px] text-base sm:text-lg md:text-xl">
          Faites partie de notre aventure en Laponie!
        </p>

        <small className="mt-6 text-[9px] sm:text-[10px] md:text-[12px] ml-[7px]">
          *Bures signifie Bienvenue en same du Nord.
        </small>
      </div>
    </div>
  );
}
