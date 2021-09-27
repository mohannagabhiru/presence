import React from 'react'
import {FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa';
import hero from "../pics/hero2.JPG";

const About = () => {
    return (
        <div className="w-4/5 h-1/2 mx-auto bg-white shadow-xl py-4 flex flex-col text-center justify-center align-middle">
            <img src={hero} alt="profile" className="h-60 w-60 object-cover mt-8 mx-auto rounded-full shadow-2xl"/>
            <h1 className="mt-10 text-3xl text-blue-500 font-bold">Mohan nagabhiru</h1>
            <h6 className="mt-10 text-xl sm:w-3/5 w-4/5 mx-auto opacity-80">I'm passionate about technology and learning, and I find happiness in building applications which solve real world problems using javascript and its libraries</h6>
            <div className="flex justify-center mt-10">
            <a className="text-2xl mr-6 p-2 rounded-full hover:bg-black hover:text-white" href="https://github.com/mohanchowdarynr">
            <FaGithub />
            </a>
            <a className="text-2xl mr-6 p-2 rounded-full text-blue-800 hover:bg-blue-800 hover:text-white" href="https://www.linkedin.com/in/nagabhiru-mohan-govind-a157b1148/">
            <FaLinkedin />
            </a>
            <a className="text-2xl mr-6 p-2 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white" href="https://twitter.com/mohannagabhiru">
            <FaTwitter />
            </a>
            </div>
        </div>
    )
}

export default About
