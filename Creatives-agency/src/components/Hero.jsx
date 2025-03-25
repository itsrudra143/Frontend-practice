import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
const Hero = () => {
  return (
    <div
      id="home"
      className="w-full h-max flex flex-col relative items-center justify-center"
    >
      <img
        src="/Images/sec1-bg.png"
        alt=""
        className="w-full h-full object-cover relative"
      />
      <div className="absolute w-full h-full flex items-end justify-center">
        <div className="h-3/5 flex flex-col items-center justify-between mb-10 sm:justify-end">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-gotham uppercase  text-[9.563rem] font-bold text-[#f5f5f5] sm:text-[50px] xl:tracking-hero-spacing md:text-[70px] lg:text-[120px]">
              creatives
            </h1>
            <p className="text-2xl xl:tracking-[1.188rem] leading-[3.188rem] uppercase text-[#11749e] font-medium text-center font-gotham sm:text-md lg:tracking-[10px]">
              powered by chitkara university
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:hidden md:gap-2 md:mt-3">
            <p className="text-[0.813rem] leading-5 text-white font-normal font-open-sans">
              Scroll Down
            </p>
            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-[#f5f5f5] text-xl tracking-[-0.063rem] uppercase transition-all ease-in-out hover:bg-white cursor-pointer hover:text-black md:w-10 md:h-10 md:text-lg">
              <a href="#key">
                <FontAwesomeIcon icon={faChevronDown} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
