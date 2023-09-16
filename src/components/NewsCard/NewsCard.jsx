import React from "react";
import "./NewsCard.css";
import en from "javascript-time-ago/locale/en";
import TimeAgo from "javascript-time-ago";

const NewsCard = ({ item, category }) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const date = timeAgo.format(new Date(item.publishedAt));

  return (
    <div className="card">
      <div className="card__header">
        <img
          src={
            item.urlToImage
              ? item.urlToImage
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019"
          }
          alt="card__image"
          className="card__image"
          width={600}
        />
      </div>
      <div className="card__body">
        <span className="tag tag-blue">{category}</span>
        <h4>{item.title && item.title.slice(0, 40)}...</h4>
        <p>{item.description && item.description.slice(0, 150)}...</p>
      </div>
      <div className="card__footer">
        <div className="user">
          <div className="user__info">
            <h5>{item.author ? item.author : "No author"}</h5>
            <small>{date}</small>
          </div>
        </div>
        <div className="readMore">
          <a target="_blank" rel="noreferrer" href={item.url && item.url}>
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
