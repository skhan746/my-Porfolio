import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-[#290033] to-black text-white"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="mt-20 text-xl">
        Hi, my name is Shahzore Khan and I am a motivated computer science student at the University of Western Ontario. With a passion for software development that stems from 4 years of hands-on learning and practical experience, 
        I am eager to apply my skills and knowledge in a professional setting. 
        </p>

        <br />

        <p className="text-xl">
        I am pursuing a Bachelor's degree in Computer Science and my ultimate goal is to gain 
        hands-on experience through an entry-level position or an internship. I have a strong 
        foundation in programming and am particularly interested in front-end, back-end, and full-stack 
        development roles. However, I am also open to exploring other opportunities 
        in the industry to expand my network and build a diverse range of experience.!
        </p>
        <br />

        <p className="text-xl">If you are looking for a dedicated and enthusiastic 
        individual with a passion for technology, don't hesitate to reach out to me. I would love to explore how 
        I can contribute to your team and further my professional growth.</p>
      </div>
    </div>
  );
};

export default About;