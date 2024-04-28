/* eslint-disable react/prop-types */
import React from "react";

const Jobs = ({ result }) => {
  return (
    <div>
      <div className="flex mb-4">
        <h1 className="text-primary font-bold">
          <span className="text-red text-3xl">{result.length}</span> Jobs
        </h1>
      </div>
      <div className="flex flex-col gap-6">{result}</div>
    </div>
  );
};

export default Jobs;
