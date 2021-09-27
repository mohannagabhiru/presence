import React from 'react'
import {FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="flex justify-between align-middle bg-gray-600 p-8 text-white">
          <p className="text-xl p-2"> Made with ❤️️</p>   
           <div className="flex justify-center">
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

export default Footer
