import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Jobs from "./Jobs";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  // console.log(jobs);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getJobs(currentPage);
  }, [currentPage]);

  const getJobs = async (page) => {
    // const data = await fetch(
    //   `https://remotive.io/api/remote-jobs?page=${page}&limit=5`
    // );
    const data = await fetch(`https://remotive.io/api/remote-jobs`);
    const json = await data.json();
    setJobs(json.jobs);
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
    setSelectedCategory(e.target.value);
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

    return filteredJobss.map((data, index) => <Card key={index} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* Main Content  */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* Left Slider  */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* Job Carts  */}
        <div className="col-span-2 p-4 pt-0 rounded-sm">
          <Jobs result={result} />
        </div>

        {/* Right Slider  */}
        <div className="bg-white p-4 rounded">Right</div>
      </div>
    </div>
  );
};

export default Home;
