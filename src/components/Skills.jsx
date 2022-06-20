import React from "react";
import htmllogo from "../assets/htmllogo.PNG";
import csslogo from "../assets/csslogo.PNG";
import javascriptlogo from "../assets/javaScript.PNG";
import reactlogo from "../assets/React.PNG";
import tailwindlogo from "../assets/tailwind.PNG";

const Skills = () => {
  return (
    <div name="Skills" className="w-full h-full bg-[#0a192f] text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 pt-4">
            Skills
          </p>
        </div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-5 text-center py-12 px-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={htmllogo}
              alt=""
              style={{ width: "80px" }}
              className="mx-auto"
            />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={csslogo}
              alt=""
              style={{ width: "80px" }}
              className="mx-auto"
            />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={javascriptlogo}
              alt=""
              style={{ width: "80px" }}
              className="mx-auto"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={reactlogo}
              alt=""
              style={{ width: "80px" }}
              className="mx-auto"
            />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={tailwindlogo}
              alt=""
              style={{ width: "80px" }}
              className="mx-auto"
            />
            <p className="my-4">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
