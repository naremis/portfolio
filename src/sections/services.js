import React from "react";
import Image from "next/image";
import { SERVICES_CONTENT } from "./constants";

const Services = () => {
  return (
    <section className="table relative w-full bg-gray-100 px-48 py-44 text-center  ">
      <div className="pb-8 opacity-70">
        <h1 className=" pb-2 text-4xl font-semibold ">Services</h1>
        <p className=" text-lg	  ">
          We provide the best in class services for our customer
        </p>
      </div>

      <div className="grid bg-gray-100 w-full  md:grid-cols-3 grid-cols-1 gap-3">
        {SERVICES_CONTENT.map((service) => (
          <div
            key={service.id}
            className="transition ease-in-out duration-75 p-4 max-w-sm bg-white  border border-gray-200 drop-shadow-md  hover:scale-105 hover:shadow-2xl	 "
          >
            <i
              className={` ${service.icon}   text-4xl py-3 font-normal text-orange-600 `}
            ></i>
            <h5 className=" text-xl font-semibold opacity-70 mb-2	  ">
              {service.title}
            </h5>
            <p className="text-slate-500 text-sm mb-2 subpixel-antialiased		">
              {service.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;
