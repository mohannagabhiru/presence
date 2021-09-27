import React from 'react'

const ProjectCard = ({name,link,overview}) => {
    return (
        <div className="flex flex-col h-52 text-center my-4 bg-white shadow-xl">
            <p className="text-2xl my-1 mt-10 font-bold text-blue-500">{name}</p>
            <p className="text-lg my-1 mt-4 text-gray-400">{overview}</p>
            <a href={link} className="w-28 text-center mx-auto bg-gray-600 text-white px-1 my-3 mt-10">Live Link</a>
        </div>
    )
}

export default ProjectCard
