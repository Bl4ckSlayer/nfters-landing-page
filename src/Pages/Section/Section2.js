import React from "react";
import Card from "../../Assets//Icon/card-tick-1 1.png";
import Chart from "../../Assets//Icon/chart-square 2.png";
const Section2 = () => {
  return (
    <div className=" mx-auto  mt-20  mb-24 bg-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-3     container mx-auto my-auto justify-center items-center gap-6  h-80  ">
        <div className="mx-auto ">
          <h1 className="text-3xl font-extrabold">
            The amazing NFT art of the world here
          </h1>
        </div>
        <div className="flex gap-2 mx-auto w-full ">
          <img src={Card} alt="" className="w-9 h-9" />

          <div className=" ">
            <h1 className="text-2xl font-bold">Fast Transaction</h1>
            <p className="text-base font-semibold ">
              Lorem ipsum dolor sit amet,
            </p>
            <p className="text-base font-semibold ">
              consectetur adipiscing elit.
            </p>
            <p className="text-base font-semibold ">
              Aliquam etiam viverra tellus imperdiet.
            </p>
          </div>
        </div>

        <div className="flex gap-2 mx-auto  w-full lg:mb-6">
          <img src={Chart} alt="" className="w-9 h-9" />

          <div className="">
            <h1 className="text-2xl font-bold">Fast Transaction</h1>

            <p className="text-base font-semibold ">
              consectetur adipiscing elit. Aliquam etiam Lorem ipsum dolor sit
              amet,viverra tellus imperdiet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
