import React, { createContext, useState, useContext } from "react";

export const AppContext = createContext({
  galleryModalIsOpen: false,
  setGalleryModalIsOpen: null,
  currentStory: null,
  setCurrentStory: null,
  stories: null,
  setStories: null,
});

export const AppContextProvider = ({ children }) => {
  const [galleryModalIsOpen, setGalleryModalIsOpen] = useState(false);
  const [currentStory, setCurrentStory] = useState(null);
  const [stories, setStories] = useState([
    {
      thumbnail: require("images/stories/1/thumbnail.jpg"),
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
      thumbnail: require("images/stories/2/thumbnail.jpg"),
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
      thumbnail: require("images/stories/3/thumbnail.jpg"),
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
      thumbnail: require("images/stories/4/thumbnail.jpg"),
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
      thumbnail: require("images/stories/5/thumbnail.jpg"),
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
      thumbnail: require("images/stories/6/thumbnail.jpg"),
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
      thumbnail: require("images/stories/7/thumbnail.jpg"),
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
      thumbnail: require("images/stories/8/thumbnail.jpg"),
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
      thumbnail: require("images/stories/9/thumbnail.jpg"),
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
      thumbnail: require("images/stories/10/thumbnail.jpg"),
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
      thumbnail: require("images/stories/11/thumbnail.jpg"),
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
      thumbnail: require("images/stories/12/thumbnail.jpg"),
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
      thumbnail: require("images/stories/13/thumbnail.jpg"),
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
      thumbnail: require("images/stories/14/thumbnail.jpg"),
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
      thumbnail: require("images/stories/15/thumbnail.jpg"),
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
      thumbnail: require("images/stories/16/thumbnail.jpg"),
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
      thumbnail: require("images/stories/17/thumbnail.jpg"),
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
      thumbnail: require("images/stories/18/thumbnail.jpg"),
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
      thumbnail: require("images/stories/19/thumbnail.jpg"),
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

  return (
    <AppContext.Provider
      value={{
        galleryModalIsOpen,
        setGalleryModalIsOpen,
        currentStory,
        setCurrentStory,
        stories,
        setStories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
