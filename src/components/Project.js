import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
    return (
        <div className="w-4/5 h-1/2 mx-auto py-4 flex flex-col text-center justify-center align-middle" id="projects">
        <p className="text-3xl font-medium">Projects</p>
        <div className="w-2/3 mx-auto">
        <ProjectCard name="Cook Fast" link="https://cookfast.netlify.app/" overview="One stop solution to entry level folks for recipes with ingredients to servings"/> 
        <ProjectCard name="Crypto Tracker" link="https://gotocrypto.netlify.app/" overview="All crypto lovers, this is the site to check where is our portfolio heading to"/> 
        <ProjectCard name="Furniture Store" link="https://furniture-store23.netlify.app/" overview="A mini Store where you can purchase furniture of different brands"/> 
        {/* <ProjectCard name="Crypto World" link="https://cryptoworld23.netlify.app/" overview="Crypto currency realted information like exchanges,marketcap,details etc.."/> 
        <ProjectCard name="Storage Drive" link="https://storage-drive.netlify.app/" overview="Similar to google drive where we can store our data "/>  */}
        </div>
        </div>
    )
}

export default Project

