import React from "react";
import { Link } from "react-router-dom";
import noimage from "../assets/noimage.jpg";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%] flex overflow-y-hidden mb-4 p-4">
      {data.length > 0 ? (
        data.map((item, index) => (
          <Link
            to={`/${item.media_type}/details/${item.id}`}
            key={index}
            className="min-w-[40%] lg:min-w-[15%] h-[35vh] bg-zinc-900 mr-5 mb-5"
          >
            <img
              className="object-cover w-full h-[45%]"
              src={
                item.backdrop_path || item.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      item.backdrop_path || item.poster_path
                    }`
                  : noimage
              }
              alt=""
            />

            <div className="text-white p-3 h-[45%] overflow-y-auto">
              <h1 className="text-sm font-bold lg:text-lg lg:font-semibold">
                {item.title ||
                  item.name ||
                  item.original_name ||
                  item.original__title}
              </h1>
              <p className="text-[10px] lg:text-base">
                {item.overview.slice(0, 50)}...
                <span className="text-zinc-600 text-xs">More</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-3xl text-white font-black text-center mt-5">
          Nothing to Show
        </h1>
      )}
    </div>
  );
};
export default HorizontalCards;
