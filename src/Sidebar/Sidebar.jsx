/* eslint-disable react/prop-types */
import React from "react";
import Location from "./Location";
import Contract from "./Contract";

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold mb-2">Filters</h3>
      <Location handleChange={handleChange} />
      <Contract handleChange={handleChange} handleClick={handleClick} />
    </div>
  );
};

export default Sidebar;
