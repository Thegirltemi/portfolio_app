import React from "react";
import movieimg from "../assets/movie.jpg";
import covidimg from "../assets/covid.jpg";
import spaceimg from "../assets/space.jpg";
import intropage from "../assets/intropage.jpg";

const Project = () => {
  return (
    <div
      name="Project"
      className="className='w-full h-full bg-[#0a192f] text-gray-300 md:px-40 pt-10"
    >
      <h5 className="text-4xl font-bold inline pl-3"> Project</h5>

      <div className="portfolio_container grid lg:grid-cols-3 md:grid-cols-2 md:gap-5 gap-10 px-6 py-20">
        <article className="portfolio_item p-8 bg-[#040c16] border-[#8892b0] rounded-3xl border-2">
          <div className="portfolio_item-image overflow-hidden rounded-3xl">
            <img src={movieimg} alt="movie" />
          </div>
          <h3 className="mt-5 mb-8 ml-0">Movie App</h3>
          <div className="flex gap-2 lg:gap-4 mb-4 ">
            <a
              href="https://github.com/Thegirltemi/movieApp"
              className=" border-2 
           hover:bg-pink-600 hover:border-pink-600 p-2"
            >
              Github
            </a>
            <a
              href="https://temi-movie-app.netlify.app"
              className="border-2 p-2 hover:bg-pink-600 hover:border-pink-600"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className=" p-8 bg-[#040c16] border-[#8892b0] rounded-3xl border-2">
          <div className=" overflow-hidden rounded-3xl">
            <img src={intropage} alt="/" />
          </div>
          <h3 className="mt-5 mb-8 ml-0">Into-page with dropdown Nav</h3>
          <div className="flex gap-2 lg:gap-4   mb-4 ">
            <a
              href="https://github.com/Thegirltemi/Intro-dropdown_Nav"
              className=" border-2 p-2 
           hover:bg-pink-600 hover:border-pink-600"
            >
              Github
            </a>
            <a
              href="https://temi-dropnavigation-page.netlify.app"
              className="border-2 p-2  hover:bg-pink-600 hover:border-pink-600"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className=" p-8 bg-[#040c16] border-[#8892b0] rounded-3xl border-2">
          <div className=" overflow-hidden rounded-3xl">
            <img src={covidimg} alt="/" className="w-[300px] h-[170px]" />
          </div>
          <h3 className="mt-5 mb-8 ml-0">Covid live stat App</h3>
          <div className="flex gap-2 lg:gap-4 mb-4">
            <a
              href="https://github.com/Thegirltemi/covid19_TrackerApp"
              className=" border-2 p-2
           hover:bg-pink-600 hover:border-pink-600"
            >
              Github
            </a>
            <a
              href="https://temi-covidtracker-app.netlify.app"
              className="border-2 p-2  hover:bg-pink-600 hover:border-pink-600"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="p-8 bg-[#040c16] border-[#8892b0] rounded-3xl border-2">
          <div className=" overflow-hidden rounded-3xl">
            <img src={spaceimg} alt="/" />
          </div>
          <h3 className="mt-5 mb-8 ml-0">Space tourism multi-page website</h3>
          <div className="flex gap-2 lg:gap-4 mb-4 ">
            <a
              href="https://github.com/Thegirltemi/space_tourism_website"
              className=" border-2 p-2
           hover:bg-pink-600 hover:border-pink-600"
            >
              Github
            </a>
            <a
              href="https://temi-space-tourist-app.netlify.app"
              className="border-2 p-2 hover:bg-pink-600 hover:border-pink-600"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Project;
