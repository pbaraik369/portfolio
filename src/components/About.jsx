import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi, my name is Pankaj Baraik. I have done master from Lovely
          Professional University with a degree in Computer Application,
          specializing in web development. I have strong skills in both
          front-end and back-end technologies, including HTML, CSS, JavaScript,
          React, Node.js, and MongoDB. One of my key projects was developing a
          full-stack web application for a captone project, where I led a team
          to create a awesome project called Music Application Using Mern stack.
          This experience enhanced my technical skills and taught me the value
          of teamwork and project management. I stay updated with industry
          trends through online courses, webinars.
        </p>

        <br />

        <p className="text-xl">
          I'm excited about the opportunity to work with your company because of
          its innovative projects and impact-driven approach. I look forward to
          bringing my expertise and passion for web development to your team.
        </p>
      </div>
    </div>
  );
};

export default About;
