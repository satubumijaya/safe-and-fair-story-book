import { AppContext } from "context/AppContext";
import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import Modal from "react-overlays/Modal";

export default function LightboxModal() {
  const { t, i18n, ready } = useTranslation();
  const lang = i18n.language;

  const { currentStory, lightbox, setLightBox } = useContext(AppContext);

  const renderBackdrop = (props) => (
    <div className="backdrop fixed inset-0 bg-black bg-opacity-80" {...props} />
  );

  const closeModal = () => {
    setLightBox(null);
  };
  console.log(lightbox);
  return (
    <div>
      <Modal
        onShow={() => window.fullpage_api.setAllowScrolling(false)}
        show={lightbox !== null}
        onExit={() => {
          window.fullpage_api.setAllowScrolling(true);
        }}
        onBackdropClick={() => closeModal()}
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
            <div className="relative top-0 z-50 mx-auto mb-20 mt-24 max-h-[60svh] max-w-fit bg-white">
              <button
                onClick={() => {
                  closeModal();
                }}
                className="absolute right-3 top-3 bg-black bg-opacity-60 p-2 transition-colors hover:bg-opacity-100"
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
              <div>
                <img
                  src={lightbox?.image}
                  alt=""
                  className="max-h-[60svh] max-w-screen-md"
                />
                <div className="bg-black px-8 py-4 text-sm text-white">
                  <div className="  border-l border-l-white py-1 pl-4">
                    {lightbox?.caption && lightbox?.caption[lang]}
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
