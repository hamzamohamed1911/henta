import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { useNavigate } from 'react-router';
const HomeHeader = () => {
    const navigate =useNavigate()
  return (
<>
<header>
    <div className='flex justify-between py-2 '>
    <div className='space-x-1 flex '>
<button onClick={()=>{navigate('/login')}}>
<BiLogOutCircle className='cursor-pointer text-DarkTan hover:text-gray-600'  size={26} />

</button>
<button onClick={()=>{navigate('/notification')}}>
<IoNotifications  className='cursor-pointer text-DarkTan hover:text-gray-600'   size={26} />

</button>

</div>
    <h1 className='text-slate-900 text-xl '>
        مرحبا على 
    </h1>
    </div>

    <h1 className='font-medium text-2xl flex justify-end py-2'> ما الذى تبحث عنه اليوم؟</h1>

</header>
</>  )
}

export default HomeHeader