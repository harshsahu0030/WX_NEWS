import React from "react";
import "./NewsCategory.css";
import { Button } from "@mui/material";

const NewsCategory = ({ category, setCategory }) => {
  const handleClick = (e) => {
    if (e.target.value === undefined) {
      setCategory(category);
    } else {
      setCategory(e.target.value);
    }
  };
  return (
    <div className="newsCategory" onClick={handleClick}>
      <Button
        className="newsItem"
        style={{
          color: `${category === "general" ? "blue" : "black"}`,
          fontSize: "1.5vmax",
        }}
        value={"general"}
      >
        General
      </Button>

      <Button
        className="newsItem"
        style={{
          color: `${category === "business" ? "blue" : "black"}`,
          fontSize: "1.5vmax",
        }}
        value={"business"}
      >
        Business
      </Button>

      <Button
        className="newsItem"
        style={{
          color: `${category === "entertainment" ? "blue" : "black"}`,
          fontSize: "1.5vmax",
        }}
        value={"entertainment"}
      >
        Entertainment
      </Button>

      <Button
        className="newsItem"
        style={{
          color: `${category === "health" ? "blue" : "black"}`,
          fontSize: "1.5vmax",
        }}
        value={"health"}
      >
        Health
      </Button>

      <Button
        className="newsItem"
        style={{
          color: `${category === "science" ? "blue" : "black"}`,
          fontSize: "1.5vmax",
        }}
        value={"science"}
      >
        Science
      </Button>
      <Button
        className="newsItem"
        style={{
          color: `${category === "sports" ? "blue" : "black"}`,
          fontSize: "1.5vmax",
        }}
        value={"sports"}
      >
        Sports
      </Button>
      <Button
        className="newsItem"
        style={{
          color: `${category === "technology" ? "blue" : "black"}`,
          fontSize: "1.5vmax",
        }}
        value={"technology"}
      >
        Technology
      </Button>
    </div>
  );
};

export default NewsCategory;
