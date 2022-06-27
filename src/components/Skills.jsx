import React from "react";
import htmllogo from "../assets/htmllogo.PNG";
import csslogo from "../assets/csslogo.PNG";
import javascriptlogo from "../assets/javaScript.PNG";
import reactlogo from "../assets/React.PNG";
import tailwindlogo from "../assets/tailwind.PNG";

const Skills = () => {
  return (
    <div name="Skills" className="w-full h-full bg-[#0a192f] text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-10 w-full h-full">
        <div className="mb-20">
          <p className="text-4xl font-bold inline border-b-4 pt-4 border-pink-600">
            Skills
          </p>
        </div>
        <div className="flex justify-between flex-col md:flex-row items-center px-10">
          <div className="mb-4 md:mb-0 p-2  hover:scale-110 duration-500">
            <img src={htmllogo} alt="tailwind" className="w-10  mx-auto" />
            <p className="text-sm">HTML</p>
          </div>
          <div className=" mb-4 md:mb-0 p-2  hover:scale-110 duration-500">
            <img src={csslogo} alt="tailwind" className="w-10  mx-auto" />
            <p className="text-sm">CSS</p>
          </div>
          <div className=" mb-4 md:mb-0 p-2  hover:scale-110 duration-500">
            <img
              src={javascriptlogo}
              alt="tailwind"
              className="w-10  mx-auto"
            />
            <p className="text-sm">JAVASRIPT</p>
          </div>
          <div className=" mb-4 md:mb-0 p-2  hover:scale-110 duration-500">
            <img src={reactlogo} alt="tailwind" className="w-10 mx-auto" />
            <p className="text-sm">REACT</p>
          </div>
          <div className=" mb-4 md:mb-0 p-2  hover:scale-110 duration-500">
            <img src={tailwindlogo} alt="tailwind" className="w-10  mx-auto " />
            <p className="mt-2 text-sm">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
