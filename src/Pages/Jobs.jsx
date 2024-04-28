/* eslint-disable react/prop-types */
import React from "react";

const Jobs = ({ result, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <h1 className="text-primary/70 font-bold">Data is loading...</h1>
      ) : (
        <div className="flex flex-col gap-6">{result}</div>
      )}
    </div>
  );
};

export default Jobs;
