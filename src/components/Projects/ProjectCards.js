import React from "react";

function ProjectCards(props) {
  const hasLink = props.link && props.link !== "#";
  return (
    <article className="s-work">
      <div className="s-work__img">
        <img src={props.imgPath} alt={props.title} loading="lazy" />
      </div>
      <div className="s-work__head">
        <span className="s-num">{String(props.index).padStart(2, "0")}</span>
        <h3 className="s-work__title">{props.title}</h3>
      </div>
      <p className="s-work__desc">{props.description}</p>
      {hasLink ? (
        <a
          className="s-link"
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          {props.isBlog ? "View blog" : "View project"} ↗
        </a>
      ) : (
        <span className="s-meta">Private project</span>
      )}
    </article>
  );
}
export default ProjectCards;
