import React from "react";
import Filter from "../../Assets/Icon/filter.png";
import Ban1 from "../../Assets/Image/Section6/image 1.png";
import Ban2 from "../../Assets/Image/Section6/image 1 (1).png";
import Ban3 from "../../Assets/Image/Section6/image 1 (2).png";
import Ban4 from "../../Assets/Image/Section6/image 1 (3).png";
import Simg4 from "../../Assets/Icon/Ellipse 95.png";
import Simg3 from "../../Assets/Icon/Ellipse 96.png";
import Simg2 from "../../Assets/Icon/Ellipse 97.png";
import Simg from "../../Assets/Icon/Ellipse 98.png";
import Eth from "../../Assets/Icon/ethereumGre.png";
const Section6 = () => {
  const filterBtn = [
    { btn: "All Categories", color: true },
    { btn: "Art" },
    { btn: "Celebrities" },
    { btn: "Gaming" },
    { btn: "Sport" },
    { btn: "Music" },
    { btn: "Crypto" },
  ];
  const collections2 = [
    {
      title: "ArtCrypto",
      img1: Ban3,
      img2: Simg,
      img3: Simg2,
      img4: Simg3,
      img5: Simg3,
    },
    {
      title: "This Nft",
      img1: Ban4,
      img2: Simg,
      img3: Simg2,
      img4: Simg3,
      img5: Simg3,
    },
    {
      title: "NameCrypto",
      img1: Ban2,
      img2: Simg,
      img3: Simg2,
      img4: Simg3,
      img5: Simg3,
    },
    {
      title: "KingCrypto",
      img1: Ban1,
      img2: Simg,
      img3: Simg2,
      img4: Simg3,
      img5: Simg3,
    },
    {
      title: "KingCrypto",
      img1: Ban1,
      img2: Simg,
      img3: Simg2,
      img4: Simg3,
      img5: Simg3,
    },
    {
      title: "NameCrypto",
      img1: Ban2,
      img2: Simg,
      img3: Simg2,
      img4: Simg3,
      img5: Simg3,
    },

    {
      title: "This Nft",
      img1: Ban4,
      img2: Simg,
      img3: Simg2,
      img4: Simg3,
      img5: Simg3,
    },
    {
      title: "ArtCrypto",
      img1: Ban3,
      img2: Simg,
      img3: Simg2,
      img4: Simg3,
      img5: Simg3,
    },
    {
      title: "ArtCrypto",
      img1: Ban3,
      img2: Simg,
      img3: Simg2,
      img4: Simg3,
      img5: Simg3,
    },
    {
      title: "This Nft",
      img1: Ban4,
      img2: Simg,
      img3: Simg2,
      img4: Simg3,
      img5: Simg3,
    },
    {
      title: "NameCrypto",
      img1: Ban2,
      img2: Simg,
      img3: Simg2,
      img4: Simg3,
      img5: Simg3,
    },
    {
      title: "KingCrypto",
      img1: Ban1,
      img2: Simg,
      img3: Simg2,
      img4: Simg3,
      img5: Simg3,
    },
    {
      title: "KingCrypto",
      img1: Ban1,
      img2: Simg,
      img3: Simg2,
      img4: Simg3,
      img5: Simg3,
    },
    {
      title: "NameCrypto",
      img1: Ban2,
      img2: Simg,
      img3: Simg2,
      img4: Simg3,
      img5: Simg3,
    },

    {
      title: "This Nft",
      img1: Ban4,
      img2: Simg,
      img3: Simg2,
      img4: Simg3,
      img5: Simg3,
    },
    {
      title: "ArtCrypto",
      img1: Ban3,
      img2: Simg,
      img3: Simg2,
      img4: Simg3,
      img5: Simg3,
    },
  ];
  return (
    <div className="  mt-72 bg-slate-100 ">
      <div className="container mx-auto pb-2 pt-4 ">
        <div className="  ">
          {" "}
          <h1 className="text-5xl mb-4 font-bold mt-8">Discover more NFTs</h1>
        </div>
        <div className="flex lg:justify-between items-center  flex-col lg:flex-row ">
          <div className="flex gap-4 flex-wrap flex-col lg:flex-row ">
            {filterBtn?.map((value) => (
              <>
                {value?.color ? (
                  <button className="btn btn-primary rounded-full btn-sm ">
                    {value.btn}
                  </button>
                ) : (
                  <button className="btn  rounded-full btn-sm">
                    {value.btn}
                  </button>
                )}
              </>
            ))}
          </div>
          <div className="rounded-full bg-gray-200 p-2 mt-4 lg:mt-0 md:mt-0 hover:opacity-75 cursor-pointer my-auto ">
            <img src={Filter} alt="" className="h-1/2 inline" />{" "}
            <span className="text-sm inline text-primary font-bold">
              All Filters
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-16 mt-12  ">
          {collections2?.map((value) => (
            <div className=" relative group border p-2 bg-white rounded-2xl gap-56 h-full ">
              <div className="relative">
                <div className="   group-hover:opacity-75 z-20  ">
                  <img
                    src={value.img1}
                    alt=""
                    className="h-full w-full object-cover rounded-lg  "
                  />
                </div>
                <div className="flex absolute z-30 -bottom-4 left-4 -space-x-2 ">
                  <img
                    className="inline-block  rounded-full  "
                    src={Simg}
                    alt=""
                  />
                  <img
                    className="inline-block  rounded-full  "
                    src={Simg2}
                    alt=""
                  />
                  <img
                    className="inline-block  rounded-full  "
                    src={Simg3}
                    alt=""
                  />
                  <img
                    className="inline-block  rounded-full  "
                    src={Simg4}
                    alt=""
                  />
                </div>
              </div>
              <h1 className="font-bold text-xl mt-6">Amazing Collection</h1>
              <div className=" flex justify-between border-b-2 pb-4">
                <div>
                  <img className="inline mr-2" src={Eth} alt="" />
                  <span className="inline font-semibold text-secondary text-sm">
                    0.25 ETH
                  </span>
                </div>
                <div>
                  <h1 className=" text-gray-400 ">1 of 321</h1>
                </div>
              </div>
              <div className=" flex justify-between  mt-4">
                <div>
                  <button className="btn btn-xs rounded-full ">
                    <span className="text-primary  lowercase                               ">
                      3h 50m 2s left
                    </span>
                  </button>
                </div>
                <div>
                  <h1 className="text-primary font-semibold   hover:link">
                    Place a bid
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>{" "}
        <button className="btn flex btn-outline btn-primary rounded-full mx-auto mt-14 mb-14 ">
          More NFTs
        </button>
      </div>{" "}
    </div>
  );
};

export default Section6;
