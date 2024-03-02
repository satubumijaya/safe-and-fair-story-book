import { AppContext } from "context/AppContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import Modal from "react-overlays/Modal";
import parse from "html-react-parser";

export default function LightboxModal() {
  const { t, i18n, ready } = useTranslation();
  const lang = i18n.language;

  const { currentStory, lightbox, setLightBox, windowSize } = useContext(AppContext);
  const [captionHeight, setCaptionHeight] = useState(0);

  const captionRef = useRef(null);
  useEffect(() => {
    setCaptionHeight(captionRef?.current?.clientHeight);
  }, [lightbox, windowSize]);

  const renderBackdrop = (props) => <div className="backdrop fixed inset-0 bg-black bg-opacity-80" {...props} />;

  const closeModal = () => {
    setLightBox(null);
  };

  const moveGallery = (type) => {
    const index = lightbox.index;
    let newIndex = 0;
    if (type === "next") {
      newIndex = index + 1;
    }
    if (type === "prev") {
      newIndex = index - 1;
    }

    setLightBox({
      image: currentStory?.gallery[newIndex]?.image,
      caption: currentStory?.gallery[newIndex]?.caption,
      credit: currentStory?.gallery[newIndex]?.credit,
      index: newIndex,
    });
  };

  return (
    <div>
      <Modal
        onShow={() => window.fullpage_api.setAllowScrolling(false)}
        show={lightbox !== null}
        onExit={() => {
          window.fullpage_api.setAllowScrolling(true);
        }}
        onBackdropClick={() => closeModal()}
        onEscapeKeyDown={() => closeModal()}
        renderBackdrop={renderBackdrop}
        className="modal fixed inset-0 overflow-y-scroll"
      >
        <Fade triggerOnce={false}>
          <div className="px-x flex min-h-[100svh] items-center">
            <div
              className="absolute inset-0"
              onClick={() => {
                closeModal();
              }}
            ></div>

            <div className="relative top-0 z-50 mx-auto mb-12 mt-12 max-w-fit bg-white" style={{ paddingBottom: captionHeight }}>
              <button
                onClick={() => {
                  closeModal();
                }}
                className="absolute right-3 top-3 z-50 bg-black bg-opacity-60 p-2 transition-colors hover:bg-opacity-100"
              >
                <svg viewBox="0 0 22.43 22.43" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                  <g fill="#fff" stroke="#fff" strokeMiterlimit="10" strokeWidth="2">
                    <path d="m.71 21.72 21.01-21.01" />
                    <path d="m21.72 21.72-21.01-21.01" />
                  </g>
                </svg>
              </button>

              {/* prev */}
              {lightbox?.index > 0 && (
                <button className="absolute right-full top-1/2 z-10 -translate-y-1/2 rotate-180" onClick={() => moveGallery("prev")}>
                  <div className="px-4 py-4">
                    <svg className=" w-7" viewBox="0 0 30 9.97" xmlns="http://www.w3.org/2000/svg">
                      <path d="m30 5.01-8.62-5.01-.01 4.49-21.37-.06v1l21.36.06-.01 4.48z" fill="#fff" />
                    </svg>
                  </div>
                </button>
              )}

              {/* next */}
              {lightbox?.index < currentStory?.gallery?.length - 1 && (
                <button className="absolute left-full top-1/2 z-10 -translate-y-1/2" onClick={() => moveGallery("next")}>
                  <div className="px-4 py-4">
                    <svg className=" w-7" viewBox="0 0 30 9.97" xmlns="http://www.w3.org/2000/svg">
                      <path d="m30 5.01-8.62-5.01-.01 4.49-21.37-.06v1l21.36.06-.01 4.48z" fill="#fff" />
                    </svg>
                  </div>
                </button>
              )}

              <div>
                <div className="relative">
                  <img src={lightbox?.image} alt="" className="max-h-[80svh] w-full max-w-screen-md lg:max-h-[calc(90svh-6rem)]" />
                  <div className="absolute bottom-0 left-0 right-0  text-right text-xs text-white">
                    <span className="inline-block bg-black bg-opacity-70 px-4 py-1.5">{lightbox?.credit && lightbox?.credit[lang]}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-black px-6 py-4 text-sm text-white md:px-8" ref={captionRef}>
                  <div className="border-l border-l-white py-1 pl-4">{lightbox?.caption && parse(lightbox?.caption[lang])}</div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
