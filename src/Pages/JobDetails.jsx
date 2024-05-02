/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PageHeader from "../Components/PageHeader";
import { FiClock, FiMapPin } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import Card from "../Components/Card";
import { FaRegBuilding } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoIosLink } from "react-icons/io";

const JobDetails = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState({});
  console.log(jobDetails);
  const formattedDate = new Date(jobDetails.publication_date).toLocaleString(
    "en-US",
    { timeZoneName: "short" }
  );

  useEffect(() => {
    getJobDetails();
  }, []);

  const getJobDetails = async () => {
    const response = await fetch(
      `https://job-portal-server-29o2.onrender.com/jobs/${id}`
    );
    const data = await response.json();
    setJobDetails(data);
  };

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "text",
      inputLabel: "Enter your Name",
      inputPlaceholder: "Enter the Name",
    });
    if (url) {
      Swal.fire(`Entered Name: ${url}`);
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader id={id} title={jobDetails.title} />
      <div className="flex items-start mt-4">
        <div className="flex-auto w-[30%] flex flex-col justify-center ">
          <button
            className="bg-red px-8 py-2 w-2/4 mb-4 rounded text-white"
            onClick={handleApply}
          >
            Apply For this Job
          </button>
          <div className="text-primary/70 text-xl flex flex-wrap flex-col gap-2 mb-2">
            <h1 className="text-2xl font-semibold text-red">
              Details about the job:
            </h1>
            <span className="flex items-center gap-2">
              <FaRegBuilding /> {jobDetails.company_name}
            </span>
            <span className="flex items-center gap-2">
              <FiMapPin /> {jobDetails.candidate_required_location}
            </span>
            <span className="flex items-center gap-2">
              <FiClock />
              {jobDetails.job_type
                ? jobDetails.job_type
                    .replace("_", " ")
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")
                : ""}
            </span>
            <span className="flex items-center gap-2">
              <BiCategory /> {jobDetails.category}
            </span>
            <span className="flex items-center gap-2">
              <MdAttachMoney />
              <p className="text-wrap w-9/12">
                {jobDetails.salary
                  ? jobDetails.salary
                      .replace("_", " ")
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")
                  : "Negotiable"}
              </p>
            </span>
            <span className="flex items-center gap-2">
              <SlCalender />
              {formattedDate}
            </span>
          </div>
        </div>

        <div
          className="flex-auto w-[70%] text-justify"
          dangerouslySetInnerHTML={{ __html: jobDetails.description }}
        />
      </div>
    </div>
  );
};

export default JobDetails;
