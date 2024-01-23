import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import concave from "images/concave.webp";
import ScrollArrow from "components/ScrollArrow";
import { Fade, Slide } from "react-awesome-reveal";
import { AppContext } from "context/AppContext";
import Slider from "react-slick";
import SafTitle from "components/SafTitle";

export default function Hero() {
  const { t, i18n, ready } = useTranslation();
  const { stories, setWindowSize } = useContext(AppContext);
  let sliderRef = useRef(null);

  const logoUnEu = require("images/logos/un-eu.webp");
  const logoUnWomen = require("images/logos/un-women.webp");
  const logoSpotlight = require("images/logos/spotlight.webp");

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
  }, []);

  const updateWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  return (
    <div className="section">
      <div className="relative pb-20 pt-10">
        {/* logo */}
        <div className="mx-auto mb-6 px-6 md:mb-12">
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

        <div className="flex flex-col items-stretch overflow-hidden bg-main text-white lg:flex-row">
          <div className="flex w-full max-w-xl flex-1 items-center">
            <div className="w-full flex-1 py-14 pl-6 md:pl-16">
              <SafTitle className="" color="white" maxWidth={390} />
            </div>
          </div>
          <div className="relative min-h-0 min-w-0 flex-1">
            <div
              className="absolute left-0 aspect-square h-full translate-x-[-50%] translate-y-[50%] bg-contain bg-no-repeat opacity-20"
              style={{ backgroundImage: `url(${concave})` }}
            ></div>
            <div className="absolute inset-0 z-10 w-14 bg-main-dark opacity-50"></div>
            <Slider ref={sliderRef} dots={true} arrows={false} autoplay={true}>
              {stories.map((story, key) => {
                return (
                  <div className="" key={key}>
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
          <div className="w-16 bg-main"></div>
        </div>
        <div className="flex">
          {stories.map((story, key) => {
            return (
              <div
                key={key}
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
