/* eslint-disable react/prop-types */
import React from "react";
import Location from "./Location";
import Contract from "./Contract";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa";

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold mb-2">Filters</h3>
      <Location handleChange={handleChange} />
      <Contract handleChange={handleChange} handleClick={handleClick} />
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Unlock your career potential today - email me for exciting job
          opportunities tailored to your skills and aspirations!
        </p>
        <div className="flex flex-col gap-2">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@email.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-red rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get noticed faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Fast-track your job search - email me for personalized placement
          assistance and get noticed quicker!
        </p>
        <div className="flex flex-col gap-2">
          <input
            type="submit"
            value={"Upload your resume"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-red rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
