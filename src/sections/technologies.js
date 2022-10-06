import React from "react";
import Image from "next/image";
import techImage from "../assets/tech.jpg";
import { TECH_CONTENT } from "./constants";

const Technologies = () => {
  return (
    <section id="tech" className="table relative w-full md:mt-24 mt-10 ">
      <div className="md:mt-24 mt-56 bg-gray-100 md:pb-28 pb-16  ">
        {/* vector image */}
        <div className="-mt-20 w-full absolute h-20">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        {/* left section of the page  */}
        <div className="md:w-3/6 w-full bg-gray-100 float-left md:px-20 md:px-40 h-96">
          {/* card with image and description */}
          <div className="w-96  relative md:bottom-20 bottom-48 pt-5 m-auto px-5">
            {/* card header image */}
            <div className="h-72 relative">
              <Image
                layout="fill"
                objectFit="cover"
                alt="Banner Image"
                src={techImage}
                className="rounded-xl rounded-b-none	 "
              />
            </div>
            {/* card body */}
            <div className=" relative bottom-16 ">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="text-slate-700 fill-current"
              >
                <polygon points="-30,95 583,95 583,65" className=" "></polygon>
              </svg>
              <div className="bg-slate-700 text-white p-5 rounded-xl rounded-t-none relative bottom-1 py-10 break-all md:text-left text-center">
                <h2 className="text-xl	antialiased font-bold	">
                  Great for your awesome project
                </h2>
                <p className="font-thin	mt-2 ">
                  Putting together a page has never been easier than matching
                  together pre-made components. From landing pages presentation
                  to login areas, you can easily customise and built your pages.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right section of the page */}
        <div className="grid bg-gray-100 text-center md:w-3/6 w-full md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 md:px-10 px-5 pt-5 ">
          {TECH_CONTENT.map((tech) => (
            <div key={tech.id}>
              <div className="text-gray-500 p-3 md:text-base text-2xl text-center inline-flex items-center justify-center md:w-12 md:h-12 h-16 w-16 mb-5 shadow-lg rounded-full bg-white">
                <i className={tech.icon}></i>
              </div>
              <h2 className="text-xl font-semibold antialiased opacity-80 ">
                {tech.title}
              </h2>
              <p className="	  antialiased	text-gray-700 opacity-80 mt-2">
                {tech.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Technologies;
