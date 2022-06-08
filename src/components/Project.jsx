import React from "react";
import movieimg from "../assets/movie.PNG";
import covidimg from "../assets/covid.JPG";
import spaceimg from "../assets/space.JPG";
import intropage from "../assets/intropage.JPG";

const Project = () => {
  return (
    <div name="Project" className="bg-[#0a192f] w-full md:h-full text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">Click on the projects to view</p>
        </div>
        <div className="md:flex justify-between sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
              <div className="text-center px-10 mb-10">
                <img src={intropage} alt="" className="rounded" />

                <p>
                Intro section with dropdown navigation built using ReactJS
                </p>
                <a
                  href={"https://temi-dropnavigation-page.netlify.app"}
                  className="bg-black px-4"
                >
                  Go To Site
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
              <div className="text-center px-10 mt-10">
                <img src={covidimg} alt="" className=" rounded" />

                <p className=" pb-4">
                  A site for viewing covid-19 live stats for each of the
                  countries affected by the virus. Built using ReactJS and Covid
                  API
                </p>
                <a
                  href={"https://temi-covidtracker-app.netlify.app"}
                  className="bg-black px-4"
                >
                  Go To Site
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
              <div className="text-center px-10 mt-10">
                <img src={spaceimg} alt="" className="bg-black rounded" />

                <p className=" pb-4">
                  Space tourism multi-page website .Built using ReactJS
                </p>
                <a
                  href={"https://temi-space-tourist-app.netlify.app"}
                  className="bg-black px-4"
                >
                  Go To Site
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
              <div className="text-center px-10 mt-10">
                <img src={movieimg} alt="" className=" bg-white rounded" />

                <p className=" pb-4">
                A streaming app used for watching movie trailers or videos uploaded on youtube. Built using Reactjs and TMDB
                </p>
                <a
                  href={"https://temi-movie-app.netlify.app"}
                  className="bg-black px-4"
                >
                  Go To Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
