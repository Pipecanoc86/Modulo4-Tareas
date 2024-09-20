import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
   
<nav class="bg-black p-4">
    <div class="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div class="text-gray-400 font-bold text-3xl mb-4 lg:mb-0">Rick and Morty
        </div>

        <div class="lg:hidden">
            <button class="text-white focus:outline-none">
                    <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
        </div>

        <div class="lg:flex flex-col lg:flex-row lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl">
            <Link to="/" class="text-white  px-4 py-2 hover:text-sky-300 ">Home</Link>
            <Link to="/Character" className="text-white  px-4 py-2  hover:text-green-500">Character</Link>
            <Link to="/Location" class="text-white  px-4 py-2  hover:text-yellow-300">Location</Link>
            <Link to="/Episode" class="text-white  px-4 py-2  hover:text-red-600">Episode</Link>
        </div>
    </div>

</nav>

  )
}

export default Navbar