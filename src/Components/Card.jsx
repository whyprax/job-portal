/* eslint-disable react/prop-types */
import React from "react";
import { BiCategory } from "react-icons/bi";
import { FiClock, FiMapPin } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const id = data.id;
  // console.log(id);
  const { description } = data;

  const stripHtmlTags = (html) => {
    let doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  // const proxyUrl = "https://api.allorigins.win/get?url=";

  return (
    <section className="bg-white mb-1 p-6 rounded-lg flex gap-6 justify-start">
      <Link
        to={`/job/${id}`}
        className="flex gap-4 flex-col sm:flex-row items-start"
      >
        {/* Use cors-anywhere proxy to fetch logo image */}
        {/* <img
          crossOrigin="anonymous"
          src={`https://remotive.com/job/${data.id}/logo`}
          alt="logo" 
        /> */}
        <div>
          <h4 className="text-primary mb-1">{data.company_name}</h4>
          <h3 className="text-2xl text-primary font-semibold mb-2">
            {data.title}
          </h3>

          <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
            <span className="flex items-center gap-2">
              <FiMapPin /> {data.candidate_required_location}
            </span>
            <span className="flex items-center gap-2">
              <FiClock />
              {data.job_type
                .replace("_", " ")
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </span>
            <span className="flex items-center gap-2">
              <BiCategory /> {data.category}
            </span>
            <span className="flex items-center gap-2">
              <MdAttachMoney />{" "}
              {data.salary
                ? data.salary
                    .replace("_", " ")
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")
                : "Negotiable"}
            </span>
          </div>

          <p className="text-primary/70 text-base">
            {stripHtmlTags(description).split(" ").slice(0, 20).join(" ")} .....
          </p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
