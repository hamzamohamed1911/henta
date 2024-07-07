import React from 'react';
import { dummyBooks, websitePattern } from '../../assets';
import PublicationProgressIndicator from './PublicationProgressIndicator';

const UnpublishedContent = () => {
  // Filter out books with progress 100%
  const unpublishedBooks = dummyBooks.filter(book => book.progress < 100);

  return (
    <div className="flex  justify-center">
        <div className='grid gap-6 grid-cols-2'>
        {unpublishedBooks.map((book) => (
        <div key={book.id} className="relative  w-[129px] h-[177px] rounded-xl shadow-lg overflow-hidden">
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
                className="h-[112px] w-[78px] object-cover rounded"
              />
            </div>
            <div className='flex justify-center items-center'>
              <PublicationProgressIndicator progress={book.progress} />
            </div>
          </div>
        </div>
      ))}
        </div>
      
    </div>
  );
};

export default UnpublishedContent;
