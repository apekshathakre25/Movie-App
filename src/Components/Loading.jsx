import React from "react";
import Loader from "../assets/giphy.gif";

const Loading = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-black">
        <img src={Loader} alt="Loading..." />
        <h2 className="text-white text-3xl text-zinc-400 font-semibold">
          Loading...
        </h2>
        <p className="text-white text-3xl text-zinc-400 font-semibold">
          Please wait a moment.
        </p>
        <p className="text-white text-3xl text-zinc-400 font-semibold">
          This may take a few seconds.
        </p>
        <p className="texxt-white text-3xl text-zinc-400 font-semibold">
          Thank you for your patience.
        </p>
      </div>
    </>
  );
};

export default Loading;
