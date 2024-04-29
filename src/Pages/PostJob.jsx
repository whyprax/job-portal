import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Creatable from "react-select/creatable";

const PostJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const skills = selectedOption?.map((tag) => tag.value);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.tags = skills;
    console.log(data);
  };

  const options = [
    { value: "Javascript", label: "Javascript" },
    { value: "Python", label: "Python" },
    { value: "C/C++", label: "C/C++" },
    { value: "HTML/CSS", label: "HTML/CSS" },
    { value: "React.Js", label: "React.Js" },
    { value: "Redux", label: "Redux" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* First Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                placeholder="Ex: Web Developer"
                {...register("title")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft Corporation"
                {...register("company_name")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Type</label>
              <select {...register("job_type")} className="create-job-input">
                <option value="">Choose yout Job Type</option>
                <option value="full_time">Full Time</option>
                <option value="part_time">Part Time</option>
                <option value="freelance">Freelance</option>
                <option value="internship">Internship</option>
                <option value="contract">Contract</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Location</label>
              <input
                type="text"
                placeholder="Ex: Japan"
                {...register("candidate_required_location")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Category</label>
              <input
                type="datetime-local"
                placeholder="Ex: 2024-04-27"
                {...register("publication_date")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                placeholder={"https://company_logo.png"}
                {...register("company_logo")}
                className="create-job-input"
              />
            </div>
          </div>

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Category</label>
              <input
                type="text"
                placeholder="Ex: Web Developer"
                {...register("category")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary</label>
              <input
                type="text"
                placeholder="Ex: attractive compensation package with executive stock options "
                {...register("salary")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* Fouth Row */}
          <div>
            <label className="block mb-2 text-lg">Tags</label>
            <Creatable
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="create-job-input py-4"
            />
          </div>

          {/* Fifth Row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Description</label>
            <textarea
              rows={6}
              placeholder="Description"
              {...register("description")}
              className="create-job-input"
            />
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            className="my-5 bg-red text-white px-8 py-2 rounded font-semibold hover:cursor-pointer hover:underline"
          />
        </form>
      </div>
    </div>
  );
};

export default PostJob;
