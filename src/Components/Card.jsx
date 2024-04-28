/* eslint-disable react/prop-types */
import React from "react";
import { BiCategory } from "react-icons/bi";
import { FiClock, FiMapPin } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  console.log(data);
  const { description } = data;

  const stripHtmlTags = (html) => {
    let doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <section className="bg-white mb-1 p-6 rounded-lg flex gap-6 justify-start">
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        <img src={`https://remotive.com/job/${data.id}/logo`} alt="logo" />
        <div>
          <h4 className="text-primary mb-1">{data.company_name}</h4>
          <h3 className="text-lg text-primary font-semibold mb-2">
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
            {stripHtmlTags(description).split(" ").slice(0, 12).join(" ")} .....
          </p>
        </div>
      </Link>
    </section>

    // <div className="bg-white mb-1 p-6 rounded-lg flex gap-6 justify-start">
    //   <div>
    //     <img
    //       src={`https://remotive.com/job/${data.id}/logo`}
    //       alt="logo"
    //       className="w-20 h-20 max-w-none"
    //     />
    //   </div>
    //   <div>
    //     <div className="flex flex-col gap-1">
    //       <span className="font-normal text-[18px] text-primary">
    //         {data.company_name}
    //       </span>
    //       <h1 className="font-semibold text-2xl text-primary">{data.title}</h1>
    //       <div className="flex gap-1 flex-wrap">
    //         {data.tags?.map((item, index) => {
    //           return (
    //             <span
    //               key={index}
    //               className="bg-[#7D5AE2]/20 text-[#7D5AE2] font-medium text-xs rounded-sm px-3 py-1"
    //             >
    //               {item.toUpperCase()}
    //             </span>
    //           );
    //         })}
    //       </div>
    //       <div>
    //         <div className="flex gap-1 justify-start items-center">
    //           <CiLocationOn className="w-4 h-4" />
    //           <h1>{data.candidate_required_location}</h1>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="font-normal text-[16px] text-primary/70">
    //       {stripHtmlTags(description).split(" ").slice(0, 12).join(" ")}
    //       ..........
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
