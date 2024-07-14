import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../Utils/Axios";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import TopNav from "../partials/TopNav";
import DropDown from "../partials/DropDown";
import Card from "../partials/Card"; // Assuming you have a Card component

const Popular = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "MOVIE-APP | POPULAR" + " " + category.toUpperCase();


  const getPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      console.log(data);

      if (data.results.length > 0) {
        setPopular((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error fetching searches: ", error);
    }
  };

  const refreshPage = () => {
    if (popular.length === 0) {
      getPopular();
    } else {
      setPage(1);
      setPopular([]);
      getPopular();
    }
  };

  useEffect(() => {
    refreshPage();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full px-[5%] flex items-center justify-between mb-10">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6565CD] ri-arrow-left-line"
          ></i>
          Popular
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav />
          <DropDown
            title="Category"
            options={["movie", "tv"]}
            func={(value) => setCategory(value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={getPopular}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <Card data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
