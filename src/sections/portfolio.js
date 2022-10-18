import React from "react";
import Image from "next/image";
import rohanImg from "../assets/rohan-profile.png";
import portfolio_1_img from "../assets/portfolio-1.jpg";
const Portfolio = () => {
  return (
    <section id="portfolio" className="table relative w-full bg-white pt-8   ">
      <div className="mb-32 opacity-70 text-center ">
        <h1 className=" pb-4 text-4xl font-semibold ">Our Portfolio</h1>
        <p className="text-lg leading-relaxed md:w-9/12 w-full md:mx-auto px-5 text-gray-800">
          Notus NextJS is a completly new product built using our past
          experience in web templates. Take the examples we made for you and
          start playing with them. Take the examples we made.
        </p>
      </div>
      <div className="bg-slate-600 grid w-full md:grid-cols-3 grid-cols-1 md:gap-8 gap-32 text-gray-800  md:px-20 px-5 md:pb-10 pb-8">
        {[0, 1, 2].map((e, index) => (
          <div key={e} className=" -mt-24">
            <h2
              className={`text-center text-xl font-semibold mb-4 md:text-gray-700  ${
                index !== 0 ? "text-white" : "text-gray-700"
              }`}
            >
              P&R Portal
            </h2>
            <div className="transition ease-in-out md:hover:-translate-y-4">
              {" "}
              <Image
                priority={false}
                src={portfolio_1_img}
                alt="Porfolio Image"
                className="rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
      {/* <div className="md:h-72 0 block mt-24 h-96	z-0"></div> */}
    </section>
  );
};
export default Portfolio;
