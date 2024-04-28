import React, { useEffect, useState } from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa";

const Newsletter = () => {
  const [news, setNews] = useState([]);
  console.log(news);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const data = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1f1eacba5a6f410b8976adca6f20a2a1"
    );
    const json = await data.json();
    console.log(json.articles);
    setNews(json.articles);
  };

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Unlock your career potential today - email me for exciting job
          opportunities tailored to your skills and aspirations!
        </p>
        <div className="flex flex-col gap-2">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@email.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-red rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get noticed faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Fast-track your job search - email me for personalized placement
          assistance and get noticed quicker!
        </p>
        <div className="flex flex-col gap-2">
          <input
            type="submit"
            value={"Upload your resume"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-red rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2">Top News</h3>
      <ul>
        {news.map((item, index) => (
          <li key={index} className="mb-1">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Newsletter;
