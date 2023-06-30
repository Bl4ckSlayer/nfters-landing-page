import React from "react";
import Ban1 from "../../Assets/Image/unsplash_E8Ufcyxz514.png";
import Ban2 from "../../Assets/Image/unsplash_pVoEPpLw818.png";
import Ban3 from "../../Assets/Image/unsplash_tZCrFpSNiIQ.png";
import Dot from "../../Assets//Icon/Dot (1).png";
import Dot1 from "../../Assets//Icon/Dot.png";
import Eth from "../../Assets//Icon/ethereum 2.png";
const Section1 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 container justify-start mx-auto gap-20 lg:gap-0  mb-12  ">
      <div className=" text-start   ">
        {" "}
        <div className=" mt-10 mb-32 lg:mt-0 lg:mb-0">
          <h1 className="text-5xl font-extrabold">Discover, and collect</h1>
          <h1 className="text-5xl font-extrabold"> Digital Art NFTs</h1>

          <div className="py-8">
            <p className="text-xl">
              Digital marketplace for crypto collectibles and
            </p>
            <p className="text-xl">
              non-fungible tokens (NFTs). Buy, Sell, and discover
            </p>
            <p className="text-xl">exclusive digital assets.</p>
          </div>
          <div className="relative">
            <img
              src={Dot}
              className="hidden lg:block  -left-14 absolute z-10"
              alt=""
            />{" "}
            <button className="btn absolute rounded-full  top-0 left-6 btn-primary w-44 z-40">
              Explore Now
            </button>
            <div className="flex gap-4 justify-between text-black  absolute top-24 z-30  lg:left-6 ">
              <div>
                <h3 className=" text-5xl font-bold ">98K+</h3>
                <div className="">
                  <span className="inline font-bold">ArtWork</span>
                </div>
              </div>
              <div>
                <h3 className=" text-5xl font-bold ">12K+</h3>
                <div className="">
                  <span className="inline font-bold">Auction</span>
                </div>
              </div>
              <div>
                <h3 className=" text-5xl font-bold ">15K+</h3>
                <div className="">
                  <span className="inline font-bold">Artist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex   mx-auto lg:-space-x-80  s -space-x-56   justify-center ">
        <div className="z-40 relative   ">
          <img
            className=" absolute bottom-24  -left-16  inline-block"
            src={Dot1}
            alt=""
          />
          <div className="absolute top-6 left-6 text-white">
            <h1 className=" text-2xl font-medium ">Abstr Gradient NFT</h1>
            <div className="">
              <img
                className="inline  mr-2 h-6 w-6 rounded-full  "
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span className="inline">Arkhan17</span>
            </div>
          </div>
          <div className=" absolute w-5/6 bottom-2 left-8 card  p-4 transform hover:bg-gradient-to-r from-transparent to-white hover:opacity-90 group-hover:animate-shine  rounded-lg glass">
            <div className="flex justify-between text-white">
              <div>
                <h3 className="  ">Current Bid</h3>
                <div className="">
                  <img className="inline mr-2" src={Eth} alt="" />
                  <span className="inline font-bold">0.25 ETH</span>
                </div>
              </div>
              <div>
                <h1>Ends in</h1>
                <h1>
                  <span className="font-bold mr-2 ">12H</span>
                  <span className="font-bold mr-2 ">43M</span>
                  <span className="font-bold mr-2 ">42S</span>
                </h1>
              </div>
            </div>
          </div>
          <img
            className=" lg:w-[400px] w-[300px] h-[335px] lg:h-[440px] inline-block"
            src={Ban1}
            alt=""
          />
        </div>
        <img
          className="inline-block z-20 w-[260px] h-[295px]  lg:w-[356px] lg:h-[390px] mt-6 "
          src={Ban2}
          alt=""
        />
        <img
          className="inline-block z-10 w-[255px] h-[255px] lg:w-[356px] mt-12  lg:h-[335px]"
          src={Ban3}
          alt=""
        />
      </div>
    </div>
  );
};

export default Section1;
