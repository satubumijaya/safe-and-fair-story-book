import logo from "./logo.svg";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Hero from "./sections/Hero";
import ReactFullpage from "@fullpage/react-fullpage";
import Intro from "./sections/Intro";
import Gallery from "./sections/Gallery";
import React, { useContext } from "react";
import { AppContext, AppContextProvider } from "./context/AppContext";
import Closing from "./sections/Closing";
import GalleryModal from "components/GalleryModal";
import LightboxModal from "components/LightboxModal";
import ShareModal from "components/ShareModal";

function App() {
  const { t, i18n, ready } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);

  return (
    <div className="App">
      <AppContextProvider>
        <ReactFullpage
          scrollingSpeed={1000} /* Options here */
          anchors={["home", "intro", "gallery"]}
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
