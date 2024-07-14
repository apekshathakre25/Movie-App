import React from "react";
import { Link } from "react-router-dom";
import noimage from "../assets/noimage.jpg";

const Card = ({ data, title }) => {
  console.log("data", data);
  return (
    <div className="flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24] justify-center">
      {data.map((item, index) => (
        <Link
          to={`/${item.media_type || title}/details/${item.id}`}
          className="relative w-[25vh] mr-[5%] mb-[5%]"
          key={item.id}
        >
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
            src={
              item.backdrop_path || item.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    item.poster_path || item.backdrop_path || item.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <h1 className="text-xl text-zinc-300 mt-3 font-semibold">
            {item.name ||
              item.title ||
              item.original_name ||
              item.original_title}
          </h1>
          {item.vote_average && (
            <div className="absolute right-[-8%] bottom-[20%] text-white w-[6vh] text-xl font-semibold h-[6vh] rounded-full flex justify-center items-center bg-yellow-600">
              {(item.vote_average * 10).toFixed()} <p>%</p>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Card;
