import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Fade } from "react-awesome-reveal";
export default function ScrollArrow() {
  const { fullpageApi } = useContext(AppContext);
  return (
    <div className="absolute bottom-1 left-1/2 z-20 -translate-x-[50%]">
      <Fade delay={1200}>
        <div
          className="arrow-down animate-bounce cursor-pointer p-3"
          onClick={() => window.fullpage_api.moveSectionDown()}
        >
          <svg
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-gray-600"
          >
            <path
              fill-rule="evenodd"
              d="M8 1v11.29l3.14-3.15 .7.7 -4.36 4.35 -4.36-4.36 .7-.71 3.14 3.14V.96h1Z"
            />
          </svg>
        </div>
      </Fade>
    </div>
  );
}
