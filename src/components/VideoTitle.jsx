import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="py-36 px-12">
      <h1
        className="text-5xl  ml-3 font-semibold tracking-wide"
        style={{ textTransform: "capitalize" }}
      >
        {title}
      </h1>
      <p className="text-md py-6 ml-3 w-1/2">{overview}</p>
      <div>
        <button className="rounded border ml-3 border-gray-800 px-10 py-2 my-3 bg-black text-white  hover:scale-105 transition-transform font-semibold">
          Play
        </button>
        <button className="rounded border ml-3 border-gray-800 px-10 py-2 my-3 bg-white text-black  hover:scale-105 transition-transform font-semibold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;