import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-screen h-screen flex p-10 justify-around">
        <div className="shadow-[8px_17px_38px_2px] w-[20%] h-[60%] bg-white rounded-lg mx-10 text-black flex flex-col items-center p-5">
          <div className="bg-cyan-400 w-full p-4 mb-4">
            <p className="font-semibold text-lg">FAQ</p>
          </div>
          <hr className="w-full h-[2px] border-black" />
          <p className="mt-4 font-semibold text-lg">Our History</p>
          <hr className="mt-2 w-full h-[2px] border-black" />
          <p className="mt-4 font-semibold text-lg">Get In Touch</p>
          <hr className="mt-2 w-full h-[2px] border-black" />
          <p className="mt-4 font-semibold text-lg">Logos & Attribution</p>
          <hr className="mt-2 w-full h-[2px] border-black" />
          <p className="mt-4 font-semibold text-lg">General</p>
          <hr className="mt-2 w-full h-[2px] border-black" />
          <p className="mt-4 font-semibold text-lg">Account Website</p>
        </div>

        <div className="w-[60%] h-[60%] bg-white rounded-md p-5 shadow-[8px_17px_38px_2px] ">
          <p className="font-semibold text-2xl">Get in Touch</p>
          <p className="mt-5 font-semibold text-xl mb-2">Genral Support</p>
          <hr className="border-red-200" />
          <p className="mt-2">
            If you're looking for some help using TMDB, the best place to get
            support is our forums.
          </p>
          <p className="mt-8 font-semibold text-xl mb-2">Contact Sales</p>
          <hr className="border-red-200" />
          <p className="mt-2">
            If you or your business would like to talk to our sales team about
            using MOVIE-APP commercially
          </p>
          <p className="mt-8 font-semibold text-xl mb-2">General Inquiry</p>
          <hr className="border-red-200" />
          <p className="mt-2">If you have something else (non sales related) to go over, feel free to contact us directly</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
