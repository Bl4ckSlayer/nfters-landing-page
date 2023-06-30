import React from "react";
import Ban1 from "../../Assets/Image/unsplash_E8Ufcyxz514.png";
import Ban2 from "../../Assets/Image/unsplash_pVoEPpLw818.png";
import Ban3 from "../../Assets/Image/unsplash_tZCrFpSNiIQ.png";
import Per from "../../Assets/Icon/person.png";
import Per1 from "../../Assets/Icon/person2.png";

const Section5 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 container justify-start flex-col lg:flex-row  mx-auto gap-36  lg:gap-10   mt-16 ">
      {" "}
      <div className="grid grid-cols-2 gap-6 justify-start lg:mb-0 mb-36">
        <div className="     ">
          <div className="indicator w-11/12 mb-20">
            <div className="indicator-item indicator-bottom">
              <img className=" object-cover mx- " src={Per} alt="" />
            </div>

            <img className=" object-cover  object-center " src={Ban1} alt="" />
          </div>
          <div className=" relative">
            <div className="indicator w-1/2 absolute right-6  ">
              <div className="indicator-item indicator-bottom">
                <img className=" object-cover mx- " src={Per1} alt="" />
              </div>

              <img className=" object-cover  " src={Ban3} alt="" />
            </div>
          </div>
        </div>
        <div className="my-auto">
          <div className="indicator  w-10/12 ">
            <div className="indicator-item indicator-bottom">
              <img className=" object-cover mx- " src={Per1} alt="" />
            </div>

            <img className="object-cover  object-center  " src={Ban2} alt="" />
          </div>
        </div>
      </div>
      <div className=" text-start  my-auto">
        {" "}
        <div className=" mt-10 mb-32">
          <h1 className="text-5xl font-extrabold">Create and </h1>
          <h1 className="text-5xl font-extrabold"> sell your NFTs</h1>

          <div className="py-8">
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
              ac phasellus placerat a pellentesque tellus sed egestas. Et
              tristique dictum sit tristique sed non. Lacinia lorem id
              consectetur pretium diam ut. Pellentesque eu sit blandit fringilla
              risus faucibus.
            </p>
          </div>
          <div className="">
            <button className="btn  rounded-full  top-0 left-6 btn-primary w-44 z-40">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
