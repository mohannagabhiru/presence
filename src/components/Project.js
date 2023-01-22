import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
    return (
        <div className="w-4/5 h-1/2 mx-auto py-4 flex flex-col text-center justify-center align-middle" id="projects">
        <p className="text-3xl font-medium">Projects</p>
        <div className="w-2/3 mx-auto">
        <ProjectCard name="Furniture Store" link="https://furniture-store23.netlify.app/" overview="A mini Store where you can purchase furniture of different brands"/> 
        <ProjectCard name="Movie Zone" link="https://new-movies23.netlify.app/" overview="Movies related app where we can find ratings,trailer,details etc.."/> 
        {/* <ProjectCard name="Crypto World" link="https://cryptoworld23.netlify.app/" overview="Crypto currency realted information like exchanges,marketcap,details etc.."/> 
        <ProjectCard name="Storage Drive" link="https://storage-drive.netlify.app/" overview="Similar to google drive where we can store our data "/>  */}
        <ProjectCard name="Evernote Clone" link="https://evernote-clone23.netlify.app/" overview="Note taking app with crud operations"/> 
        </div>
        </div>
    )
}

export default Project

