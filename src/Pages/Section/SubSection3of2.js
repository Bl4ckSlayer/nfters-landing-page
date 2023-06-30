import React from "react";
import Img1 from "../../Assets/Icon//unsplash_k0rVudBoB4c.png";
import Img2 from "../../Assets/Icon/unsplash_fT49QnFucQ8.png";
import Img3 from "../../Assets/Icon/unsplash_5MTf9XyVVgM.png";
import Img4 from "../../Assets/Icon/unsplash_zkNT5mikUuo.png";
import Img5 from "../../Assets/Icon/unsplash_WjIB-6UxA5Q.png";
import Card from "../../Assets//Icon/card-tick-1 1.png";
import Eth from "../../Assets//Icon/ethereumB.png";
import Tick from "../../Assets/Icon/verify 1.png";

import Ban1 from "../../Assets/Image/Section_image/Group 88 (1).png";
const SubSection3of2 = () => {
  const collections = [
    {
      name: "CryptoFunks",
      count: "19,769.39",
      per: "+26.52%",
      color: true,
      img: Img1,
    },
    {
      name: "Cryptix",
      count: "2,769.39",
      per: "+10.52%",
      color: false,
      img: Img2,
    },
    {
      name: "Frensware",
      count: "9,232.39",
      per: "+2.52%",
      color: true,
      img: Img3,
    },
    {
      name: "PunkArt",
      count: "3,769.39",
      per: "+1.52%",
      color: true,
      img: Img4,
    },
    {
      name: "Art Crypto",
      count: "10,769.39",
      per: "+2.52%",
      color: false,
      img: Img5,
    },
  ];
  return (
    <>
      <div className="w-3/4 ">
        {" "}
        <h1 className="text-xl font-bold ">Top Collections over</h1>
        <h1 className="text-lg font-semibold text-primary">Last 7 days</h1>
      </div>
      {collections?.map((value, i) => (
        <div className="group mx-auto  border-b-2 pb-2 ">
          <div className="flex flex-col gap-y-4  ">
            <div className="flex justify-center items-center gap-4">
              <h1 className="text-xl font-bold">{i + 1}</h1>
              <div className="relative  flex items-center gap-x-4">
                <div className="indicator  ">
                  {value.color ? (
                    <img src={Tick} alt="" className=" indicator-item  w-8  " />
                  ) : (
                    <></>
                  )}
                  <div className="w-14 h-14 ">
                    <img src={value.img} alt="" className=" rounded-full " />
                  </div>
                </div>
                <div>
                  <h3 className="  ">Current Bid</h3>
                  <div className="">
                    <img className="inline mr-2" src={Eth} alt="" />
                    <span className="inline font-bold">{value?.count}</span>
                  </div>
                </div>
                {value.color ? (
                  <p className="text-secondary text-lg font-bold ">
                    {value.per}
                  </p>
                ) : (
                  <p className="text-error  text-lg font-bold">{value.per}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SubSection3of2;
