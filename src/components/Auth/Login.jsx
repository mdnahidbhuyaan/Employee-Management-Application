import React, { useState } from 'react'

const Login = ({handleLogin}) => {




  const [email,setEmail] = useState("")
  const [password,setPassword]= useState("")
const submitHandler = (e)=>{
  e.preventDefault()
  handleLogin(email,password)
console.log("email is" ,email)
console.log("password is" ,password)
setEmail("")
setPassword("")
}

  return (
    <div className='flex h-screen w-screen items-center justify-center '>
    <div className='border-2 border-gray-200 shadow-md p-20 rounded-xl bg-emerald-100'>
  <form
  onSubmit={(e)=>{
submitHandler(e)
  }}
  className='flex flex-col items-center justify-center'> 
    <input
    value={email}
    onChange={(e)=>{
     setEmail(e.target.value)
    }}
    required className='text-black outline-none border-2 bg-transparent border-emerald-600 px-4 py-2 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
    <input
    value={password}
    onChange={(e)=>{
    
     
      setPassword(e.target.value)
    }}
    required className='text-black outline-none border-2 bg-transparent mt-5 border-emerald-600 px-4 py-2 text-xl rounded-full' type="password" placeholder='Enter your password' />
    <button className='mt-5 text-white outline-none  bg-emerald-600 px-5 py-2 text-xl w-full rounded-full'>Login</button>
  </form>
    </div>
    </div>
  )
}

export default Login
