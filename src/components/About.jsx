import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-full w-full bg-gradient-to-b from-green via-yellow to-blue-800"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      
        <div className="pb-8">

          <p className="text-4xl font-bold inline  ">
            About
          </p>
          <div class="h-4 w-48 bg-yellow-300 rounded"></div>
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