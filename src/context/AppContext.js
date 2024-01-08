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
});

export const AppContextProvider = ({ children }) => {
  const [galleryModalIsOpen, setGalleryModalIsOpen] = useState(false);
  const [currentStory, setCurrentStory] = useState(null);
  const [stories, setStories] = useState([
    story1,
    story2,
    story3,
    {
      thumbnail: require("images/stories/4/thumbnail.jpg"),
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
      thumbnail: require("images/stories/5/thumbnail.jpg"),
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
      thumbnail: require("images/stories/6/thumbnail.jpg"),
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
      thumbnail: require("images/stories/7/thumbnail.jpg"),
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
      thumbnail: require("images/stories/8/thumbnail.jpg"),
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
      thumbnail: require("images/stories/9/thumbnail.jpg"),
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
      thumbnail: require("images/stories/10/thumbnail.jpg"),
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
      thumbnail: require("images/stories/11/thumbnail.jpg"),
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
      thumbnail: require("images/stories/12/thumbnail.jpg"),
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
      thumbnail: require("images/stories/13/thumbnail.jpg"),
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
      thumbnail: require("images/stories/14/thumbnail.jpg"),
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
      thumbnail: require("images/stories/15/thumbnail.jpg"),
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
      thumbnail: require("images/stories/16/thumbnail.jpg"),
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
      thumbnail: require("images/stories/17/thumbnail.jpg"),
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
      thumbnail: require("images/stories/18/thumbnail.jpg"),
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
      thumbnail: require("images/stories/19/thumbnail.jpg"),
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
