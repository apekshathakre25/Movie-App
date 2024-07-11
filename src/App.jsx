import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movies from "./Components/Movies";
import Tvshows from "./Components/Tvshows";
import People from "./Components/People";
import MovieDetail from "./Components/MovieDetail";
import TvDetail from "./Components/TvDetail";
import PersonDetail from "./Components/PersonDetail";
import Trailer from "./partials/Trailer";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MovieDetail />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<TvDetail />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/people" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetail />} />
        <Route path="" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
