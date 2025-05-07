import React from "react";
import Card from "./Card";

const HomeCard = ({ data }) => {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="flex-grow padding-y padding grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
    </div>
  );
};

export default HomeCard;

