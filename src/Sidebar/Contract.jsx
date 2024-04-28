import React from "react";
import Input from "../Components/Input";
import Button from "./Button";
import { FaFileContract } from "react-icons/fa6";

const Contract = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
        <FaFileContract />
        Type of Employement
      </h3>

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
