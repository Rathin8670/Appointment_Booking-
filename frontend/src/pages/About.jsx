import React from "react";
import { assets } from "../assets/assets";

export const About = () => {
  return (
    <div>

      <div >
        <div className="flex justify-center gap-2 font-semibold text-3xl text-gray-800 pt-10"><span>About Us</span></div>
        <div className="flex flex-col md:flex-row gap-4 ">
          <img
            className=" w-full md:max-w-[360px] rounded-lg"
            src={assets.about_image}
          ></img>
          <div className="flex-1  rounded-lg p-8 py-7 bg-white mx-2 md:w-2/4 sm:mt-0">
          
            <p className="text-sm text-gray-700 max-w-[700px] mt-2 ">
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </p>
            <p className="text-sm text-gray-700 max-w-[700px] mt-2 ">
              Prescripto is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you're booking your first appointment or
              managing ongoing care, Prescripto is here to support you every
              step of the way.
            </p>

            <p className="flex items-center gap-2 font-medium text-2xl text-gray-800 mt-3">
              Our Vision
            </p>
            <p className="text-sm text-gray-700 max-w-[700px] mt-2 ">
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>

        <div className="m-5 text-gray-700 text-3xl font-semibold"><span >WHY CHOOSE US</span></div>
        
        <div className="flex flex-col m-5 md:flex-row">
          <div className="border border-gray-300 px-10 py-20  hover:bg-sky-400 ">
            <span className="text-gray-700 font-semibold text-2xl">EFFICIENCY:</span>
            <p className="text-gray-600 text-sm mt-5">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>

          <div className="border border-gray-300 px-10 py-20 hover:bg-sky-400 ">
            <span className="text-gray-700 font-semibold text-2xl">CONVENIENCE:</span>
            <p className="text-gray-600 text-sm mt-5">Access to a network of trusted healthcare professionals in your area.</p>
          </div>

          <div className="border border-gray-300 px-10 py-20 hover:bg-sky-400">
            <span className="text-gray-700 font-semibold text-2xl">PERSONALIZATION:</span>
            <p className="text-gray-600 text-sm mt-5">Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>

      </div>
    </div>
  );
};
