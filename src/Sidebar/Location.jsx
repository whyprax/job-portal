import React from "react";
import Input from "../Components/Input";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="textlg font-medium mb-2">Location</h4>

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
