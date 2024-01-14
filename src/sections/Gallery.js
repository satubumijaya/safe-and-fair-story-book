import React, { useContext, useEffect, useState } from "react";
import concave from "images/concave.webp";
import convex from "images/convex.webp";
import ScrollArrow from "components/ScrollArrow";
import { Fade, Slide } from "react-awesome-reveal";
import { AppContext } from "context/AppContext";
import SafTitleOnly from "components/SafTitleOnly";

export default function Gallery() {
  const { setGalleryModalIsOpen, stories, setCurrentStory } =
    useContext(AppContext);
  const homeIndex = 17;
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [compiledStories, setCompiledStories] = useState(stories);

  const updateWindowWidth = () => {
    if (window.innerWidth >= 1024) {
      setCompiledStories([
        ...stories.slice(0, homeIndex),
        { type: "home" },
        ...stories.slice(homeIndex),
      ]);
    } else {
      setCompiledStories([
        ...stories.slice(0, 19),
        { type: "home" },
        ...stories.slice(19),
      ]);
    }
  };

  useEffect(() => {
    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);
  }, []);

  const renderGalleryImages = () => {
    return (
      <div className="relative grid w-full grid-cols-2 gap-1 p-1 md:grid-cols-4 lg:grid-cols-5">
        <Fade cascade damping="0.2" duration={600} triggerOnce={true}>
          {compiledStories.map((story, key) => {
            if (story?.type == "home") {
              return (
                <div
                  key={key}
                  className="group  relative h-full w-full cursor-pointer bg-neutral-500 transition-colors duration-500 hover:bg-main-dark"
                  onClick={() => window.fullpage_api.moveTo("home")}
                >
                  <div className="flex h-full flex-col">
                    <div className="m-auto">
                      <div className="font-semibold tracking-widest text-white">
                        HOME
                      </div>
                      <div className="flex flex-col">
                        <div className="mx-auto h-0 w-0 border-8 border-solid border-transparent border-b-white"></div>
                        <div className=" h-[1px] w-full bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={key}
                className="group relative w-full cursor-pointer"
                onClick={() => {
                  setCurrentStory(story);
                  setGalleryModalIsOpen(true);
                }}
              >
                <div className="absolute inset-0 bg-main-dark bg-opacity-70 text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="flex h-full flex-col">
                    <div className="m-auto translate-y-2 text-xs font-semibold">
                      <div className="px-1">VIEW</div>
                      <div className="mt-[2px] h-[1px] w-full bg-white"></div>
                      <div className="mx-auto h-0 w-0 border-4 border-solid border-transparent border-t-white"></div>
                    </div>
                    <div className="bg-black bg-opacity-50 px-2 py-2 text-center text-xs">
                      {story.name}
                    </div>
                  </div>
                </div>
                <div
                  className="bg bg-neutral-200 pt-[66%]"
                  style={{
                    backgroundImage: `url(${story.thumbnail})`,
                  }}
                ></div>
              </div>
            );
          })}
        </Fade>
      </div>
    );
  };

  return (
    <div className="section">
      <div className="relative z-0 overflow-hidden bg-main">
        <div className=" relative z-10 mx-auto h-full min-h-screen w-full max-w-[920px] bg-white py-16">
          <div className="flex w-full flex-col content-between items-end pb-16 md:flex-row">
            <div className="mb-4 w-full flex-1 px-6 text-left md:mb-0 md:px-10">
              <SafTitleOnly maxWidth={260} />
            </div>
            <div className="ml-auto flex items-center pl-6 md:translate-x-20">
              <div className="mr-2 whitespace-nowrap text-right">
                Galeri 19 Penulis Cerita Perubahan
              </div>
              <div className="relative flex h-[1px] w-40 max-w-md bg-gray-500 after:absolute after:right-0 after:top-0 after:hidden after:h-[1px] after:w-1/2 after:bg-white after:content-[''] md:after:block"></div>
            </div>
          </div>
          {/* galerry */}
          {renderGalleryImages()}

          <div
            className="absolute left-0 top-1/2 -z-10 h-1/2 w-1/2 -translate-x-[30%] -translate-y-[50%] bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${convex})` }}
          ></div>
          <div
            className="absolute right-0 top-1/2  -z-10 h-1/2 w-1/2 -translate-y-[50%] translate-x-[30%] bg-contain bg-right bg-no-repeat"
            style={{ backgroundImage: `url(${concave})` }}
          ></div>
        </div>
        <div className="absolute left-0 top-0 -z-10 h-full w-1/2"></div>
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-main-dark"></div>
        <ScrollArrow />
      </div>
    </div>
  );
}