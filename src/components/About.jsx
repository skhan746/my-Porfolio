import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-[#290033] to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi, my name is Shahzore Khan and I am currently a student at the University of Western Ontario. I am currently pursuing a Bachelors in Computer Science.
           My goal is to obtain first hand experience in the workfield via an entry level postion or an internship. 
        </p>

        <br />

        <p className="text-xl">
        I have been learning programming for over 4 years ever since I was in high school and I love it. I am
very passionate about all aspects of software development and enjoy learning new technologies. Right now I am looking for a position as a front
end, back end, or full stack developer. I am also open to other positions that could help me expand my network and work experience. feel free to contact me!
        </p>
      </div>
    </div>
  );
};

export default About;