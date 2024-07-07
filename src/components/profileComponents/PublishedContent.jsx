import React from 'react';
import { dummyBooks, websitePattern } from "../../assets";
import { IoIosAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';

const PublishedContent = () => {
  const publishedBooks = dummyBooks.filter(book => book.progress === 100);

  return (
    <div  className='flex justify-center space-x-6'>
     
        <div className='grid gap-6 grid-cols-2'>
        <Link to='/publish-book' className="text-DarkTan w-[129px] h-[177px] rounded-xl border-DarkTan border-dotted border-2 flex justify-center items-center">
        <IoIosAdd size={50} />
      </Link>
        {publishedBooks.map((book) => (
        <div dir='rtl' key={book.id} className="px-2">
          <div className="relative w-[129px] h-[177px] rounded-xl shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-[#F7F8F9] opacity-90 z-10"></div>
            <img
              src={websitePattern}
              className="absolute inset-0 w-full h-full object-cover z-0"
              alt="background"
            />
            <div className="relative z-20 p-4 flex flex-col justify-between h-full">
              <div className="flex justify-center items-center">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="h-[112px]  w-[78px] object-cover rounded"
                />
              </div>
              <div className='py-2'>
                <h2 className="text-xs mb-2 text-center flex justify-start">{book.title}</h2>
                <h2 className="text-xs mb-2 text-center flex justify-start"> {book.price} </h2>
              </div>
            </div>
          </div>
        </div>
        
      ))}
      </div>
      
     
    </div>
  );
};

export default PublishedContent;
