/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Jobs from "./Jobs";
import Sidebar from "../Sidebar/Sidebar";
import Pagination from "../Components/Pagination";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  useEffect(() => {
    setIsLoading(true);
    getJobs();
  }, [currentPage]);

  const getJobs = async () => {
    // const data = await fetch(
    //   `https://remotive.io/api/remote-jobs?page=${page}&limit=5`
    // );
    const data = await fetch(`https://remotive.io/api/remote-jobs`);
    const json = await data.json();
    setJobs(json.jobs);
    setIsLoading(false);
  };

  // handle input changes
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // filter jobs by title
  const filteredJobs = jobs.filter(
    (job) => job.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  // console.log(filteredJobs);

  // Radio Based Button Filtering
  const handleChange = (e) => {
    setSelectedCategory(e.target.value === "All" ? null : e.target.value);
  };

  // Button Based Filtering
  const handleClick = (e) => {
    setSelectedCategory(e.target.value === "All" ? null : e.target.value);
  };

  // Calculate teh index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // Next page function
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredJobs.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Previous page function
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Main Functions
  const filteredData = (jobs, selected, query) => {
    let filteredJobss = jobs;

    // filterreing input items
    if (query) {
      filteredJobss = filteredJobs;
    }

    // category based filtering
    if (selected) {
      filteredJobss = filteredJobss.filter(
        ({ candidate_required_location, job_type }) =>
          candidate_required_location.toLowerCase() ===
            selected.toLowerCase() ||
          job_type.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredJobss);
    }

    // Slice the data based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobss = filteredJobss.slice(startIndex, endIndex);

    return filteredJobss.map((data, index) => <Card key={index} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* Main Content  */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* Left Slider  */}
        <div className="bg-white p-4 rounded h-fit">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* Job Carts  */}
        <div className="col-span-2 p-4 pt-0 rounded-sm">
          <div className="flex mb-4 justify-between items-center">
            <h1 className="text-primary font-bold">
              <span className="text-red text-3xl">{jobs.length}</span> Jobs
            </h1>
            {/* Pagination  */}
            <Pagination
              result={result}
              previousPage={previousPage}
              currentPage={currentPage}
              filteredJobs={filteredJobs}
              itemsPerPage={itemsPerPage}
              nextPage={nextPage}
            />
          </div>
          <Jobs result={result} isLoading={isLoading} />
        </div>

        {/* Right Slider  */}
        <div className="p-4 pt-0 rounded">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Home;
