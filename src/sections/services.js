import React from "react";
import Image from "next/image";
import { SERVICES_CONTENT } from "./constants";

const Services = () => {
  return (
    <section className="table relative w-full bg-gray-100 md:px-48 px-10 md:pt-20 pb-44 text-center  ">
      <div className="md:pb-4 pb-10 opacity-70">
        <h1 className="md:pb-2 pb-6 text-4xl font-semibold ">Our Services</h1>
        <p className=" text-lg	  ">
          We provide the best in class services for our customer
        </p>
      </div>

      <div className="grid bg-gray-100 w-full  md:grid-cols-3 grid-cols-1 gap-3">
        {SERVICES_CONTENT.map((service) => (
          <div
            key={service.id}
            className="transition ease-in-out duration-75 p-4 max-w-sm bg-white  border border-gray-200 drop-shadow-md  mx-auto hover:scale-105 hover:shadow-2xl	 "
          >
            <i
              className={` ${service.icon}   text-4xl py-4 font-normal text-orange-600 `}
            ></i>
            <h5 className=" text-xl font-bold opacity-60 mb-1	  ">
              {service.title}
            </h5>
            <p className="text-slate-500 text-sm  subpixel-antialiased		">
              {service.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;
