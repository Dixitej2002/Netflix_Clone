import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";

const Header = () => {
    return (
        <div className='absolute z-10 flex w-[100%] px-6 items-center justify-between bg-gradient-to-b from-black '>
            <img className='w-56' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix logo" />
            <div className='flex items-center'>
                <IoIosArrowDropdown size={24}/>
                <h1 className='text-lg font-medium'>Dixit Pradhan</h1>
                <div className='ml-5'>

                    <button className='bg-red-800 text-white px-4 py-2'>Logout</button>
                    <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movies</button>
                </div>
            </div>
        </div>
    )
}

export default Header