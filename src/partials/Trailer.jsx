import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import NotFound from "../Components/NotFound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideos = useSelector((state) => state[category].info.videos);

  return (
    <div className="absolute w-screen h-screen flex items-center justify-center top-0 left-0 z-[100] bg-[rgba(0,0,0,.9)]">
      <Link
        onClick={() => navigate(-1)}
        className="absolute hover:text-[#6565CD] ri-close-fill text-black text-3xl right-[5%] bg-zinc-600 rounded-full"
      ></Link>
      {ytvideos ? (
        <ReactPlayer
          controls
          height={300}
          // width={500}
          lg:height={600}
          lg:width={1000}
          url={`https://www.youtube.com/watch?v=${ytvideos.key}`}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Trailer;
