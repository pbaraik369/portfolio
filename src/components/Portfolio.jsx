import React from "react";
import studyNotion from "../assets/portfolio/study notion.png";
import shopping from "../assets/portfolio/shoppingCart.png";
import amazon from "../assets/portfolio/amazon clone.png";
import todoapp from "../assets/portfolio/todoapp.png";
import taxcal from "../assets/portfolio/taxCal.png";
import chatgpt from "../assets/portfolio/chatgpt.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: studyNotion,
      demo: "https://study-notion-project-frontend-kappa.vercel.app/",
      code: "https://github.com/pbaraik369/studyNotion",
    },
    {
      id: 2,
      src: amazon,
      demo: "https://cool-cajeta-484f77.netlify.app/",
      code: "https://github.com/pbaraik369/Amazon-clone-app",
    },
    {
      id: 3,
      src: shopping,
      demo: "https://illustrious-cannoli-294b7d.netlify.app/",
      code: "https://github.com/pbaraik369/shoppingcart",
    },
    {
      id: 4,
      src: todoapp,
      demo: "https://sweet-khapse-5bc544.netlify.app/",
      code: "https://github.com/pbaraik369/todo-app",
    },
    {
      id: 5,
      src: taxcal,
      demo: "https://lambent-palmier-f289c4.netlify.app/",
      code: "https://github.com/pbaraik369/fyle-assignment",
    },
    {
      id: 6,
      src: chatgpt,
      demo: "https://chatgptai-seven.vercel.app/",
      code: "https://github.com/pbaraik369/-ChatGPT-AI-App",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={code}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
