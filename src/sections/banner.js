import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import bannerImage from "../assets/banner.svg";
import Modal from "../components/Modal";
import FormItem from "../components/FormItem";
import { isMobile } from "react-device-detect";

import { BUDGET_OPTIONS, SERVICES_OPTIONS } from "./constants";
// import bannerImage from "../assets/header.jpg";
// import testBannerBg from "../assets/background.svg";
const Banner = () => {
  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);
  const formData = useRef({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    projectDetails: "",
  });
  return (
    <>
      {" "}
      <section id="home" className="table w-full -mt-16 pt-16">
        <div className="md:w-7/12 w-full float-right mx-auto  md:pt-10 pt-5 ">
          <div className="md:block hidden">
            {" "}
            <Image
              src={bannerImage}
              priority={true}
              alt="Banner Image"
              height={460}
              width={780}
            />
          </div>
          <div className="block md:hidden pb-6">
            <Image
              priority={true}
              src={bannerImage}
              layout="responsive"
              alt="Banner Image"
            />
          </div>
        </div>
        <div className="md:w-5/12 w-full md:float-left md:text-left text-center md:pl-6  pt-36 mx-auto	">
          <div className="md:min-w-lg	md:max-w-lg mx-auto px-5 md:px-0 	">
            <h1 className="md:text-5xl text-4xl font-semibold	text-slate-700">
              Build your audience & grow your business online smarter
            </h1>
            <h2 className="md:text-lg mt-4 text-base leading-relaxed opacity-70">
              Get your blood tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever.
            </h2>

            <form
              className="block md:mt-8 mt-4 md:flex"
              onSubmit={(e) => {
                e.preventDefault();
                setModalVisible(true);
                document
                  .querySelector("body")
                  .classList.toggle("overflow-hidden");
              }}
            >
              <div className="md:w-4/6 w-full">
                <input
                  onChange={(event) =>
                    (formData.current.email = event.target.value)
                  }
                  type="email"
                  id="email-banner"
                  className="bg-gray-200 placeholder-gray-500 text-base px-4  rounded-md w-full h-12   focus:outline-0 focus:border focus:bg-gray-100	 focus:border-gray-500"
                  placeholder="Enter Email address"
                  required
                />
              </div>

              <div className="md:w-2/6 w-full md:pl-2 md:mt-0 mt-4">
                <button
                  type="submit"
                  className=" text-white font-medium tracking-wide bg-orange-600 hover:bg-orange-700 w-full rounded-md h-12 "
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {modalVisible && (
        <Modal
          onClose={setModalVisible}
          title={
            <div className="mb-2 md:pt-2">
              <h1 className="md:text-4xl text-3xl md:font-bold font-extrabold text-slate-700 md:mb-2 mb-1 ">
                WE BUILD YOUR DREAMS!
              </h1>
              <h2 className="text-slate-700 opacity-80 md:text-lg text-base tracking-tight leading-6">
                You're one step away from your personal custom web application
              </h2>
            </div>
          }
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("formSubmitted", e);
              console.log("formData", formData.current);
              router.push("/thank-you");
            }}
          >
            <div className="md:grid md:grid-cols-2 ">
              <FormItem
                type="text"
                label="First Name"
                onChange={(value) => {
                  formData.current.firstName = value;
                }}
                value={formData.current.firstName}
                name="firstName"
                placeholder="First Name"
                required
              />
              <FormItem
                type="text"
                label="Last Name"
                onChange={(value) => {
                  formData.current.lastName = value;
                }}
                value={formData.current.lastName}
                name="lastName"
                placeholder="Last Name"
                required
              />
              <FormItem
                type="email"
                label="Email"
                value={formData.current.email}
                onChange={(value) => {
                  formData.current.email = value;
                }}
                name="email"
                placeholder="Email Address"
                required
              />
              <FormItem
                type="tel"
                label="Phone"
                value={formData.current.phone}
                onChange={(value) => {
                  formData.current.phone = value;
                }}
                name="phone"
                placeholder="(999) 999-9999"
                required
              />

              <FormItem
                type="select"
                label="Select Services"
                options={SERVICES_OPTIONS}
                name="services"
                value={formData.current.service}
                onChange={(value) => {
                  formData.current.service = value;
                }}
                placeholder="Select Service"
                required
              />
              <FormItem
                type="select"
                label="Budget in USD"
                options={BUDGET_OPTIONS}
                name="budget"
                value={formData.current.budget}
                onChange={(value) => {
                  formData.current.budget = value;
                }}
                placeholder="Select Your Option"
                required
              />
            </div>
            <FormItem
              type="multiline"
              label="Project Details"
              name="phone"
              value={formData.current.projectDetails}
              onChange={(value) => {
                formData.current.projectDetails = value;
              }}
              placeholder="Please provide a brief description of your project."
              required
            />

            <button
              type="submit"
              className="md:mx-4 md:float-right font-medium tracking-wide text-white bg-orange-600 hover:bg-orange-700 md:w-28 w-full rounded-md h-10"
            >
              {/* <span className="fa fa-spinner fa-spin mr-4"></span> */}
              Submit
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};
export default Banner;
