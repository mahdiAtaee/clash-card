import React from "react";
import Body from "./Body";
import Buy from "./Buy";
import Footer from "./Footer";
import Header from "./Header";

export default function Card({ hero }) {
  return (
    <div className={`clash-card ${hero.name}`}>
      <Header src={hero.img} name={hero.name} />
      <Body
        level={hero.level}
        name={hero.name}
        description={hero.description}
      />
      <Buy name={hero.name} />
      <Footer units={hero.units} name={hero.name} />
    </div>
  );
}
