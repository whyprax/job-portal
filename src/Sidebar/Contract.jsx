import React from "react";
import Input from "../Components/Input";
import Button from "./Button";

const Contract = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="textlg font-medium mb-2">Employement Type</h4>

      <div className="flex flex-col">
        <Button onClickHandler={handleClick} value="All" title="All" />
        <Button
          onClickHandler={handleClick}
          value="full_time"
          title="Full Time"
        />
        <Button
          onClickHandler={handleClick}
          value="part_time"
          title="Part Time"
        />
        <Button
          onClickHandler={handleClick}
          value="freelance"
          title="Freelance"
        />
        <Button
          onClickHandler={handleClick}
          value="internship"
          title="Internship"
        />
        <Button
          onClickHandler={handleClick}
          value="contract"
          title="Contract"
        />
      </div>
    </div>
  );
};

export default Contract;
