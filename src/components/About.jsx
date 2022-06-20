import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-full bg-[#0a192f] text-gray-300 pb-20"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p className="pl-4">Hi. I'm Temiloluwa, nice to meet you.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent and responsive interfaces
              that improves the lives of those around me and also hoping to
              beecome a full stack developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
