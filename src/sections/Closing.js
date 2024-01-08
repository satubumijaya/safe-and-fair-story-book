import React from "react";
import { useTranslation } from "react-i18next";
import logoUnWomen from "../images/logos/un-women.png";
import logoSpotlight from "../images/logos/spotlight.png";
import logoUnEu from "../images/logos/un-eu.png";
import logoUn from "../images/logos/un.png";
import logoEu from "../images/logos/eu.png";
import SafTitle from "components/SafTitle";

export default function Closing() {
  const { t, i18n, ready } = useTranslation();

  return (
    <div className="section">
      <div className="min-h-screen overflow-x-hidden text-left">
        <div className="flex h-10 bg-main">
          <div className="mx-16 h-14 flex-1 bg-main-dark"></div>
          <div className="flex-1"></div>
        </div>

        <div className="relative flex items-center gap-32">
          <div className="flex-1 py-16 pl-16 pt-24 text-left">
            <div className="mb-10 font-bold">
              <h3>Aliquam Nunc</h3>
            </div>
            <div className="max-w-prose">
              <p>
                Maecenas sit amet mi ut mi vestibulum finibus. Proin tempor est
                consectetur, aliquet ipsum scelerisque, tempor quam. Nunc ipsum
                nulla, commodo tempor laoreet ut, scelerisque eu quam. Curabitur
                gravida, libero eget elementum sollicitudin, eros mauris aliquam
                nunc, vitae fermentum felis neque at velit. Mauris vestibulum
                rutrum nibh, vitae volutpat odio feugiat eget. Vestibulum
                iaculis lobortis egestas. Curabitur tincidunt viverra odio. In
                tempus molestie lorem, at efficitur tortor tincidunt vitae. In
                ultrices lobortis scelerisque.
              </p>
              <p>
                Phasellus eget ultricies nisl, eu pellentesque dui. Vestibulum
                efficitur pulvinar efficitur. Mauris nec ligula malesuada erat
                lobortis lobortis quis id nisl. Vestibulum elementum nulla in
                ultricies blandit. Aenean rutrum risus ut magna congue
                convallis. Integer tincidunt et lectus et rutrum.
              </p>

              <p>
                Phasellus eget ultricies nisl, eu pellentesque dui. Vestibulum
                efficitur pulvinar efficitur. Mauris nec ligula malesuada erat
                lobortis lobortis quis id nisl. Vestibulum elementum nulla in
                ultricies blandit. Aenean rutrum risus ut magna congue
                convallis. Integer tincidunt et lectus et rutrum. Praesent
                sodales, lacus id feugiat convallis, massa metus vehicula orci,
                nec viverra ligula justo vel dui. Nulla eget posuere risus.
              </p>
            </div>
          </div>

          <div className="flex-1 py-16">
            <SafTitle className="w-full" color="dark" maxWidth={340} />
            {/* <div className="max-w-lg pr-10">
              <h2 className="mb-2">{t("intro.heading")}</h2>
              <p className="text-lg font-medium">{t("intro.subheading")}</p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="text-lg uppercase italic tracking-widest">
                {t("intro.subheading-2")}
              </div>
              <div className=" flex-grow border-t border-neutral-500"></div>
            </div> */}

            <div className="mx-auto mb-12 mt-20 pr-16">
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

        <div className="mx-auto mb-24 flex max-w-screen-md items-end gap-20">
          <div className="flex-1">
            <div
              className="cursor-pointer text-right font-semibold uppercase"
              onClick={() => window.fullpage_api.moveTo("gallery")}
            >
              <div className="whitespace-nowrap pl-6 tracking-widest">
                Back to Gallery
              </div>
              <div className="flex items-center">
                <div className="border-y-8 border-l-0 border-r-8 border-solid border-y-transparent border-r-black"></div>
                <div className="h-0.5 w-full flex-grow-0 bg-black"></div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div
              className="cursor-pointer text-center font-semibold uppercase"
              onClick={() => window.fullpage_api.moveTo("home")}
            >
              <div className="whitespace-nowrap px-3 tracking-widest">Home</div>
              <div className="mb-2 mt-2 flex flex-col items-center">
                <div class="border-x-8 border-b-8 border-t-0 border-solid border-x-transparent border-b-black"></div>
                <div className="h-0.5 w-full flex-grow-0 bg-black"></div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="cursor-pointer text-left font-semibold uppercase">
              <div className="whitespace-nowrap pr-6 tracking-widest">
                Share
              </div>
              <div className="flex items-center">
                <div className="h-0.5 w-full flex-grow-0 bg-black"></div>
                <div className="border-y-8 border-l-8 border-r-0 border-solid border-y-transparent border-l-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
