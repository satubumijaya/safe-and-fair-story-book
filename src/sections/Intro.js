import React from "react";
import { useTranslation } from "react-i18next";
import concave from "../images/concave.png";
import introImg from "../images/intro.jpg";
import ScrollArrow from "../components/ScrollArrow";
import { Fade } from "react-awesome-reveal";

export default function Intro() {
  const { t, i18n, ready } = useTranslation();
  return (
    <div className="section">
      <div className="relative flex">
        <div className="flex-grow pb-12">
          <div className="py-14 pl-16 text-left">
            <Fade cascade>
              <div className="max-w-lg pr-10">
                <h2 className="mb-2">{t("intro.heading")}</h2>
              </div>
              <div className="max-w-lg pr-10">
                <p className="text-lg font-medium">{t("intro.subheading")}</p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="text-lg uppercase italic tracking-widest">
                  {t("intro.subheading-2")}
                </div>
                <div className="flex-grow">
                  <Fade direction="right" delay={1200}>
                    <div className=" flex-grow border-t border-neutral-500"></div>
                  </Fade>
                </div>
              </div>

              <div className="mr-14 mt-14 max-w-prose">
                {i18n.language === "en" && (
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque non neque non erat dictum facilisis. Nulla
                      elementum elit ut dui convallis venenatis nec eget nisl.
                      Phasellus accumsan dui id ligula iaculis finibus. Nulla
                      vel sapien eget leo fringilla imperdiet. Aenean urna mi,
                      tempor sit amet fermentum non, facilisis a lorem. Vivamus
                      scelerisque suscipit tortor, nec semper libero. Mauris
                      rutrum fringilla orci quis rutrum.
                    </p>
                    <p>
                      Praesent id faucibus orci. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Sed in massa lorem. In et
                      odio augue. Orci varius natoque penatibus et magnis dis
                      parturient montes, nascetur ridiculus mus. Praesent ac
                      urna pulvinar, scelerisque sapien et, convallis lorem. In
                      urna mauris, eleifend at nisl eget, mollis pellentesque
                      dolor. Maecenas lacus lacus, feugiat quis velit varius:{" "}
                      <a href="https://google.com">www.egestas.com</a> pretium
                      orci. Maecenas imperdiet commodo gravida. Pellentesque
                      justo justo, venenatis ut sem ac, tincidunt venenatis ex.
                    </p>
                    <p>
                      Vestibulum consequat est ac laoreet vehicula. Aenean vitae
                      erat eget est suscipit tincidunt id quis massa. In hac
                      habitasse platea dictumst. Nullam luctus est id quam
                      tincidunt ullamcorper. Cras convallis elit nibh, ac
                      placerat est fringilla a. Aliquam metus nisl, sodales
                      tempus lacinia eget, facilisis vitae tortor. Nunc
                      porttitor aliquet erat at tempor. Nunc sed consectetur
                      massa. Integer semper ligula in nulla rutrum, bibendum
                      suscipit arcu sollicitudin. Fusce efficitur vitae magna
                      sit amet sollicitudin. Ut arcu dolor, scelerisque non
                      hendrerit non, mattis eget elit. Vestibulum imperdiet nunc
                      at diam convallis, quis pretium est viverra. Vestibulum
                      lobortis, nisi vitae facilisis tempor, magna ipsum posuere
                      ex, quis accumsan elit nibh non orci. Aenean at dignissim
                      erat, a vulputate lacus.
                    </p>
                  </div>
                )}
              </div>
            </Fade>
          </div>
        </div>
        <div className="flex max-w-md flex-col bg-main-dark text-white">
          <div
            className="overlay relative bg-neutral-800 bg-cover bg-center px-20 py-16 text-center after:absolute after:inset-0 after:z-0 after:bg-black after:opacity-75 after:content-['']"
            style={{ backgroundImage: `url(${introImg})` }}
          >
            <img
              src={concave}
              alt=""
              className="relative z-20 mx-auto max-w-[70%]"
            />
          </div>
          <div className="mx-16 flex gap-8 py-12 text-left">
            <Fade cascade delay={1300}>
              <div className="h-60 border-l border-white"></div>
              {i18n.language == "en" && (
                <div>
                  <p>
                    {" "}
                    Maecenas sit amet mi ut mi vestibulum finibus.Proin tempor
                    est consectetur, aliquet ipsum scelerisque, tempor quam.Nunc
                    ipsum nulla, commodo tempor laoreet ut, scelerisque eu
                    quam.Curabitur gravida, libero eget elementum sollicitudin,
                    eros mauris aliquam nunc, vitae fermentum felis neque at
                    velit.Mauris vestibulum rutrum nibh, vitae volutpat odio
                    feugiat eget.Vestibulum iaculis lobortis egestas.Curabitur
                    tincidunt viverra odio.In tempus molestie lorem, at
                    efficitur tortor tincidunt vitae.In ultrices lobortis
                    scelerisque.Integer a mollis dolor, vel pellentesque diam.
                  </p>
                </div>
              )}
            </Fade>
          </div>
          <div className="mt-auto h-16 bg-main"></div>
        </div>
        <ScrollArrow />
      </div>
    </div>
  );
}
