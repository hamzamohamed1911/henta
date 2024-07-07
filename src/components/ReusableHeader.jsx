import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router';

const ReusableHeader = ({ label }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
      navigate(-1);
    };


  return (
    <div className="flex items-center justify-between  py-4 ">
      <div></div> 
      <h1 className="text-lg alexandria-normal text-center">{label}</h1>
   <div className='p-1 border rounded-xl'> 
   <button onClick={handleBackClick} className="text-[#1E232C] flex justify-center">
        <IoIosArrowForward size={30} />
      </button>
   </div>
    </div>
  );
};

export default ReusableHeader;
