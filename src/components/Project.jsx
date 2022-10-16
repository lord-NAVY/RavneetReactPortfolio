import React from "react";
import surveyFactory from "../assets/surveyFactorySc.png";
import Biodiversity from "../assets/Biodiversity.png";
import FormApp from "../assets/formApp.png";
//import { Link } from "react-scroll";


const Project = () => {
  const portfolios = [
    {
      id: 1,
      src: surveyFactory,
      style: "shadow-sky-400",
      Demolink : [<a href='https://survey-factory.herokuapp.com/'> Demo</a>] 
    },
    {
      id: 2,
      src: Biodiversity,
      style: "shadow-pink-400",
      Demolink: [<a href='http://studentweb.cencol.ca/rsing987/assignment2.html'>Demo</a>],
    },
    {
      id: 3,
      src: FormApp,
      style: "shadow-grey-500",
      Demolink: [<a href='http://studentweb.cencol.ca/rsing987/assignment4.html'>Demo</a>],
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-green via-yellow to-blue-800 w-full text-black md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline ">
            Projects
          </p>
          <div class="h-4 w-48 bg-blue-300 rounded"></div>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, style,Demolink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className= {`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                
              />
              <div className="flex items-center justify-center">
                <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {Demolink}
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
