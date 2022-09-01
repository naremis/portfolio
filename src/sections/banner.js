import React from "react";
import Image from "next/image";
// import bannerImage from "../assets/header.jpg";
import bannerImage from "../assets/banner.svg";
// import testBannerBg from "../assets/background.svg";
const Banner = () => {
  return (
    <section className="table w-full   ">
      <div className="md:w-7/12 w-full float-right mx-auto md:min-h-90  md:pt-10 pt-5">
        <div className="md:block hidden">
          {" "}
          <Image
            src={bannerImage}
            layout="fixed"
            alt="Banner Image"
            height={460}
            width={780}
          />
        </div>
        <div className="block md:hidden pb-6">
          <Image src={bannerImage} layout="responsive" alt="Banner Image" />
        </div>
      </div>
      <div className="md:w-5/12 w-full md:float-left md:text-left text-center min-h-90  md:pl-6  pt-36 mx-auto	">
        <div className="md:min-w-lg	md:max-w-lg mx-auto px-5 md:px-0 	">
          <h1 className="md:text-5xl text-4xl font-semibold	text-slate-700		">
            Build your audience & grow your business online smarter
          </h1>
          <h2 className="mt-4 md:text-lg text-base leading-relaxed opacity-70	 ">
            Get your blood tests delivered at let home collect sample from the
            victory of the managements that supplies best design system
            guidelines ever.
          </h2>
          <div className="block mt-8 md:flex">
            <div className="md:w-4/6 w-full">
              <input
                type="text"
                id="email"
                className="bg-gray-200 placeholder-gray-500 text-base px-4  rounded-md w-full h-12   focus:outline-0 focus:border focus:bg-gray-100	 focus:border-gray-500"
                placeholder="Enter Email address"
                required
              />
            </div>

            <div className="md:w-2/6 w-full md:pl-2 md:mt-0 mt-4">
              <button
                type="button"
                className=" text-white bg-orange-600 hover:bg-orange-700 w-full rounded-md h-12	"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
