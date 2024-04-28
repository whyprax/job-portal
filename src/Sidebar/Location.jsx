import React from "react";
import Input from "../Components/Input";
import { FaLocationDot } from "react-icons/fa6";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
        <FaLocationDot />
        Location
      </h3>

      <div>
        <Input
          handleChange={handleChange}
          value="All"
          title="All"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Japan"
          title="Japan"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="USA"
          title="USA"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="India"
          title="India"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
