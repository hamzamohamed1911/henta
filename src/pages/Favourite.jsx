import React from 'react';
import { dummyBooks, websitePattern } from '../assets';
import { IoIosHeartEmpty } from 'react-icons/io';
import ReusableHeader from '../components/ReusableHeader';

const Favourite = () => {
  return (
    <div className="flex justify-center  h-screen ">
      <div className='max-w-3xl'>
        <ReusableHeader label="المفضلة" />
        <div dir='rtl' className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
          {dummyBooks.map((book) => (
            <div key={book.id} className="relative rounded-xl shadow-lg overflow-hidden h-[192px] w-[140px]">
              <div className="absolute inset-0 bg-[#F7F8F9] opacity-90 z-10"></div>
              <img
                src={websitePattern}
                className="absolute inset-0 w-full h-full object-cover z-0"
                alt="background"
              />
              <div className="relative z-20 p-4 flex flex-col justify-between">
                <div className="flex justify-center items-center">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="h-[112px] w-[78px] object-cover rounded"
                  />
                  <div className="absolute top-0 left-0 bg-[#E3E3E3] rounded-tl-lg p-1">
                    <IoIosHeartEmpty size={18} className="text-DarkTan" />
                  </div>
                </div>
                <div className="py-2">
                  <h2 className="text-xs mb-2 text-center flex justify-start">{book.title}</h2>
                  <h2 className="text-xs mb-2 text-center flex justify-start">جم {book.price}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourite;
