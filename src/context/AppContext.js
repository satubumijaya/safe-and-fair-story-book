import React, { createContext, useState, useContext } from "react";
import { story1 } from "stories/story-1";
import { story2 } from "stories/story-2";
import { story3 } from "stories/story-3";

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
    {
      thumbnail: require("images/stories/4/main.webp"),
      name: "Rulis Diana",
      title: "",
      content: "",
      gallery: [
        {
          image: "",
          caption: "",
        },
      ],
    },
    {
      thumbnail: require("images/stories/5/main.webp"),
      name: "Sri Wahyuni",
      title: "",
      content: "",
      gallery: [
        {
          image: "",
          caption: "",
        },
      ],
    },
    {
      thumbnail: require("images/stories/6/main.webp"),
      name: "Venolia Adeningrum",
      title: "",
      content: "",
      gallery: [
        {
          image: "",
          caption: "",
        },
      ],
    },
    {
      thumbnail: require("images/stories/7/main.webp"),
      name: "Annisa",
      title: "",
      content: "",
      gallery: [
        {
          image: "",
          caption: "",
        },
      ],
    },
    {
      thumbnail: require("images/stories/8/main.webp"),
      name: "Faoziah",
      title: "",
      content: "",
      gallery: [
        {
          image: "",
          caption: "",
        },
      ],
    },
    {
      thumbnail: require("images/stories/9/main.webp"),
      name: "Rita Ramadani",
      title: "",
      content: "",
      gallery: [
        {
          image: "",
          caption: "",
        },
      ],
    },
    {
      thumbnail: require("images/stories/10/main.webp"),
      name: "Sogi Alamsyah",
      title: "",
      content: "",
      gallery: [
        {
          image: "",
          caption: "",
        },
      ],
    },
    {
      thumbnail: require("images/stories/11/main.webp"),
      name: "Sugih Hartini",
      title: "",
      content: "",
      gallery: [
        {
          image: "",
          caption: "",
        },
      ],
    },
    {
      thumbnail: require("images/stories/12/main.webp"),
      name: "Yekti Puji Rahayu",
      title: "",
      content: "",
      gallery: [
        {
          image: "",
          caption: "",
        },
      ],
    },
    {
      thumbnail: require("images/stories/13/main.webp"),
      name: "Dira Septiani",
      title: "",
      content: "",
      gallery: [
        {
          image: "",
          caption: "",
        },
      ],
    },
    {
      thumbnail: require("images/stories/14/main.webp"),
      name: "Fifi Ekawati Rohmah",
      title: "",
      content: "",
      gallery: [
        {
          image: "",
          caption: "",
        },
      ],
    },
    {
      thumbnail: require("images/stories/15/main.webp"),
      name: "Nunung Fitriana",
      title: "",
      content: "",
      gallery: [
        {
          image: "",
          caption: "",
        },
      ],
    },
    {
      thumbnail: require("images/stories/16/main.webp"),
      name: "Dian Roudotul Jannah",
      title: "",
      content: "",
      gallery: [
        {
          image: "",
          caption: "",
        },
      ],
    },
    {
      thumbnail: require("images/stories/17/main.webp"),
      name: "Sri Nursyifa",
      title: "",
      content: "",
      gallery: [
        {
          image: "",
          caption: "",
        },
      ],
    },
    {
      thumbnail: require("images/stories/18/main.webp"),
      name: "Susilawati",
      title: "",
      content: "",
      gallery: [
        {
          image: "",
          caption: "",
        },
      ],
    },
    {
      thumbnail: require("images/stories/19/main.webp"),
      name: "Yuliana",
      title: "",
      content: "",
      gallery: [
        {
          image: "",
          caption: "",
        },
      ],
    },
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
