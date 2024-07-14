import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../Utils/Axios";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import TopNav from "../partials/TopNav";
import DropDown from "../partials/DropDown";
import Card from "../partials/Card"; // Assuming you have a Card component

const Tvshows = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tvshows, setTvshows] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "MOVIE-APP | TV-SHOWS" + " " + category.toUpperCase();

  const getTvShows = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      console.log(data);

      if (data.results.length > 0) {
        setTvshows((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error fetching searches: ", error);
    }
  };

  const refreshPage = () => {
    if (tvshows.length === 0) {
      getTvShows();
    } else {
      setPage(1);
      setTvshows([]);
      getTvShows();
    }
  };

  useEffect(() => {
    refreshPage();
  }, [category]);

  return tvshows.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full px-[5%] flex items-center justify-between mb-10">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6565CD] ri-arrow-left-line"
          ></i>
          TV Shows
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav />
          <DropDown
            title="Category"
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={(value) => setCategory(value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={tvshows.length}
        next={getTvShows}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <Card data={tvshows} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Tvshows;
