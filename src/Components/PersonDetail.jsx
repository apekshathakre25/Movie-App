import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadPeople, removePeople } from "../store/actions/PeopleAction";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import HorizontalCards from "../partials/HorizontalCards";
import DropDown from "../partials/DropDown";

const PersonDetail = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.people);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("movie");
  console.log("info", info);

  useEffect(() => {
    dispatch(asyncLoadPeople(id));
    return () => {
      dispatch(removePeople());
    };
  }, [id]);
  return info ? (
    <div className="px-[15%] w-screen h-[170vh] bg-[#1F1E24] pb-[5%]">
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-2xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6565CD] ri-arrow-left-line"
        ></Link>
      </nav>

      <div className="w-full flex">
        {/* part-1 */}
        <div className="w-[20%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.details.profile_path}`}
            alt=""
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

          {/* part-2 */}
          <div className="text-2xl flex gap-x-5 text-white ">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i class="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i class="ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
            >
              <i class="ri-twitter-x-fill"></i>
            </a>
          </div>

          {/* personal-info */}
          <h1 className="text-2xl text-zinc-400 font-semibold my-5">
            Person Info
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Known For</h1>
          <h1 className="text-zinc-400">{info.details.known_for_department}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
          <h1 className="text-zinc-400">
            {info.details.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
            Birth Date
          </h1>
          <h1 className="text-zinc-400">{info.details.birthday}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
            Place of Birth
          </h1>
          <h1 className="text-zinc-400">{info.details.place_of_birth}</h1>
        </div>

        {/* part-3 */}
        <div className="w-[80%] ml-[5%]">
          <h1 className="text-6xl text-zinc-400 font-black my-5">
            {info.details.name}
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold">Overview</h1>
          <p className="text-zinc-400 mt-3">
            {info.details.biography.slice(0, 400)} more...
          </p>

          <h1 className="text-lg text-zinc-400 font-semibold mt-5">Summary</h1>
          <HorizontalCards data={info.combinedCredits.cast} />

          <div className="w-full flex justify-between">
            <h1 className="text-xl text-zinc-400 font-semibold mt-5">Acting</h1>

            <DropDown
              title="Category"
              options={["tv", "movie"]}
              func={(value) => setCategory(value)}
            />
          </div>

          <div className="list-disc text-zinc-400 w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-lg shadow-white mt-5 border-2 border-zinc-700 p-5">
            {info[category + "Credits"].cast.map((item, index) => (
              <li
                key={index}
                className="hover:text-white p-5 rounded duration-300 cursor-pointer"
              >
                <Link to={`/${category}/details/${item.id}`} className="">
                  <span>
                    {" "}
                    {item.name ||
                      item.title ||
                      item.original_name ||
                      item.original_title}
                  </span>
                  <span className="block ml-5 mt-2">
                    {item.character && `Character Name : ${item.character}`}
                  </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};
export default PersonDetail;
