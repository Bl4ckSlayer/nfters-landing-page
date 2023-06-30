import React from "react";

import Eth from "../../Assets//Icon/ethereumB.png";

import Ban1 from "../../Assets/Image/s4.png";
import SubSection3of1 from "./SubSection3of1";
import SubSection3of2 from "./SubSection3of2";

const Section3 = () => {
  return (
    <div className=" mx-auto  mt-20  mb-24 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-0 md:gap-0  container mx-auto  ">
        <div className="mb-20 relative group  mx-auto">
          <div className="  rounded-md   group-hover:opacity-75  mx-auto ">
            <img
              src={Ban1}
              alt=""
              className="h-full w-full object-cover object-center "
            />
          </div>
          <div className="mt-8 flex justify-between">
            <div className="relative  flex items-center gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="h-10 w-10 rounded-full bg-gray-50"
              />
              <div className="text-sm leading-6">
                <h1 className="font-bold text-lg text-gray-900">
                  The Futr Abstr
                </h1>
                <p className="text-gray-600">10 in the stock</p>
              </div>
            </div>
            <div>
              <p className=" text-xs ">Highest Bid</p>
              <div className="">
                <img className="inline mr-2" src={Eth} alt="" />
                <span className="inline font-bold">0.25 ETH</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col  gap-4 w-full items-center mb-20">
          <SubSection3of1></SubSection3of1>
        </div>
        <div className="mx-auto flex flex-col  w-96 items-center mb-20 gap-8 border-l-2">
          <SubSection3of2></SubSection3of2>
        </div>
      </div>
    </div>
  );
};

export default Section3;
{
  /* {collections?.map((value) => (
    <div>
      <h1>{value?.name}</h1>
      <img src={value?.img} alt="" />
    </div>
  ))} */
}
