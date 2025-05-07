

import React from "react";
import image from "./../../assets/images/image.png";
const Card = ({ data }) => {
  return (
    <div className="hover:scale-105 w-full flex flex-col gap-3 items-center text-center bg-white pb-3 rounded-2xl shadow-lg shadow-zinc-200">
      <img src={data.urlToImage ? data.urlToImage : image } className="w-full h-[250px] rounded-[5px]" alt={data.title} />
      <a  className="hover:underline text-[18px] font-semibold">
        {data.title}
      </a>
      <p className="text-gray-500 line-clamp-2">{data.description}</p>
      <button onClick={() => window.open(data.url)} className="px-4 py-3 bg-red-700 text-white text-[18px] font-bold w-[150px] rounded-[10px]">
        Read More
      </button>
    </div>
  );
};

export default Card;