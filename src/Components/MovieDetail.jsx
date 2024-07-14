import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadMovie, removeMovie } from "../store/actions/MovieAction";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import HorizontalCards from "../partials/HorizontalCards";

const MovieDetail = () => {
  const { pathname } = useLocation();
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
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-[170vh] px-[10%]"
    >
      {/* part-1 */}
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

      {/* part-2 */}
      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.details.poster_path || info.details.backdrop_path
          }`}
          alt=""
        />

        <div className="conent ml-[5%] text-white">
          <h1 className="text-5xl font-black">
            {info.details.name ||
              info.details.title ||
              info.details.original_name ||
              info.details.original_title}

            <span className="text-2xl font-bold text-zinc-200">
              ({info.details.release_date.split("-")[0]})
            </span>
          </h1>

          <div className="mt-5 mb-5 flex items-center gap-x-3">
            <span className="text-white w-[5vh] text-xl font-semibold h-[5vh] rounded-full flex justify-center items-center bg-yellow-600">
              {(info.details.vote_average * 10).toFixed()} <p>%</p>
            </span>
            <h1 className="font-semibold text-2xl w-[60px] leading-6">
              User Score
            </h1>
            <h1>{info.details.release_date}</h1>
            <h1>{info.details.genres.map((genre) => genre.name).join(",")}</h1>
            <h1>{info.details.runtime}Min</h1>
          </div>

          <h1 className="text-2xl font-semibold italic text-zinc-200">
            {info.details.tagline}
          </h1>

          <h1 className="text-2xl mt-5 mb-3">Overview</h1>
          <p>{info.details.overview}</p>

          <h1 className="text-2xl mt-5 mb-3">Movie Translations</h1>
          <p className="mb-10">{info.translations.join(", ")}</p>

          <Link
            className="py-5 px-5 bg-[#6565CD] rounded-lg"
            to={`${pathname}/trailer`}
          >
            <i class="text-xl mr-3 ri-play-fill"></i>Play Trailer
          </Link>
        </div>
      </div>

      {/* part-3 */}
      <div className="w-[80%] flex flex-col gap-y-5 mt-20">
        {info.watchprovider && info.watchprovider.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available for Platforms</h1>
            {info.watchprovider.flatrate.map((item, index) => (
              <img
                title={item.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                key={index}
                src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                alt={`${item.provider_name} logo`}
              />
            ))}
          </div>
        )}

        {info.watchprovider && info.watchprovider.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available for Rent</h1>
            {info.watchprovider.rent.map((w, index) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                key={index}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt={`${w.provider_name} logo`}
              />
            ))}
          </div>
        )}

        {info.watchprovider && info.watchprovider.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available for Purchase</h1>
            {info.watchprovider.buy.map((w, index) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                key={index}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt={`${w.provider_name} logo`}
              />
            ))}
          </div>
        )}
      </div>

      {/* part-4 */}
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-3xl font-bold text-white">
        Recommendations & Similar{" "}
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet/>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default MovieDetail;
