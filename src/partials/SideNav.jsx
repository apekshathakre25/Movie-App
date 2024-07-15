import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-300 p-8 overflow-y-hidden">
      <h1 className="text-2xl text-white font-bold">
        <i className="ri-tv-fill text-[#6556CD] mr-2"></i>
        <span className="text-2xl">MOVIE-APP</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl">
        <h1 className="text-white font-semibold text-xl mt-8 mb-5">
          New Feeds
        </h1>
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] p-4 hover:text-white rounded-lg duration-300"
        >
          <i className="mr-1 ri-fire-fill"></i>Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] p-4 hover:text-white rounded-lg duration-300"
        >
          <i className=" mr-2 ri-bard-fill"></i>Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#6556CD] p-4 hover:text-white rounded-lg duration-300"
        >
          <i className="mr-2 ri-movie-2-fill"></i> Movies
        </Link>
        <Link
          to="/tvshows"
          className="hover:bg-[#6556CD] p-4 hover:text-white rounded-lg duration-300"
        >
          <i className="mr-2 ri-tv-2-fill"></i>Tv Shows
        </Link>
        <Link
          to="/people"
          className="hover:bg-[#6556CD] p-4 hover:text-white rounded-lg duration-300"
        >
          <i className="mr-2 ri-team-fill"></i>Peoples
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400" />

      <nav className="flex flex-col text-zinc-400 text-xl">
        <h1 className="text-white font-semibold text-xl mt-5 mb-5">
          Website Information
        </h1>
        <Link
          to="/about"
          target="_blank"
          className="hover:bg-[#6556CD] p-4 hover:text-white rounded-lg duration-300"
        >
          <i className="mr-2 ri-information-2-fill"></i>About
        </Link>
        <Link
          to="/contact"
          className="hover:bg-[#6556CD] p-4 hover:text-white rounded-lg duration-300"
        >
          <i className="mr-2 ri-phone-fill"></i> Contact
        </Link>
      </nav>
    </div>
  );
}

export default SideNav;
