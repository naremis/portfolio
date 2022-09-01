import React from "react";
import Image from "next/image";
import rohanImg from "../assets/rohan-profile.png";

const Team = () => {
  return (
    <section className="table relative w-full bg-white md:px-48 px-10 md:pt-20 pb-44 text-center  ">
      <div className="md:pb-4 pb-10 opacity-70">
        <h1 className="md:pb-2 pb-6 text-4xl font-semibold ">Our Team</h1>
        <p className=" text-lg	  ">
          With over 100 years of combined experience, we've got a well-seasoned
          team at the helm
        </p>
      </div>

      <div className="grid w-full  md:grid-cols-3 grid-cols-1 gap-3 pt-10 gap-10">
        <div className="">
          <div className="z-10 relative -top-7">
            <Image src={rohanImg} alt="Banner Image" />
          </div>
          <div className="bg-gray-200 h-72 -top-80 relative z-0"></div>
        </div>
        <div className="">
          <div className="z-10 relative -top-7">
            <Image src={rohanImg} alt="Banner Image" />
          </div>
          <div className="bg-gray-200 h-72 -top-80 relative z-0"></div>
        </div>
        <div className="">
          <div className="z-10 relative -top-7">
            <Image src={rohanImg} alt="Banner Image" />
          </div>
          <div className="bg-gray-200 h-72 -top-80 relative z-0"></div>
        </div>
      </div>
    </section>
  );
};
export default Team;
