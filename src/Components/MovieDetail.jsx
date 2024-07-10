import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadMovie, removeMovie } from "../store/actions/MovieAction";
import { Link, useNavigate, useParams } from "react-router-dom";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);

  const dispatch = useDispatch();
  console.log("info", info);

  useEffect(() => {
    dispatch(asyncLoadMovie(id));
    return () => {
      dispatch(removeMovie());
    };
  }, []);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-screen px-[10%]"
    >
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-2xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6565CD] ri-arrow-left-line"
        ></Link>
        <a target="_blank" href={info.details.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          IMDB
        </a>
      </nav>

      <img
        className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
        src={`https://image.tmdb.org/t/p/original/${
          info.details.poster_path || info.details.backdrop_path
        }`}
        alt=""
      />

      <div className="w-full flex">
        <div>
          <div className="mt-5">
            {info.watchprovider &&
              info.watchprovider.flatrate &&
              info.watchprovider.flatrate.map((item, index) => {
                return (
                  <img
                    className="w-[5vh] h-[5vh] object-cover rounded-md"
                    key={index}
                    src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                    alt=""
                  />
                );
              })}

            {info.watchprovider &&
              info.watchprovider.rent &&
              info.watchprovider.rent.map((w, index) => {
                return (
                  <img
                    className="w-[5vh] h-[5vh] object-cover rounded-md"
                    key={index}
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt=""
                  />
                );
              })}

            {info.watchprovider &&
              info.watchprovider.buy &&
              info.watchprovider.buy.map((w, index) => {
                return (
                  <img
                    className="w-[5vh] h-[5vh] object-cover rounded-md"
                    key={index}
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt=""
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default MovieDetail;
