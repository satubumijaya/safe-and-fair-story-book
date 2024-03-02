import { AppContext } from "context/AppContext";
import React, { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";
import Modal from "react-overlays/Modal";

export default function ShareModal() {
  const { t, i18n, ready } = useTranslation();
  const lang = i18n.language;
  const { shareModalIsOpen, setShareModalIsOpen } = useContext(AppContext);
  const [copied, setCopied] = useState(false);
  const siteUrl = `${window?.location?.origin}${window?.location?.pathname}`;

  const renderBackdrop = (props) => <div className="backdrop fixed inset-0 bg-black bg-opacity-80" {...props} />;

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 6000);
    }
  }, [copied]);

  const closeModal = () => {
    window.fullpage_api.setAllowScrolling(true);
    setShareModalIsOpen(false);
  };

  return (
    <div>
      <Modal
        // keyboard={true}
        onShow={() => window.fullpage_api.setAllowScrolling(false)}
        show={shareModalIsOpen}
        onExit={() => {
          window.fullpage_api.setAllowScrolling(true);
        }}
        onBackdropClick={() => setShareModalIsOpen(false)}
        onEscapeKeyDown={() => {
          setShareModalIsOpen(false);
          window.fullpage_api.setAllowScrolling(true);
        }}
        renderBackdrop={renderBackdrop}
        className="modal fixed inset-0 overflow-y-scroll focus-visible:outline-none"
      >
        <Fade triggerOnce={false}>
          <div className="flex min-h-[100svh] items-center px-4">
            {copied && (
              <Fade triggerOnce={false}>
                <div className="absolute left-1/2 top-10 -translate-x-1/2 rounded bg-white px-4 py-0.5 font-semibold">Link Copied</div>
              </Fade>
            )}

            <div
              className="absolute inset-0"
              onClick={() => {
                closeModal();
              }}
            ></div>
            <div className="relative top-0 z-50 mx-auto mb-20 mt-24 w-full max-w-sm bg-white">
              {/* close button */}
              <button
                onClick={() => {
                  closeModal();
                }}
                className="0 absolute right-0 z-20 bg-main p-2 transition-colors hover:bg-main-dark"
              >
                <svg viewBox="0 0 22.43 22.43" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                  <g fill="#fff" stroke="#fff" strokeMiterlimit="10" strokeWidth="2">
                    <path d="m.71 21.72 21.01-21.01" />
                    <path d="m21.72 21.72-21.01-21.01" />
                  </g>
                </svg>
              </button>

              <div className="bg-white">
                <div className="p-6 md:p-10">
                  {/* <div
                    className="absolute inset-6 z-0 bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${require("images/convex-gray.webp")})`,
                    }}
                  ></div> */}
                  <div className="mb-8 text-center font-semibold uppercase">{t("closing.share-to")}</div>
                  <div className="relative z-20 md:px-4">
                    <div className="grid grid-cols-2 grid-rows-2 gap-6">
                      <a className="cursor-pointer" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`} target="_blank" rel="noreferrer">
                        <svg className="mx-auto max-h-20 max-w-20" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                          <path d="m49.16 0c3.77 0 6.84 3.07 6.84 6.84v42.32c0 3.78-3.07 6.84-6.84 6.84h-11.64v-21.1h7.28l1.39-9.04h-8.67v-5.86c0-2.47 1.21-4.88 5.09-4.88h3.94v-7.69s-3.58-.61-7-.61c-7.14 0-11.81 4.33-11.81 12.16v6.89h-7.94v9.04h7.94v21.1h-20.9c-3.78 0-6.84-3.07-6.84-6.84v-42.33c0-3.77 3.07-6.84 6.84-6.84z" fill="#414343" fillRule="evenodd" />
                        </svg>
                        <div className="mt-2 text-center text-sm">Facebook</div>
                      </a>
                      <a className="cursor-pointer" href={`https://x.com/intent/tweet?text=${encodeURIComponent(siteUrl)}`} target="_blank" rel="noreferrer">
                        <svg className="mx-auto max-h-20 max-w-20" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                          <g fill="#414343" fillRule="evenodd">
                            <path d="m42.02 44.21-23.06-32.3h-5.01l23.06 32.3z" />
                            <path d="m56 6.84c0-3.78-3.07-6.84-6.84-6.84h-42.32c-3.77 0-6.84 3.07-6.84 6.84v42.32c0 3.78 3.07 6.84 6.84 6.84h42.32c3.78 0 6.84-3.07 6.84-6.84zm-20.52 39.66-10.08-14.37-12.62 14.37h-3.26l14.43-16.43-14.43-20.57h11.01l9.54 13.6 11.96-13.6h3.26l-13.76 15.67 14.96 21.33z" />
                          </g>
                        </svg>
                        <div className="mt-2 text-center text-sm">X</div>
                      </a>
                      <a className="cursor-pointer" href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(siteUrl)}`} target="_blank" rel="noreferrer">
                        <svg className="mx-auto max-h-20 max-w-20" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                          <path d="m49.16 0c3.77 0 6.84 3.07 6.84 6.84v42.32c0 3.78-3.07 6.84-6.84 6.84h-42.32c-3.78 0-6.84-3.07-6.84-6.84v-42.32c0-3.77 3.07-6.84 6.84-6.84zm-31.61 46.3v-24.69h-8.21v24.69zm29.59 0v-14.16c0-7.58-4.05-11.11-9.45-11.11-4.35 0-6.3 2.39-7.4 4.08v-3.5h-8.21c.11 2.32 0 24.69 0 24.69h8.21v-13.79c0-.74.05-1.48.27-2 .59-1.47 1.94-3 4.21-3 2.97 0 4.16 2.26 4.16 5.58v13.21zm-33.64-36.6c-2.81 0-4.64 1.85-4.64 4.27s1.78 4.27 4.53 4.27h.05c2.86 0 4.64-1.9 4.64-4.27-.05-2.42-1.78-4.26-4.59-4.27z" fill="#414343" fillRule="evenodd" />
                        </svg>
                        <div className="mt-2 text-center text-sm">LinkedIn</div>
                      </a>
                      <CopyToClipboard text={siteUrl} onCopy={() => setCopied(true)}>
                        <div className="cursor-pointer">
                          <svg className="mx-auto max-h-20 max-w-20" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                            <path d="m49.16 0h-42.32c-3.77 0-6.84 3.07-6.84 6.84v42.32c0 3.78 3.07 6.84 6.84 6.84h42.32c3.78 0 6.84-3.07 6.84-6.84v-42.32c0-3.78-3.07-6.84-6.84-6.84zm-15.32 35.55-10.11 10.11c-1.28 1.28-2.99 1.99-4.8 1.99-1.81 0-3.52-.71-4.8-1.99s-1.99-2.99-1.99-4.8.71-3.52 1.99-4.8l10.11-10.11c1.28-1.28 2.99-1.99 4.8-1.99 1.05 0 2.09.24 3.03.71l-2.22 2.22c-.26-.05-.53-.08-.81-.08-1.05 0-2.04.41-2.78 1.15l-10.11 10.11-.03.03s-.01.01-.02.02c-.02.02-.04.04-.06.06l-.14.14c-.63.73-.99 1.65-1 2.62-.01 1.06.39 2.06 1.14 2.8.73.73 1.72 1.14 2.76 1.14.98 0 1.91-.35 2.65-1s10.37-10.36 10.37-10.36c.94-.94 1.34-2.3 1.07-3.6l2.22-2.22c1.3 2.6.81 5.76-1.27 7.84zm8.04-15.62-10.11 10.11c-1.28 1.28-2.99 1.99-4.8 1.99-1.06 0-2.1-.25-3.03-.71l2.13-2.13c.26.05.52.08.78.08.98 0 1.91-.35 2.65-1s10.36-10.36 10.36-10.36c1.54-1.53 1.54-4.03 0-5.57-.74-.74-1.73-1.15-2.78-1.15s-2.04.41-2.78 1.15l-10.11 10.11-.03.04s-.01.01-.02.02c-.02.02-.04.04-.06.06l-.14.14c-.82.95-1.17 2.23-.92 3.44l-2.13 2.13c-1.3-2.59-.8-5.75 1.27-7.83l10.11-10.11c1.28-1.28 2.99-1.99 4.8-1.99s3.52.71 4.8 1.99 1.99 2.99 1.99 4.8-.71 3.52-1.99 4.8z" fill="#414343" />
                          </svg>
                          <div className="mt-2 text-center text-sm">Copy link</div>
                        </div>
                      </CopyToClipboard>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="h-4 flex-1 bg-main"></div>
                  <div className="h-4 w-1/4 bg-main-dark"></div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
