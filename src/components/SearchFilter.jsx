import React from 'react';
import { CiSearch } from 'react-icons/ci';
import {filter} from '../assets/index'


const SearchFilter = () => {
  return (
    <div className='flex justify-between space-x-2 '>
   
      <div className="bg-[#F7F8F9] p-3 rounded-lg ml-4">
        <img src={filter} size={20} />
      </div>

      <div className="relative bg-[#F7F8F9] rounded-lg py-3 flex items-center w-full ">
        <input
          type="text"
          placeholder="بحث"
          className="bg-transparent focus:outline-none w-full text-gray-700 pr-8 text-right"
        />
        <CiSearch size={18} className="absolute right-1 text-gray-600" />
      </div>
    </div>
  );
};

export default SearchFilter;
