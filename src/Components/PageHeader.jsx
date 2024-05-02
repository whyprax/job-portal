import React from "react";

const PageHeader = ({ id, title }) => {
  return (
    <div className="py-24 mt-3 bg-[#FAFAFA] rounded flex items-center justify-center">
      <div>
        <h2 className="text-xs font-medium mb-1 text-center">
          Job Id: <span className="font-bold  text-red">{id}</span>
        </h2>
        <p className="text-3xl font-bold text-red text-center">{title}</p>
      </div>
    </div>
  );
};

export default PageHeader;
