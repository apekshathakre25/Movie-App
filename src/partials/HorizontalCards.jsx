import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%] flex overflow-y-hidden mb-5 p-5">
      {data.map((item, index) => (
        <Link
          to={`/${item.media_type}/details/${item.id}`}
          key={index}
          className="min-w-[15%] bg-zinc-900 mr-5 mb-5"
        >
          <img
            className="object-cover w-full h-[45%]"
            src={`https://image.tmdb.org/t/p/original/${
              item.backdrop_path || item.poster_path
            })`}
            alt=""
          />

          <div className="text-white p-3 h-[45%]">
            <h1 className="text-xl font-semibold">
              {item.title ||
                item.name ||
                item.original_name ||
                item.original__title}
            </h1>
            <p className="">
              {item.overview.slice(0, 50)}...
              <span className="text-zinc-600">More</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default HorizontalCards;
