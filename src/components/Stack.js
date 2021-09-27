import React from 'react'
import {SiReact,SiTailwindcss,SiFirebase,SiJavascript,SiHtml5} from 'react-icons/si'

const Stack = () => {
    return (
        <div className="w-4/5 h-1/2 mx-auto py-4 flex flex-col text-center justify-center align-middle bg-gray-600">
           <h1 className="text-3xl text-white font-medium">Tech Stack</h1>
            <div className="flex flex-wrap justify-center pt-2">
              <div className="flex flex-col w-100 p-10 m-4 bg-white">
                        <SiReact color="skyblue" className="mx-auto text-3xl" />
                        <p className="mt-6 text-xl font-semibold text-center">Reactjs</p>
              </div>
              <div className="flex flex-col w-40 p-10 m-4 bg-white">
                        <SiTailwindcss color="skyblue" className="mx-auto text-3xl" />
                        <p className="mt-6 text-xl font-semibold text-center">Tailwind</p>
              </div>
              <div className="flex flex-col w-40 p-10 m-4 bg-white">
                        <SiFirebase color="yellow" className="mx-auto text-3xl" />
                        <p className="mt-6 text-xl font-semibold text-center">Firebase</p>
              </div>
              <div className="flex flex-col w-40 p-10 m-4 bg-white">
                        <SiJavascript color="yellow" className="mx-auto text-3xl" />
                        <p className="mt-6 text-xl font-semibold text-center">Javascript</p>
              </div>
              <div className="flex flex-col w-40 p-10 m-4 bg-white">
                        <SiHtml5 color="blue" className="mx-auto text-3xl" />
                        <p className="mt-6 text-xl font-semibold text-center">HTML5</p>
              </div>
            </div>
        </div>
    )
}

export default Stack
