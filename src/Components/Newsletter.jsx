import React, { useEffect, useState } from "react";
import Newscard from "./Newscard";

const Newsletter = () => {
  const [news, setNews] = useState([]);
  console.log(news[0]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const data = await fetch(
      "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
    );
    const json = await data.json();
    setNews(json.articles);
  };

  return (
    <div className="space-y-5">
      <h1 className="text-primary font-bold">
        <span className="text-red text-3xl">Top News</span>
      </h1>

      {news.map((item, index) => (
        <Newscard key={index} item={item} />
      ))}
    </div>
  );
};

export default Newsletter;
