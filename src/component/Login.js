import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <>

    <div>
        <Header/>
        <div className='absolute'>
            <img className='w-[100vw] h-[100vh]' src="https://wallpapers.com/images/high/netflix-background-gs7hjuwvv2g0e9fj.webp" alt="Banner" />
        </div>

        <form action="" className='flex p-12 flex-col w-3/12 my-36 left-0 right-0 mx-auto items-center justify-center absolute bg-black opacity-85'>
        {/* <form action="" className='absolute bg-black items-center justify-center  top-40 flex-col content-center'> */}
        <h1 className='text-white font-bold mb-5 text-3xl '>Signup</h1>
          <div className='flex flex-col'>
          
            <input type="text" placeholder='Full Name' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
            <input type="email" placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
            <input type="password" placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
           <p>Already have an account?</p>
          </div>
        </form>
    </div>

    </>
    
  )
}

export default Login