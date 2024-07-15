import React from "react";
import { useNavigate } from "react-router-dom";
import redpipes from "../assets/red-pipes.svg";
import deadpool from "../assets/deadpool.png";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-2xl text-zinc-400 font-semibold mt-10 ml-10">
        <i
          onClick={() => navigate("/")}
          className="hover:text-[#6565CD] ri-arrow-left-line"
        ></i>
        About
      </h1>
      <div
        className="relative w-screen h-screen z-50 flex justify-center bg-cover bg-center overflow-y-auto"
        style={{ backgroundImage: `url(${redpipes})` }}
      >
        <div className="flex flex-col items-center">
          <p className="text-white text-[90px] mt-10 font-bold">Hii There,</p>
          <img src={deadpool} className="" />
          <p className="text-white text-[60px] mt-10 font-semibold">
            Let's talk about MOVIE-APP
          </p>
          <p className="text-white text-[40px] mt-10 font-semibold">
            The MOVIE-APP Advantage
          </p>
          <div className="flex justify-center gap-5">
            <p className="text-white mt-5 text-[40px] text-red-700 font-bold">
              1
            </p>
            <p className="text-white text-[20px] mt-5 font-semibold w-[40%]">
              Along with extensive metadata for movies, TV shows and people, we
              also offer one of the best selections of high resolution posters
              and fanart
            </p>
          </div>
          <div className="flex justify-center gap-5">
            <p className="text-white mt-5 text-[40px] text-red-700 font-bold">
              2
            </p>
            <p className="text-white text-[20px] mt-5 font-semibold w-[75%]">
              we officially support 39 languages we also have extensive regional
              data
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
