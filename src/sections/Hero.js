import React from "react";
import { useTranslation } from "react-i18next";
import image from "../images/hero.jpg";
import concave from "../images/concave.png";
import logoUnWomen from "../images/logos/un-women.png";
import logoSpotlight from "../images/logos/spotlight.png";
import logoUnEu from "../images/logos/un-eu.png";
import logoUn from "../images/logos/un.png";
import logoEu from "../images/logos/eu.png";
import ScrollArrow from "../components/ScrollArrow";

export default function Hero() {
  const { t, i18n, ready } = useTranslation();
  const images = [
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
    {
      images: image,
      thumbnail: image,
    },
  ];

  return (
    <div className="section">
      <div className="relative py-12">
        <div className="mx-auto mb-12">
          <div className="flex items-end justify-center">
            <div className="flex items-end gap-4 border-r pr-2 md:gap-10 md:pr-8">
              <div>
                <img src={logoSpotlight} alt="" className="max-h-20" />
              </div>
              <div>
                <img src={logoUnEu} alt="" className="max-h-28" />
              </div>
            </div>
            <div className="pl-2 md:pl-8">
              <img src={logoUnWomen} alt="" className="max-h-20" />
            </div>
          </div>
        </div>
        <div className="mx-auto hidden">
          <div className="mb-16 flex items-end justify-center">
            <div className="flex items-end gap-10 border-r pr-8">
              <div>
                <img src={logoSpotlight} alt="" className="max-h-20" />
              </div>
              <div>
                <div className="mb-4 text-[9px] font-semibold italic">
                  An initiative of the United Nations funded by European Union
                </div>
                <div className="flex items-end gap-10">
                  <div>
                    <img src={logoUn} alt="" className="max-h-20" />
                  </div>
                  <div>
                    <img src={logoEu} alt="" className="max-h-20" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-8">
              <img src={logoUnWomen} alt="" className="max-h-20" />
            </div>
          </div>
        </div>
        <div className="flex items-stretch overflow-hidden bg-main text-white">
          <div className="flex items-center">
            <div className="max-w-xl py-14 pl-16 text-left">
              <div className="max-w-xl pr-10">
                <h1 className="mb-2">{t("hero.heading")}</h1>
                <p className="text-xl font-medium">{t("hero.subheading")}</p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="text-xl uppercase italic tracking-widest">
                  {t("hero.subheading-2")}
                </div>
                <div className=" border-top-white flex-grow border-t"></div>
              </div>
            </div>
          </div>
          <div className="relative flex-grow">
            <div
              className="absolute left-0 aspect-square h-full translate-x-[-50%] translate-y-[50%] bg-contain bg-no-repeat opacity-20"
              style={{ backgroundImage: `url(${concave})` }}
            ></div>
            <div className="absolute inset-0 w-12 bg-main opacity-50"></div>
            <div className="h-full">
              <div
                className="bg h-full pt-[50%]"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
          </div>
          <div className="w-16 bg-main-dark"></div>
        </div>
        <div className="flex">
          {images.map((image) => {
            return (
              <div className="relative flex-grow cursor-pointer after:absolute after:inset-0 after:bg-main after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:after:opacity-20">
                <div
                  className="bg pt-[66%]"
                  style={{ backgroundImage: `url(${image.thumbnail})` }}
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
