import React, { useEffect, useState } from "react";
import SideNav from "../partials/SideNav";
import TopNav from "../partials/TopNav";
import axios from "../Utils/Axios";
import Header from "../partials/Header";
import HorizontalCards from "../partials/HorizontalCards";
import DropDown from "../partials/DropDown";
import Loading from "./Loading";

const Home = () => {
  document.title = "MOVIE-APP | HOMEPAGE";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");
  const [error, setError] = useState(null);

  const getRandomWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const randomData =
        data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomData);
    } catch (error) {
      console.log("Error fetching searches: ", error);
      setError("Failed to load wallpaper. Please try again.");
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      console.log(data);
      setTrending(data.results);
    } catch (error) {
      console.log("Error fetching searches: ", error);
      setError("Failed to load trending data. Please try again.");
    }
  };

  useEffect(() => {
    getTrending();
    if (!wallpaper) getRandomWallpaper();
  }, [category]);

  console.log(trending);

  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />

        <div className="flex justify-between p-5">
          <h1 className="text-3xl text-zinc-400 font-semibold">Trending</h1>
          <DropDown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e)}
          />
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <h1>
      <Loading />
    </h1>
  );
};

export default Home;
