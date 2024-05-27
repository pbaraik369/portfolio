import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className="w-2/3 flex flex-col justify-center h-full">
          <h2 className=" text-2xl sm:text-7xl font-bold text-white">
            <TypeAnimation
              sequence={[
                " I'm a Mern Stack Developer",
                1500,
                " I'm a Full Stack Developer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "0.9em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            As a fresher, I am eager to apply my skills and knowledge to
            real-world projects and contribute to innovative development teams.
            I love to work on web application using technologies like React,
            Tailwind, Html, JavaScript and NodeJs.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="h-[400px] rounded-2xl mx-auto w-2/5 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
