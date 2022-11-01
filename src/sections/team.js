import React from "react";
import Image from "next/image";
import rohanImg from "../assets/rohan-profile.png";
import elonMuskImg from "../assets/elon_musk.png";
const Team = () => {
  return (
    <section
      id="team"
      className="table relative w-full h-screen bg-white md:px-48 px-5 md:pt-6 pt-8 md:pb-28  pb-8  "
    >
      <div className="pb-8 opacity-70 text-center">
        <h1 className="pb-4 text-4xl font-semibold ">Our Team</h1>
        <p className=" text-lg">
          With over 100 years of combined experience, we've got a well-seasoned
          team at the helm
        </p>
      </div>

      <div className="grid w-full md:grid-cols-3 grid-cols-1 md:gap-10 gap-5">
        {[0, 1, 2].map((e) => (
          <div key={e} className=" w-full  ">
            {/* <div className="relative transition ease-in-out duration-75 hover:scale-105 cursor-pointer">
              <div className="z-10 absolute ">
                <Image src={elonMuskImg} alt="Banner Image" />
              </div>
              <div className="bg-gray-200 md:h-64 h-76 mt-16 z-0 "></div>
            </div> */}
            <div className=" transition ease-in-out duration-75 hover:scale-105 cursor-pointer    ">
              <Image
                priority={false}
                src={elonMuskImg}
                alt="Banner Image"
                layout="responsive"
              />
            </div>

            <div className="pt-5 text-slate-900	opacity-90	">
              <h2 className="text-2xl font-semibold">Mike Cannon-Brookes</h2>
              <div className="flex">
                {" "}
                <h3 className="text-xs pt-2 pr-3 ">CO-FOUNDER & CO-CEO</h3>
                <a
                  href="https://www.linkedin.com/in/rohantaufique/"
                  target="_blank"
                  className="fa-brands fa-linkedin text-xl pt-1"
                ></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Team;
