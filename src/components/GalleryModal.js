import { AppContext } from "context/AppContext";
import React, { useContext, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Modal from "react-overlays/Modal";
import SafTitleOnly from "components/SafTitleOnly";
import { Trans, useTranslation } from "react-i18next";
import { Transition } from "react-transition-group";

export default function GalleryModal() {
  const { t, i18n, ready } = useTranslation();
  const lang = i18n.language;
  const {
    galleryModalIsOpen,
    setGalleryModalIsOpen,
    currentStory,
    lightbox,
    setLightBox,
  } = useContext(AppContext);

  const renderBackdrop = (props) => (
    <div className="backdrop fixed inset-0 bg-black bg-opacity-80" {...props} />
  );

  if (!currentStory) {
    setGalleryModalIsOpen(false);
  }

  const closeModal = () => {
    window.fullpage_api.setAllowScrolling(true);
    setGalleryModalIsOpen(false);
  };

  useEffect(() => {}, [galleryModalIsOpen]);

  return (
    <div>
      <Modal
        onShow={() => window.fullpage_api.setAllowScrolling(false)}
        show={galleryModalIsOpen}
        onExit={() => {
          window.fullpage_api.setAllowScrolling(true);
        }}
        onBackdropClick={() => setGalleryModalIsOpen(false)}
        renderBackdrop={renderBackdrop}
        className="modal fixed inset-0 overflow-y-scroll"
      >
        <Fade triggerOnce={false}>
          <div>
            <div
              className="absolute inset-0"
              onClick={() => {
                closeModal();
              }}
            ></div>
            <div className="relative top-0 z-50 mx-auto mb-20 mt-24 max-w-screen-lg bg-white">
              <button
                onClick={() => {
                  closeModal();
                }}
                className="absolute -top-12 right-0 bg-main p-2 transition-colors hover:bg-main-dark"
              >
                <svg
                  viewBox="0 0 22.43 22.43"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <g
                    fill="#fff"
                    stroke="#fff"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  >
                    <path d="m.71 21.72 21.01-21.01" />
                    <path d="m21.72 21.72-21.01-21.01" />
                  </g>
                </svg>
              </button>
              {/* content */}
              <div className="bg-white">
                <div className=" relative z-10 mx-auto h-full min-h-screen w-full">
                  <div className="flex  w-full content-between items-end py-16">
                    <div className="flex-1 px-10 text-left">
                      {/* <h2 className="h whitespace-nowrap">Safe and Fair</h2> */}
                      <SafTitleOnly maxWidth={260} />
                    </div>
                    <div className="ml-auto flex items-center">
                      <div className="flex items-center fill-gray-700">
                        <div className="" style={{ width: 200 }}>
                          <svg
                            viewBox="0 0 227.74 13.25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path d="m0 13.07 2.24-12.89h3.35c1.05 0 1.96.27 2.71.8s1.3 1.25 1.63 2.17.43 1.96.29 3.1l-.09.65c-.26 1.88-.99 3.38-2.19 4.49s-2.7 1.68-4.52 1.68zm3.66-11.5-1.75 10.1h1.64c1.25 0 2.31-.38 3.18-1.16s1.44-1.85 1.7-3.21c.21-1.09.28-2.01.21-2.77-.09-.91-.39-1.63-.91-2.15s-1.22-.79-2.09-.81h-1.97z" />
                              <path d="m17.03 13.07h-1.66l2.24-12.89h1.66z" />
                              <path d="m33.38 11.37c-.43.61-1.06 1.08-1.88 1.4-.82.33-1.76.49-2.82.47-.84-.02-1.58-.21-2.21-.59s-1.13-.92-1.49-1.62c-.36-.71-.57-1.51-.62-2.4-.04-.7.05-1.65.26-2.85.22-1.2.59-2.23 1.13-3.11.54-.87 1.21-1.54 2.01-2 .81-.47 1.73-.69 2.77-.67 1.2.02 2.15.38 2.86 1.07s1.12 1.65 1.22 2.9h-1.65c-.06-.82-.31-1.45-.73-1.88-.42-.44-1.01-.67-1.76-.69-1.11-.04-2.04.36-2.78 1.2-.75.84-1.24 2.07-1.47 3.68l-.17 1.24-.03.67c0 1.17.24 2.07.72 2.7s1.15.96 2.01.97c1.25.03 2.23-.28 2.97-.92l.53-2.89h-2.9l.25-1.39h4.53l-.73 4.72z" />
                              <path d="m41.22 13.07h-1.66l2.24-12.89h1.66z" />
                              <path d="m58.32 1.57h-4.01l-1.99 11.5h-1.66l1.99-11.5h-4.01l.25-1.39h9.68z" />
                              <path d="m68.71 9.7h-5.22l-1.76 3.37h-1.78l7-12.89h1.46l2.55 12.89h-1.64zm-4.49-1.39h4.24l-1.07-6.01z" />
                              <path d="m78.29 11.68h5.93l-.25 1.39h-7.6l2.24-12.89h1.67l-2 11.5z" />
                              <path d="m104.87 9.75c.13-.94-.36-1.63-1.47-2.07l-1.53-.56-.51-.22c-1.72-.79-2.53-1.89-2.42-3.31.06-.71.3-1.35.73-1.89s1-.97 1.71-1.27 1.47-.44 2.27-.42c.78.02 1.47.19 2.08.52s1.08.79 1.39 1.38c.32.59.46 1.26.43 2.01h-1.67c.06-.8-.12-1.42-.53-1.85s-1-.66-1.77-.67c-.81-.01-1.48.18-2.03.57-.54.39-.86.92-.94 1.6-.12.88.42 1.55 1.62 2l1.32.47.66.28c1.66.77 2.43 1.91 2.31 3.42-.06.73-.31 1.35-.73 1.88s-1 .94-1.73 1.23-1.51.42-2.35.41c-.81 0-1.55-.18-2.22-.52s-1.18-.8-1.53-1.39-.5-1.26-.46-2.01h1.66c-.05.78.15 1.39.62 1.84s1.13.68 1.99.7c.86.01 1.56-.17 2.12-.56s.88-.9.97-1.55z" />
                              <path d="m122.42 1.57h-4.01l-1.99 11.5h-1.66l1.99-11.5h-4.01l.25-1.39h9.68z" />
                              <path d="m130.46 13.25c-.82-.02-1.53-.21-2.14-.59s-1.08-.93-1.43-1.67-.54-1.56-.58-2.47c-.04-.71.04-1.6.24-2.65.19-1.05.53-2 1.01-2.84s1.06-1.52 1.74-2.03c.93-.68 1.98-1.01 3.17-.99 1.26.02 2.25.46 2.98 1.31s1.12 1.99 1.17 3.44c.02.62-.04 1.41-.19 2.36s-.42 1.84-.81 2.66-.88 1.51-1.47 2.06c-1.04.97-2.27 1.44-3.69 1.41zm4.52-8.09c.04-1.16-.17-2.06-.61-2.71-.44-.64-1.1-.97-1.97-1-.79-.02-1.5.19-2.12.64s-1.13 1.12-1.53 2.01-.65 2.03-.76 3.4l-.03.58c-.04 1.16.17 2.06.62 2.72s1.1 1 1.96 1.02c1.12.03 2.04-.37 2.78-1.21s1.22-2.01 1.47-3.52c.12-.74.19-1.39.2-1.93z" />
                              <path d="m147.09 7.86h-2.97l-.9 5.21h-1.67l2.24-12.89h3.88c1.35.01 2.38.36 3.09 1.04s1.01 1.6.89 2.77c-.06.81-.36 1.52-.88 2.14s-1.22 1.08-2.08 1.39l2 5.44v.12h-1.78l-1.81-5.21zm-2.74-1.4h2.44c.85 0 1.57-.22 2.15-.67s.93-1.05 1.03-1.81c.09-.74-.06-1.32-.44-1.74s-.97-.64-1.75-.66h-2.58s-.85 4.88-.85 4.88z" />
                              <path d="m160.55 6.64 4.38-6.46h1.98l-5.78 8.17-.82 4.72h-1.66l.85-4.91-2.88-7.99h1.81l2.12 6.46z" />
                              <path d="m169.94 13.07 2.24-12.89h3.78c1.32 0 2.3.3 2.96.89s.94 1.41.86 2.47c-.11 1.23-.88 2.16-2.33 2.79.58.22 1.01.61 1.3 1.15s.4 1.14.35 1.8c-.09 1.16-.55 2.08-1.4 2.77-.84.68-1.94 1.02-3.28 1.02zm2.71-6.03-.81 4.63h2.63c.8 0 1.48-.21 2.02-.64s.86-1.01.95-1.74c.08-.7-.04-1.24-.36-1.63s-.84-.6-1.53-.62zm.24-1.36h2.4c.75 0 1.38-.18 1.9-.57.52-.38.82-.91.91-1.59.08-.63-.05-1.1-.37-1.42s-.85-.49-1.6-.52h-2.53s-.71 4.1-.71 4.1z" />
                              <path d="m189.33 13.25c-.82-.02-1.53-.21-2.14-.59s-1.08-.93-1.43-1.67-.54-1.56-.58-2.47c-.04-.71.04-1.6.24-2.65.19-1.05.53-2 1.01-2.84s1.06-1.52 1.74-2.03c.93-.68 1.98-1.01 3.17-.99 1.26.02 2.25.46 2.98 1.31s1.12 1.99 1.17 3.44c.02.62-.04 1.41-.19 2.36s-.42 1.84-.81 2.66-.88 1.51-1.47 2.06c-1.04.97-2.27 1.44-3.69 1.41zm4.52-8.09c.04-1.16-.17-2.06-.61-2.71-.44-.64-1.1-.97-1.97-1-.79-.02-1.5.19-2.12.64s-1.13 1.12-1.53 2.01-.65 2.03-.76 3.4l-.03.58c-.04 1.16.17 2.06.62 2.72s1.1 1 1.96 1.02c1.12.03 2.04-.37 2.78-1.21s1.22-2.01 1.47-3.52c.12-.74.19-1.39.2-1.93z" />
                              <path d="m205.14 13.25c-.82-.02-1.53-.21-2.14-.59s-1.08-.93-1.43-1.67-.54-1.56-.58-2.47c-.04-.71.04-1.6.24-2.65.19-1.05.53-2 1.01-2.84s1.06-1.52 1.74-2.03c.93-.68 1.98-1.01 3.17-.99 1.26.02 2.25.46 2.98 1.31s1.12 1.99 1.17 3.44c.02.62-.04 1.41-.19 2.36s-.42 1.84-.81 2.66-.88 1.51-1.47 2.06c-1.04.97-2.27 1.44-3.69 1.41zm4.52-8.09c.04-1.16-.17-2.06-.61-2.71-.44-.64-1.1-.97-1.97-1-.79-.02-1.5.19-2.12.64s-1.13 1.12-1.53 2.01-.65 2.03-.76 3.4l-.03.58c-.04 1.16.17 2.06.62 2.72s1.1 1 1.96 1.02c1.12.03 2.04-.37 2.78-1.21s1.22-2.01 1.47-3.52c.12-.74.19-1.39.2-1.93z" />
                              <path d="m220.52 7.09-1.89 1.69-.74 4.29h-1.66l2.24-12.89h1.66l-1.1 6.28 6.57-6.28h2.14l-5.99 5.77 4.01 7.12h-1.85z" />
                            </g>
                          </svg>
                        </div>
                        <div className="ml-3 flex-grow">
                          <div
                            className={`h-[1px] w-20 flex-grow bg-neutral-700`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img class="w-full" src={currentStory?.thumbnail} alt="" />
                    <div className="absolute bottom-0 left-0 mx-auto w-full bg-opacity-50 bg-gradient-to-b from-transparent to-black/50 py-10">
                      <div className="mx-auto flex max-w-[700px] text-white">
                        <div className="whitespace-nowrap text-3xl">
                          <h3 className=" border-r border-white pr-6">
                            {currentStory?.name}
                          </h3>
                        </div>
                        <div className="pl-6 text-xs">
                          This is the space for photo captions. Lorem ipsum
                          dolor sit amet, consectetuer adipiscing elit, sed diam
                          nonummy nibh euismod tincidunt ut laoreet dolore magna
                          aliquam erat volutpat.
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-10 left-full right-2 -translate-x-4  whitespace-nowrap text-xs text-xs  text-white">
                      <div className="-rotate-90">
                        Photo: UN Women/M R Hasan, Illustration: PORTRAY
                      </div>
                    </div>
                  </div>

                  <div className="px-10 py-16">
                    <div className="mx-auto max-w-[700px]">
                      <div className="mb-6">
                        <div className="inline-block rounded bg-neutral-200 px-4 py-1 text-sm">
                          Home / Gallery /{" "}
                          <span className="text-main-dark">
                            Story {currentStory?.index}
                          </span>
                        </div>
                      </div>
                      <h3 className="mb-10 text-4xl font-semibold">
                        {currentStory?.title[lang]}
                      </h3>
                      {currentStory?.content[lang]}
                    </div>
                  </div>

                  {/* bottom gallery */}
                  <div className="grid grid-cols-4 pb-28">
                    {currentStory?.gallery?.map((image, key) => {
                      if (image?.image) {
                        return (
                          <div
                            className="group relative flex-1 cursor-pointer"
                            onClick={() =>
                              setLightBox({
                                image: image.image,
                                caption: image.caption,
                                index: image.index,
                              })
                            }
                          >
                            <div className="pt-[100%]">
                              <div
                                className="absolute inset-0 bg-neutral-100 bg-cover bg-center"
                                style={{
                                  backgroundImage: `url(${image?.image})`,
                                }}
                              ></div>
                            </div>
                            <div className="group:hover: absolute inset-0 bg-main bg-opacity-70 opacity-0 transition-all duration-300 group-hover:opacity-100">
                              <div className="flex h-full w-full">
                                <svg
                                  viewBox="0 0 45.52 45.71"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="mx-auto my-auto h-10 w-10"
                                >
                                  <path
                                    d="m40.76 45.71-11.34-11.34c-.65-.65-.65-1.7 0-2.35 0 0 .02-.02.03-.02l-3.82-3.82c-2.79 2.22-6.22 3.43-9.83 3.43-4.17 0-8.1-1.61-11.07-4.53-6.22-6.1-6.31-16.13-.21-22.35 2.96-3.01 6.91-4.69 11.13-4.73s8.2 1.57 11.22 4.52c3.01 2.96 4.69 6.91 4.73 11.13.03 3.75-1.23 7.32-3.6 10.18l3.8 3.8s.02-.02.02-.03c.65-.65 1.7-.65 2.35 0l11.34 11.34-4.76 4.76zm-24.96-42.38c-3.23 0-6.46 1.25-8.9 3.73-4.82 4.91-4.75 12.82.16 17.64 2.35 2.3 5.45 3.57 8.74 3.57s6.39-1.27 8.74-3.57l.12-.12s.03-.03.04-.04c2.33-2.38 3.6-5.52 3.57-8.85s-1.36-6.45-3.74-8.79c-2.42-2.38-5.58-3.57-8.74-3.57z"
                                    fill="#fff"
                                  />
                                </svg>
                              </div>
                              <div className="h-8 bg-main-dark"></div>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>

                  {/* footer */}
                  <div className="w-full border-t border-neutral-700 py-16">
                    <div className="mx-auto flex max-w-screen-md items-end gap-20  ">
                      <div className="flex-1">
                        <div
                          className="cursor-pointer text-right font-semibold uppercase"
                          onClick={() => window.fullpage_api.moveTo("gallery")}
                        >
                          <div className="color-neutral-700 mb-1 whitespace-nowrap pl-6 leading-5 tracking-widest">
                            Previous <br />
                            Story
                          </div>
                          <div className="flex items-center">
                            <div className="border-y-8 border-l-0 border-r-8 border-solid border-y-transparent border-r-neutral-700"></div>
                            <div className="h-0.5 w-full flex-grow-0 bg-neutral-600"></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div
                          className="cursor-pointer text-center font-semibold uppercase"
                          onClick={() => {
                            closeModal();
                            window.fullpage_api.moveTo("gallery");
                          }}
                        >
                          <div className="color-neutral-700 mb-1 whitespace-nowrap px-3 leading-5 tracking-widest">
                            Gallery
                          </div>
                          <div className="mb-2 mt-2 flex flex-col items-center">
                            <div class="border-x-8 border-b-8 border-t-0 border-solid border-x-transparent border-b-neutral-700"></div>
                            <div className="h-0.5 w-full flex-grow-0 bg-neutral-700"></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="cursor-pointer text-left font-semibold uppercase">
                          <div className="color-neutral-700 mb-1 whitespace-nowrap pr-6 leading-5 tracking-widest">
                            Next <br />
                            Story
                          </div>
                          <div className="flex items-center">
                            <div className="h-0.5 w-full flex-grow-0 bg-neutral-700"></div>
                            <div className="border-y-8 border-l-8 border-r-0 border-solid border-y-transparent border-l-neutral-700"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
