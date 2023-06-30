import React from "react";

const Navbar = () => {
  return (
    <div className="mb-8 ">
      <div className="navbar shadow-md bg-base-100 border-b-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Marketplace</a>
              </li>
              <li>
                <a>Resource</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <div className="form-control block ">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-1/2 h-1/2 m-2  rounded-full"
                />
              </div>
              <button className="btn btn-sm btn-primary rounded-full ">
                Upload
              </button>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl text-primary font-bold">
            NFTERS
          </a>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className=" text-base font-bold">
                <a>Marketplace</a>
              </li>
              <li className=" text-base font-bold">
                <a>Resource</a>
              </li>
              <li className=" text-base font-bold">
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end gap-4">
          <div className="form-control hidden lg:block md:block">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered  rounded-full"
            />
          </div>
          <button className="btn btn-sm btn-primary rounded-full hidden lg:block md:block">
            Upload
          </button>
          <button className="btn btn-outline btn-sm btn-primary rounded-full">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
