import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

const Navbar = () => {
    return (
        <div className="bg-gray-600 p-10 mx-auto text-white flex justify-between	 font-medium text-xl items-center">
        {/* <h1 className="text-center text-3xl">Mohan</h1> */}
            <div>
                <h1>Portfolio</h1>
            </div>
            <div className='flex row'>
                <AnchorLink href='#projects'>Projects</AnchorLink>
                <div className='ml-10'>
                    <AnchorLink href='#stack'>Tech Stack</AnchorLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
