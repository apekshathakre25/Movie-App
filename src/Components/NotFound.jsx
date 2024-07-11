import React from "react";
import noimage from "../assets/404.gif";

const NotFound = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-black">
        <img src={noimage} alt="NotFound..." />
        <h2 className="text-white text-3xl text-zinc-400 font-semibold">
          NotFound...
        </h2>
      </div>
    </>
  );
};

export default NotFound;
