import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Hero from "./sections/Hero";
import ReactFullpage from "@fullpage/react-fullpage";
import Intro from "./sections/Intro";
import Gallery from "./sections/Gallery";
import React from "react";
import { AppContextProvider } from "./context/AppContext";
import Closing from "./sections/Closing";
import GalleryModal from "components/GalleryModal";
import LightboxModal from "components/LightboxModal";
import ShareModal from "components/ShareModal";
import { useCookies } from "react-cookie";

function App() {
  const { t, i18n, ready } = useTranslation();
  const [cookies, setCookie, removeCookie] = useCookies(["lang"]);

  useEffect(() => {
    if (cookies.lang) {
      i18n.changeLanguage(cookies.lang);
    } else {
      i18n.changeLanguage("en");
    }
  }, []);

  useEffect(() => {
    let expires = new Date();
    setCookie("lang", i18n.language, expires.getTime() + 30 * 1000);
  }, [i18n.language]);

  return (
    <div className="App">
      <AppContextProvider>
        <ReactFullpage
          scrollingSpeed={1000} /* Options here */
          anchors={["home", "intro", "gallery", "closing"]}
          normalScrollElements=".modal"
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <Hero />
                <Intro />
                <Gallery />
                <Closing />
              </ReactFullpage.Wrapper>
            );
          }}
        />
        <GalleryModal />
        <LightboxModal />
        <ShareModal />
      </AppContextProvider>
    </div>
  );
}

export default App;
