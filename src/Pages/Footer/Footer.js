import React from "react";
import Fb from "../../Assets/Icon/facebook.png";
import Tw from "../../Assets/Icon/twitter.png";
import Lk from "../../Assets/Icon/linkedin.png";
const Footer = () => {
  return (
    <footer className="container mx-auto mt-12    ">
      <div className="grid grid-cols-1 lg:grid-cols-4 pb-4 border-b gap-6 lg:gap-0 ">
        <div className=" ">
          <h1 className="text-xl font-semibold  ">Services</h1>

          <h1 className="text-slate-400 label-text text-base ">
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </h1>
          <div className="flex gap-4 mt-4">
            <img src={Fb} alt="" className=" cursor-pointer" />
            <img src={Tw} alt="" className=" cursor-pointer" />
            <img src={Lk} alt="" className=" cursor-pointer" />
          </div>
        </div>
        <div className="lg:mx-auto ">
          <h1 className="text-xl font-semibold ">Market Place</h1>
          <h1 className="link link-hover">All NFTs</h1>
          <h1 className="link link-hover">New</h1>
          <h1 className="link link-hover">Art</h1>
          <h1 className="link link-hover">Sports</h1>
          <h1 className="link link-hover">Utility</h1>
          <h1 className="link link-hover">Music</h1>
          <h1 className="link link-hover">Domain Name</h1>
        </div>
        <div className=" lg:mx-auto">
          <span className="text-xl font-semibold">My Account </span>
          <h1 className="link link-hover">Profile</h1>
          <h1 className="link link-hover">Favorite</h1>
          <h1 className="link link-hover">My Collections</h1>
          <h1 className="link link-hover">Settings</h1>
        </div>

        <div className="lg:mx-auto">
          <span className="text-xl font-semibold">Stay in the loop</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text  text-slate-400">
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                NFTs.
              </span>
            </label>
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Enter your email address"
                className="input input-bordered w-full rounded-full "
              />{" "}
              <button className="btn btn-primary absolute top-0 -right-7 rounded-full">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto flex pt-4 pb-2">
        <p className="mx-auto">
          Copyright &copy; {new Date().getFullYear()} Amirul
        </p>

        <h1> </h1>
      </div>
    </footer>
  );
};

export default Footer;
