import React from "react";
import facebook from "../../media/facebook.png";
import twitter from "../../media/twitter.png";
import instagram from "../../media/instagram.png";
import logo from "../../media/logo.png";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row gap-2 mt-20 pb-10 h-4/5 border-t-2 bg-gradient-to-t from-indigo-100">
        <div className=" w-2/5 m-auto px-12  flex flex-col  align-middle ">
          <div className="flex flex-row">
            <img className="w-20 pt-3" src={logo} />
            <p className="font-bold  pt-7 text-4xl pb-4 bg-gradient-to-tr  from-indigo-700 to-cyan-400 bg-clip-text text-transparent">
              Codepad
            </p>
          </div>
          <p className="justify-center items-center pt-4 text-gray-500 font-semibold">
            A team messaging app for everyone to connect with their team.
          </p>
          <div className="pt-7 flex flex-row gap-3">
            <img src={instagram} alt="" className="w-8" />
            <img src={twitter} alt="" className="w-8" />
            <img src={facebook} alt="" className="w-8" />
          </div>
        </div>

        <div className=" w-1/5 px-10 mt-7">
          <p className=" text-gray-600 font-semibold text-xl pb-5 ">Product</p>
          <ul className="flex flex-col  text-gray-400 font-semibold leading-loose">
            <li className="hover:text-gray-500">Updates</li>
            <li className="hover:text-gray-500">Downloads</li>
            <li className="hover:text-gray-500">Pricing</li>
            <li className="hover:text-gray-500">Test</li>
          </ul>
        </div>

        <div className=" w-1/5 px-10 mt-7">
          <p className=" text-gray-600 font-semibold text-xl pb-5 ">Support</p>
          <ul className="flex flex-col  text-gray-400 font-semibold  leading-loose">
            <li className="hover:text-gray-500">Help center</li>
            <li className="hover:text-gray-500">Account information</li>
            <li className="hover:text-gray-500">About</li>
            <li className="hover:text-gray-500">Contact Us</li>
          </ul>
        </div>

        <div className=" w-1/5 px-10 mt-7">
          <p className=" text-gray-600 font-semibold text-xl pb-5 ">
            Help and Solutions
          </p>
          <ul className="flex flex-col  text-gray-400 font-semibold leading-loose">
            <li className="hover:text-gray-500">Talk to support</li>
            <li className="hover:text-gray-500">Support Docs</li>
            <li className="hover:text-gray-500">System status</li>
            <li className="hover:text-gray-500">Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
