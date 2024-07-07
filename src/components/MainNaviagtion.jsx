import React, { useState } from 'react';
import {  FaPlus } from 'react-icons/fa';
import { MdOutlineWidgets } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { RxHome } from "react-icons/rx";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { TbBooks } from "react-icons/tb";
import { logo2 , logo1 ,logo} from '../assets';
import { GoHeartFill } from "react-icons/go";




const MainNavigation = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <div className='flex justify-center '>
      <nav className="fixed bottom-0  w-full bg-[#FFFFFF] shadow-lg flex justify-between items-center py-4 px-4 z-50  max-w-2xl">
      <button onClick={()=>(navigate('/auther-profile'))} className="flex flex-col items-center ">
        <CiUser color='#A2A2A2'size={24} />
      </button>
      
      <button className="flex flex-col items-center  transition duration-1000">
        <HiOutlineShoppingCart color='#A2A2A2'size={24} />
      </button>
      <div className="relative">
  <div className="absolute inset-x-0 -top-24 w-full flex justify-center items-center">

    
  <div className="bg-transparent rounded-full p-4">
      <button
        onClick={() => setOpen(prev => !prev)}
        className={`rounded-full w-[54px] h-[54px] flex justify-center items-center transition-colors duration-1000 z-50 ${
          open ? 'bg-[#F8F8F8] text-black' : 'bg-DarkTan text-white'
        }`}
      >
        <img
          className="w-[26px] h-[26px] rounded-full"
          src={open ? logo2 : logo1}
          alt="logo"
        />
      </button>
    </div>
  </div>
</div>

      <AnimatePresence>
          {open && (
          <motion.div 
          initial={{ opacity: 0,rotate:0 ,y:0 }}
          animate={{ opacity: 1 ,rotate:360 ,y:50 }}
          exit={{ opacity: 0,rotate:0 ,y:100 }}
          transition={{ duration: 0.9 }} 
           className="absolute inset-x-0 top-[-120px]  flex justify-center space-x-20">
            
            <motion.div
              initial={{ opacity: 0  }}
              animate={{ opacity: 1,  }}
              exit={{ opacity: 0,rotate:-180   }}
              transition={{ duration: 0.9 }}             >
              <button className='bg-DarkTan  rounded-full p-4' onClick={()=>(navigate('/favourite'))}>
              <GoHeartFill color='white' size={30} />
              </button>

            </motion.div>

            <motion.div
               initial={{ opacity: 0   }}
               animate={{ opacity: 1  }}
               exit={{ opacity: 0,rotate:-180   }}
               transition={{ duration: 0.9 }} 

            >
                <div  className="absolute inset-x-0 -top-20  flex justify-center items-center">
            <button className="bg-DarkTan  rounded-full p-4">
              <FaPlus color='white' size={30} />
            </button>
              </div>

            </motion.div>
            
            <motion.div
              initial={{ opacity: 0   }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0,rotate:-180   }}
              transition={{ duration: 0.9 }} 
            >
              

              <button className='bg-DarkTan rounded-full p-4'  onClick={()=>(navigate('/favourite'))}>
              <TbBooks color='white' size={30} />
              </button>

            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>
      <button className="flex flex-col items-center ">
        <MdOutlineWidgets color='#A2A2A2' size={24} />
      </button>
      <button onClick={()=>(navigate('/'))} className="flex flex-col items-center ">
        <RxHome color='#A2A2A2' size={24} />
      </button>
    </nav>
    </div>
  );
};

export default MainNavigation;
