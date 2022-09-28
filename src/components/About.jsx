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
        I am a collaborative Software Engineering graduate specializing in Web Development. Strong technical acumen with proficiency in object-oriented programming, JavaScript, SQL, and C#. 

        </p>

        <br />

        <p className="text-xl">
          
        </p>
      </div>
    </div>
  );
};

export default About;