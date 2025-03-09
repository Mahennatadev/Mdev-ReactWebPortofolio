import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>

      <div className="work__links">
        {item.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="work__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
            <i
              className={`bx ${
                link.url.includes("figma")
                  ? "bxl-figma"
                  : "bxl-github"
              } work__button-icon`}
            ></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default WorkItems;
