import React from "react";

const HomeCard = ({data}) => {
    console.log(data)
  return (
   <div className="padding-y  padding grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10">
     {data.map((items, index)=>{
        return(
            <div key={index} className="hover:scale-105 w-[100%] items-center flex flex-col gap-3  text-center bg-white pb-3 rounded-2xl  shadow-lg px-3 shadow-zinc-200">
      <img src={items.urlToImage} className="w-full h-[250px] rounded-[5px]" alt={items.title}/>
      <a href="#" onClick={()=>window.location.href = items.url}  className="hover:underline text-[18px] font-semibold" >{items.title}</a>
      <p className="text-gray-500 line-clamp-2">{items.description}</p>
<button onClick={()=>window.location.href=items.url} className=" px-4 py-3 bg-red-700 text-white text-[18px] font-bold w-[150px] rounded-[10px]">Read More</button>
    </div>
        )
     })}
   </div>
  );
};

export default HomeCard;

