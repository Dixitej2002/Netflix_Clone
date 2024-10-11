import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isLogin, setisLogin] = useState(false);
  const loginHandler = () => {
    setisLogin(!isLogin);
  }
  const [fullName, setfullName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  return (
    <>

      <div>
        <Header />
        <div className='absolute'>
          <img className='w-[100vw] h-[100vh]' src="https://wallpapers.com/images/high/netflix-background-gs7hjuwvv2g0e9fj.webp" alt="Banner" />
        </div>

        <form action="" className='flex p-12 flex-col w-3/12 my-36 left-0 right-0 mx-auto items-center justify-center absolute bg-black opacity-85 rounded-md'>
          {/* <form action="" className='absolute bg-black items-center justify-center  top-40 flex-col content-center'> */ }
          <h1 className='text-white font-bold mb-5 text-3xl '>{ isLogin ? "Login" : "Signup" }</h1>
          <div className='flex flex-col'>
            {
              !isLogin &&
              <input type="text" placeholder='Full Name' value={ fullName } onChange={ (e) => setfullName(e.target.value) } className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
            }
            <input type="email" placeholder='Email' value={ email } onChange={ (e) => setEmail(e.target.value) } className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
            <input  type="password" placeholder='Password' value={ password } onChange={ (e) => setPassword(e.target.value) } className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
            <button className='bg-red-600 text-white'>{isLogin ?"Login" : "Signup"}</button>
            <p className='text-white'>{ isLogin ? "New to Netflix?" : "Already have an account?" }<span onClick={ loginHandler } className='ml-2 text-blue-400 font-medium cursor-pointer'>{ isLogin ? "Signup" : "Login" }</span></p>
          </div>
        </form>
      </div>

    </>

  )
}

export default Login