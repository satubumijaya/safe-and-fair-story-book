import React, { createContext, useState, useContext } from "react";
import { story1 } from "stories/story-1";
import { story10 } from "stories/story-10";
import { story11 } from "stories/story-11";
import { story12 } from "stories/story-12";
import { story13 } from "stories/story-13";
import { story14 } from "stories/story-14";
import { story15 } from "stories/story-15";
import { story16 } from "stories/story-16";
import { story17 } from "stories/story-17";
import { story18 } from "stories/story-18";
import { story19 } from "stories/story-19";
import { story2 } from "stories/story-2";
import { story3 } from "stories/story-3";
import { story4 } from "stories/story-4";
import { story5 } from "stories/story-5";
import { story6 } from "stories/story-6";
import { story7 } from "stories/story-7";
import { story8 } from "stories/story-8";
import { story9 } from "stories/story-9";

export const AppContext = createContext({
  galleryModalIsOpen: false,
  setGalleryModalIsOpen: null,
  currentStory: null,
  setCurrentStory: null,
  stories: null,
  setStories: null,
  lightbox: null,
  setLightBox: null,
});

export const AppContextProvider = ({ children }) => {
  const [galleryModalIsOpen, setGalleryModalIsOpen] = useState(false);
  const [currentStory, setCurrentStory] = useState(null);
  const [stories, setStories] = useState([
    story1,
    story2,
    story3,
    story4,
    story5,
    story6,
    story7,
    story8,
    story9,
    story10,
    story11,
    story12,
    story13,
    story14,
    story15,
    story16,
    story17,
    story18,
    story19,
  ]);

  const [lightbox, setLightBox] = useState(null);

  return (
    <AppContext.Provider
      value={{
        galleryModalIsOpen,
        setGalleryModalIsOpen,
        currentStory,
        setCurrentStory,
        stories,
        setStories,
        lightbox,
        setLightBox,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
