import React from "react";
import Image from "next/image";
import bannerImage from "../assets/header.jpg";

const Banner = () => {
  return (
    <section className="table w-full 	">
      <div className="md:w-3/6 w-full float-left	md:pt-24 md:pl-10 bg-white md:pr-32 p-10  md:text-left text-center	">
        <h1 className="md:text-5xl text-4xl font-semibold	text-slate-700		">
          Build your audience & grow your business online smarter
        </h1>
        <h2 className="md:mt-4 mt-10 text-lg leading-relaxed opacity-70	 ">
          Get your blood tests delivered at let home collect sample from the
          victory of the managements that supplies best design system guidelines
          ever.
        </h2>
        <div className="block mt-6">
          <input
            type="text"
            id="email"
            className="bg-slate-100	text-gray-900 text-base md:w-4/6 w-full rounded-md  px-5 h-12	  active:outline-none"
            placeholder="Enter Email address"
            required
          />
          <button
            type="button"
            className=" text-white bg-gray-600 hover:bg-gray-700 w-full md:w-auto md:mt-0 mt-3 leading-relaxed float-right rounded-md  text-lg px-10 h-12	"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="md:w-3/6 w-full justify-end flex	float-right	">
        <Image
          src={bannerImage}
          height={1000}
          width={1200}
          alt="Banner Image"
        />
      </div>
    </section>
  );
};
export default Banner;
