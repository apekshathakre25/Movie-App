import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../Utils/Axios";
import noimage from "../assets/noimage.jpg";

function TopNav() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(null);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearch(data.results);
    } catch (error) {
      console.log("Error fetching searches: ", error);
    }
  };

  useEffect(() => {
    if (query.length > 0) {
      GetSearches();
    } else {
      setSearch(null);
    }
  }, [query]);

  return (
    <div className="z-[100] w-[90%] lg:w-[50%] h-[10vh] relative flex mx-auto items-center">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
     

      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[80%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="absolute text-3xl text-zinc-400 ri-close-line right-0"
        ></i>
      )}
       <i className="text-3xl text-zinc-400 ri-menu-line lg:hidden"></i>

      {search && (
        <div className="w-[80%] max-h-[50vh] bg-zinc-200 absolute top-[100%] left-[5%] overflow-auto">
          {search.map((item, index) => (
            <Link
              to={`/${item.media_type}/details/${item.id}`}
              key={index}
              className="text-zinc-600 font-semibold hover:text-black hover:bg-zinc-300 duration-300 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
            >
              <img
                className="w-[10vh] h-[10vh] object-cover rounded-md mr-5 shadow-large"
                src={
                  item.backdrop_path || item.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        item.backdrop_path || item.profile_path
                      }`
                    : noimage
                }
                alt=""
              />

              <span>
                {item.name ||
                  item.title ||
                  item.original_name ||
                  item.original_title}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopNav;
