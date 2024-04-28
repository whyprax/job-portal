/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Newscard = ({ item }) => {
  console.log(item);

  return (
    <section className="bg-white mb-1 p-6 rounded-lg flex gap-6 justify-start">
      <Link to={item.url} className="flex flex-col gap-1 items-start">
        <img src={item?.urlToImage} alt="" className="w-full rounded" />
        <h4 className="text-red font-bold text-2xl">{item?.author}</h4>
        <h3 className="text-s text-primary/50 font-semibold mb-1">
          {item?.title.split(" ").slice(0, 15).join(" ")} ...
        </h3>
      </Link>
    </section>
  );
};

export default Newscard;
