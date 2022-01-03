import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <div>
      <div>
        <img src="https://a.d-cd.net/c74602ds-1920.jpg" alt="" />
        <img width="100%"
        height="100%"
          src="https://s3.nat-geo.ru/images/2019/5/16/7c1e4b7db6b54febaf441ae6ab1883c7.max-1200x800.jpg"
          alt=""
        />
        <div className="sectionButton">
          <button className="Btn">previous</button>
          <button className="Btn">next</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
