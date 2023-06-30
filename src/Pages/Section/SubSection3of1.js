import React from "react";
import BImg1 from "../../Assets/Image/Section_image/Group 88.png";
import BImg2 from "../../Assets/Image/Section_image/Group 88 (1).png";
import BImg3 from "../../Assets/Image/Section_image/Group 88 (2).png";
import Eth from "../../Assets/Icon/ethereumGre.png";
import Ban1 from "../../Assets/Image/Section_image/Group 88 (1).png";

const SubSection3of1 = () => {
  const collections2 = [
    {
      name: "CryptoFunks",
      count: "19,769.39",
      per: "+26.52%",
      color: true,
      img: BImg1,
    },
    {
      name: "Cryptix",
      count: "2,769.39",
      per: "+10.52%",
      color: false,
      img: BImg2,
    },
    {
      name: "Frensware",
      count: "9,232.39",
      per: "+2.52%",
      color: true,
      img: BImg3,
    },
  ];
  return (
    <>
      {collections2?.map((value) => (
        <div className="group   flex gap-4 mb-2">
          <div className=" rounded-lg ">
            <img
              src={value?.img}
              alt=""
              className=" object-cover object-center  lg:h-full lg:w-full"
            />
          </div>
          <div className="flex flex-col gap-y-4  ">
            <h1 className="text-xl font-bold">The Futr Abstr</h1>
            <div className="flex justify-center items-center gap-2">
              <img
                className="h-8 w-8 flex-none rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <button className="btn btn-outline btn-secondary  btn-sm ">
                <img className="inline " src={Eth} alt="" />
                <span className="inline font-bold">0.25 ETH</span>
              </button>
              <p className="text-sm">1 of 8</p>
            </div>
            <button className="btn btn-outline btn-primary  w-4/6 rounded-full">
              Place a bid
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default SubSection3of1;
