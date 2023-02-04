import React from 'react'
import HeroImage from '../assets/header-img.svg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'
import 'animate.css';
// import TrackVisibility from 'react-on-screen';

const Home = () => {
  return (
    
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-[#290033]'>
        <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl font-bold text-white animate-none sm:text-7xl'>
                    I'm a Full Stack Developer
                </h2>
                <p className='max-w-md py-4 text-gray-500'>
                    Welcome to my portfolio! Here you will find all my projects and relevant experience. Feel free to contact me to get in touch. 
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} offset={-60} className='flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to to-blue-500'>
                        Portfolio
                        <span className='duration-300 group-hover:rotate-90'>
                        <MdOutlineKeyboardArrowRight size={25}
                        className="ml-1" />
                        </span>
                    </Link>
                </div>
            </div>

        
        
            <div className='animate-bounce'>

                <div>
                    <img src= {HeroImage} 
                    alt="my profile"
                    className='w-2/3 mx-auto rounded-2xl md:w-full ' />
                </div>
            
            </div>    
        </div>
    </div>
  );
};

export default Home