import React from "react";
import Eth from "../../Assets//Icon/ethereumB.png";

import Ban1 from "../../Assets/Image/Section4_image/b1.png";
import Ban2 from "../../Assets/Image/Section4_image/b2.png";
import Ban3 from "../../Assets/Image/Section4_image/b3.png";
import Simg3 from "../../Assets/Image/Section4_image/unsplash_9anj7QWy-2g.png";
import Simg2 from "../../Assets/Image/Section4_image/unsplash_LpbyDENbQQg.png";
import Simg from "../../Assets/Image/Section4_image/unsplash_pVoEPpLw818.png";
const Section4 = () => {
  const collections2 = [
    {
      img1: Ban1,
      img2: Simg,
      img3: Simg2,
      img4: Simg3,
    },
    {
      img1: Ban2,
      img2: Simg2,
      img3: Simg,
      img4: Simg3,
    },
    {
      img1: Ban3,
      img2: Simg3,
      img3: Simg,
      img4: Simg2,
    },
  ];
  return (
    <div className="bg-slate-100  pt-10 pb-10">
      <div className="container mx-auto ">
        <div className=" mb-8 ">
          {" "}
          <h1 className="text-5xl  font-bold ">Collection Featured NFTs</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3  mx-auto  gap-10 lg:gap-0 md:gap-0  ">
          {collections2?.map((value) => (
            <div className=" relative group mx-auto">
              <div className="flex  gap-4">
                <div className="  group-hover:opacity-75   ">
                  <img src={value.img1} alt="" className=" rounded-lg  " />
                </div>
                <div className="flex flex-col gap-4">
                  <img src={value.img2} alt="" className="w-full" />
                  <img src={value.img3} alt="" className="w-full" />
                  <img src={value.img4} alt="" className="w-full" />
                </div>
              </div>
              <h1 className="font-bold text-xl mt-6">Amazing Collection</h1>
              <div className=" flex justify-between ">
                <div className="relative  flex items-center gap-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />

                  <div className="text-sm leading-6">
                    <p className="text-gray-600">by Arkhan</p>
                  </div>
                </div>
                <div>
                  <button className="btn btn-outline btn-primary rounded-full btn-xs mt-1">
                    total 54 items
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
