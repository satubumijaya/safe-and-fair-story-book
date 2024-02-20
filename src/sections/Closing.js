import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import logoUnWomen from "../images/logos/un-women.webp";
import logoSpotlight from "../images/logos/spotlight.webp";
import logoUnEu from "../images/logos/un-eu.webp";
import logoUn from "../images/logos/un.webp";
import logoEu from "../images/logos/eu.webp";
import SafTitle from "components/SafTitle";
import { AppContext } from "context/AppContext";

export default function Closing() {
  const { t, i18n, ready } = useTranslation();
  const { stories, setWindowSize } = useContext(AppContext);

  const { shareModalIsOpen, setShareModalIsOpen } = useContext(AppContext);
  return (
    <div className="section">
      <div className="relative flex min-h-screen flex-col overflow-x-hidden text-left">
        <div className="flex h-10 bg-main">
          <div className="ml-6 h-14 flex-1 bg-main-dark md:mx-16"></div>
          <div className="flex-1"></div>
        </div>

        <div
          className="absolute right-0 top-10 -z-10 h-36 w-36 bg-contain lg:h-52 lg:w-52"
          style={{
            backgroundImage: `url(${require("images/closing-concave.webp")}`,
          }}
        ></div>

        <div className="relative flex flex-col items-center gap-16 lg:flex-row xl:gap-32">
          <div className="hidden flex-1 px-6 py-16 pb-0 pt-24 text-left md:px-16 lg:pr-6">
            <div className="mb-10 font-bold">
              <h3>Aliquam Nunc</h3>
            </div>
            <div className="max-w-prose">
              <p>Maecenas sit amet mi ut mi vestibulum finibus. Proin tempor est consectetur, aliquet ipsum scelerisque, tempor quam. Nunc ipsum nulla, commodo tempor laoreet ut, scelerisque eu quam. Curabitur gravida, libero eget elementum sollicitudin, eros mauris aliquam nunc, vitae fermentum felis neque at velit. Mauris vestibulum rutrum nibh, vitae volutpat odio feugiat eget. Vestibulum iaculis lobortis egestas. Curabitur tincidunt viverra odio. In tempus molestie lorem, at efficitur tortor tincidunt vitae. In ultrices lobortis scelerisque.</p>
              <p>Phasellus eget ultricies nisl, eu pellentesque dui. Vestibulum efficitur pulvinar efficitur. Mauris nec ligula malesuada erat lobortis lobortis quis id nisl. Vestibulum elementum nulla in ultricies blandit. Aenean rutrum risus ut magna congue convallis. Integer tincidunt et lectus et rutrum.</p>

              <p>Phasellus eget ultricies nisl, eu pellentesque dui. Vestibulum efficitur pulvinar efficitur. Mauris nec ligula malesuada erat lobortis lobortis quis id nisl. Vestibulum elementum nulla in ultricies blandit. Aenean rutrum risus ut magna congue convallis. Integer tincidunt et lectus et rutrum. Praesent sodales, lacus id feugiat convallis, massa metus vehicula orci, nec viverra ligula justo vel dui. Nulla eget posuere risus.</p>
            </div>
          </div>

          <div className="mx-auto max-w-prose flex-1 pt-32">
            <div className="pl-6">
              <SafTitle className="w-full" color="dark" maxWidth={340} />
            </div>
            <div className="mx-auto mt-20 px-6 ">
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
          </div>
        </div>
        <div className="mt-auto">
          <div className="hidden md:block">
            <div className="mx-auto mb-16 mt-20 flex max-w-screen-md flex-col items-end gap-10 px-6 md:flex-row lg:gap-20">
              <div className="w-full flex-1">
                <div className="cursor-pointer text-right font-semibold uppercase" onClick={() => window.fullpage_api.moveTo("gallery")}>
                  <div className="whitespace-nowrap pl-6 tracking-widest">{t("closing.back-gallery")}</div>
                  <div className="flex items-center">
                    <div className="border-y-8 border-l-0 border-r-8 border-solid border-y-transparent border-r-black"></div>
                    <div className="h-0.5 w-full flex-grow-0 bg-black"></div>
                  </div>
                </div>
              </div>

              <div className="w-full flex-1">
                <div className="cursor-pointer text-center font-semibold uppercase" onClick={() => window.fullpage_api.moveTo("home")}>
                  <div className="whitespace-nowrap px-3 tracking-widest">{t("closing.home")}</div>
                  <div className="mb-2 mt-2 flex flex-col items-center">
                    <div className="border-x-8 border-b-8 border-t-0 border-solid border-x-transparent border-b-black"></div>
                    <div className="h-0.5 w-full flex-grow-0 bg-black"></div>
                  </div>
                </div>
              </div>

              <div className="w-full flex-1">
                <div className="cursor-pointer text-left font-semibold uppercase" onClick={() => setShareModalIsOpen(true)}>
                  <div className="whitespace-nowrap pr-6 tracking-widest">{t("closing.share")}</div>
                  <div className="flex items-center">
                    <div className="h-0.5 w-full flex-grow-0 bg-black"></div>
                    <div className="border-y-8 border-l-8 border-r-0 border-solid border-y-transparent border-l-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <div className="mx-auto mb-16 mt-20 flex max-w-screen-md flex-col items-end gap-10 px-6 md:flex-row lg:gap-20">
              <div className="w-full flex-1">
                <div className="cursor-pointer text-center font-semibold uppercase" onClick={() => window.fullpage_api.moveTo("home")}>
                  <div className="whitespace-nowrap px-3 text-sm tracking-widest">{t("closing.home")}</div>
                  <div className="mb-2 mt-2 flex flex-col items-center">
                    <div className="border-x-8 border-b-8 border-t-0 border-solid border-x-transparent border-b-black"></div>
                    <div className="h-0.5 w-full flex-grow-0 bg-black"></div>
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-6">
                <div className="w-full flex-1">
                  <div className="cursor-pointer text-right font-semibold uppercase" onClick={() => window.fullpage_api.moveTo("gallery")}>
                    <div className="whitespace-nowrap pl-6 text-sm tracking-widest">{t("closing.back-gallery")}</div>
                    <div className="flex items-center">
                      <div className="border-y-8 border-l-0 border-r-8 border-solid border-y-transparent border-r-black"></div>
                      <div className="h-0.5 w-full flex-grow-0 bg-black"></div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex-1">
                  <div className="cursor-pointer text-left font-semibold uppercase" onClick={() => setShareModalIsOpen(true)}>
                    <div className="whitespace-nowrap pr-6 text-sm tracking-widest">{t("closing.share")}</div>
                    <div className="flex items-center">
                      <div className="h-0.5 w-full flex-grow-0 bg-black"></div>
                      <div className="border-y-8 border-l-8 border-r-0 border-solid border-y-transparent border-l-black"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            {stories.map((story, key) => {
              return (
                <div key={key} className="relative flex-grow cursor-pointer after:absolute after:inset-0 after:bg-main after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:after:opacity-20">
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
      </div>
    </div>
  );
}
