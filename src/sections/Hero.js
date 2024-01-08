import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import concave from "images/concave.png";
import logoUnWomen from "images/logos/un-women.png";
import logoSpotlight from "images/logos/spotlight.png";
import logoUnEu from "images/logos/un-eu.png";
import logoUn from "images/logos/un.png";
import logoEu from "images/logos/eu.png";
import ScrollArrow from "components/ScrollArrow";
import { Fade, Slide } from "react-awesome-reveal";
import { AppContext } from "context/AppContext";
import Slider from "react-slick";
import SafTitle from "components/SafTitle";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

export default function Hero() {
  const { t, i18n, ready } = useTranslation();
  const { stories } = useContext(AppContext);
  let sliderRef = useRef(null);
  const [width, height] = useWindowSize();

  return (
    <div className="section">
      <div className="relative pb-20 pt-10">
        <div className="mx-auto mb-12">
          <div className="flex items-end justify-center">
            <div className="flex items-end gap-4 border-r pr-2 md:gap-10 md:pr-8">
              <div>
                <img src={logoSpotlight} alt="" className="max-h-[70px]" />
              </div>
              <div>
                <img src={logoUnEu} alt="" className="max-h-[94px]" />
              </div>
            </div>
            <div className="pl-2 md:pl-8">
              <img src={logoUnWomen} alt="" className="max-h-[70px]" />
            </div>
          </div>
        </div>
        <div className="flex items-stretch overflow-hidden bg-main text-white">
          <div className="flex w-full max-w-xl flex-1 items-center">
            {/* <div className="max-w-xl py-14 pl-16 text-left">
              <Fade cascade direction="up" damping={0.3}>
                <div className="max-w-xl pr-10">
                  <h1 className="mb-2">{t("hero.heading")}</h1>
                </div>
                <div className="max-w-xl pr-10">
                  <p className="text-xl font-medium">{t("hero.subheading")}</p>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <div className="text-xl uppercase italic tracking-widest">
                    {t("hero.subheading-2")}
                  </div>
                  <div className="flex-grow">
                    <Fade direction="right" delay={1200}>
                      <div className=" border-top-white flex-grow border-t"></div>
                    </Fade>
                  </div>
                </div>
              </Fade>
            </div> */}

            <div className="w-full flex-1 py-14 pl-16">
              <SafTitle className="" color="white" maxWidth={390} />
            </div>
          </div>
          <div className="relative min-h-0 min-w-0 flex-1">
            <div
              className="absolute left-0 aspect-square h-full translate-x-[-50%] translate-y-[50%] bg-contain bg-no-repeat opacity-20"
              style={{ backgroundImage: `url(${concave})` }}
            ></div>
            <div className="absolute inset-0 z-10 w-14 bg-main opacity-50"></div>
            <Slider ref={sliderRef} dots={true} arrows={false} autoplay={true}>
              {stories.map((story, key) => {
                return (
                  <div className="">
                    <div
                      className="bg pt-[55%]"
                      style={{
                        backgroundImage: `url(${story?.thumbnail})`,
                      }}
                    ></div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="w-16 bg-main-dark"></div>
        </div>
        <div className="flex">
          {stories.map((story, key) => {
            return (
              <div
                className="relative flex-grow cursor-pointer after:absolute after:inset-0 after:bg-main after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:after:opacity-20"
                onClick={() => sliderRef.current.slickGoTo(key)}
              >
                <div
                  className="bg pt-[66%]"
                  style={{
                    backgroundImage: `url(${story?.thumbnail})`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <ScrollArrow />
    </div>
  );
}
