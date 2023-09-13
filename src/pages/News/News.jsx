import React, { useEffect, useState } from "react";
import "./News.css";
import NewsCategory from "../../components/NewsCategory/NewsCategory";
import NewsCard from "../../NewsCard/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { getNewsReport } from "../../action/NewsAction";
import Loader from "../../components/Loader/Loader";
import MetaData from "../../components/MetaData";

const News = () => {
  const [category, setCategory] = useState("general");
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsReport(category));
  }, [dispatch, category]);

  return (
    <div className="news">
      <MetaData title={`${category.toLocaleUpperCase()} -- WX_NEWS`} />
      <NewsCategory category={category} setCategory={setCategory} />

      {loading ? (
        <Loader />
      ) : (
        <div className="newCard_css">
          {data &&
            data.articles.map((item) => (
              <NewsCard key={item.url} item={item} category={category} />
            ))}
        </div>
      )}
    </div>
  );
};

export default News;
