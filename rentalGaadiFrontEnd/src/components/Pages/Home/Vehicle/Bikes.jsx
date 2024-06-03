import React from "react";
import BikesData from "../../../../assets/jsonData/Bike.json";

const Bikes = () => {
  return <section className="max-w-[1440px] m-auto p-10 ">

    {BikesData.map((e, index)=>{
      return (  <div key={index}>
          {e.name}
        </div>)
      })}

  </section>;

};

export default Bikes;
