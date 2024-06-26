import React, { useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import concave from "images/concave.webp";
import ScrollArrow from "components/ScrollArrow";
import { AppContext } from "context/AppContext";
import Slider from "react-slick";
import SafTitle from "components/SafTitle";

export default function Hero() {
  const { i18n } = useTranslation();

  const { stories, setWindowSize } = useContext(AppContext);
  let sliderRef = useRef(null);

  // const logoUnEu = require("images/logos/un-eu.webp");
  // const logoUnWomen = require("images/logos/un-women.webp");
  // const logoSpotlight = require("images/logos/spotlight.webp");
  const logoPartners = require("images/logos/partner-logos.webp");

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
        {/* <div className="mx-auto mb-6 px-4 md:mb-12">
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
        </div> */}

        <div className="mx-auto mb-6 px-2 md:mb-12">
          <img src={logoPartners} alt="" className="mx-auto max-h-[111px]" />
        </div>

        <div className=" flex flex-col items-stretch overflow-hidden bg-main text-white lg:flex-row">
          <div className=" relative z-10 flex w-full flex-1 items-center overflow-hidden lg:max-w-xl">
            <div className="w-full flex-1 flex-col py-14  pl-4 md:pl-16">
              <SafTitle className="" color="white" maxWidth={390} fullwidth={false} />
              <div className="mt-10">
                <div className="mb-1 text-xs">Select language</div>
                <div className="flex gap-2">
                  <button
                    className={`cursor-pointer border border-white px-4 py-0.5 text-xs ${i18n.language === "en" ? "bg-white text-main-dark" : ""}
                    }`}
                    onClick={() => {
                      i18n.changeLanguage("en");
                    }}
                  >
                    English
                  </button>
                  <button
                    className={`cursor-pointer border border-white px-4 py-0.5 text-xs ${i18n.language === "id" ? "bg-white text-main-dark" : ""}`}
                    onClick={() => {
                      i18n.changeLanguage("id");
                    }}
                  >
                    Indonesia
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute right-0 aspect-square h-[80%] translate-x-[70%] translate-y-[65%] bg-contain bg-no-repeat md:translate-x-[50%]" style={{ backgroundImage: `url(${concave})` }}></div>
          </div>
          <div className="relative min-h-0 min-w-0 flex-1">
            {/* <div className="absolute left-0 aspect-square h-[80%] translate-x-[-50%] translate-y-[75%] bg-contain bg-no-repeat" style={{ backgroundImage: `url(${concave})` }}></div> */}
            <div className="absolute inset-0 z-10 w-14 bg-main-dark opacity-50"></div>
            <Slider ref={sliderRef} dots={true} arrows={false} autoplay={true}>
              {stories.map((story, key) => {
                return (
                  <div className="h-full min-h-full" key={key}>
                    <div
                      className="bg h-full min-h-full pt-[55%]"
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
              <div key={key} className="relative flex-grow cursor-pointer after:absolute after:inset-0 after:bg-main after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:after:opacity-20" onClick={() => sliderRef.current.slickGoTo(key)}>
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
