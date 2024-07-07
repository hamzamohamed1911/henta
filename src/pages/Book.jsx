import React from 'react';
import { useParams } from 'react-router-dom';
import { dummyBooks } from '../assets';
import ReusableHeader from '../components/ReusableHeader';
import { MdOutlineStar } from "react-icons/md";

const Book = () => {
  const { bookId } = useParams(); 
  // Convert bookId to integer for comparison
  const id = parseInt(bookId);

  const book = dummyBooks.find(book => book.id === id);
  if (!book) {
    return (
      <div className="max-w-md mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Book not found</h2>
        <p className="text-lg text-gray-700">Could not find a book with id {bookId}.</p>
      </div>
    );
  }
  
  const publicationYear = new Date(book.date).getFullYear();

  return (
    <section className="flex justify-center mt-4">
      <div>
        <ReusableHeader label="اسم الكتاب"/>
        <div dir="rtl" className="max-w-md mx-auto mt-8 p-8 flex flex-col items-center">
          <img src={book.coverImage} alt={book.title} className="mx-auto rounded-lg w-[181px] h-[241px] mb-4" />

          <div className='text-[#1A1A1A] w-[331px] h-[71px] text-sm bg-white rounded-md flex justify-between items-center shadow-sm'>

            <div className='relative flex flex-1 flex-col justify-center items-center text-center space-y-2 p-3'>
              <h1 className="">عدد الصفح</h1>
              <span className="">{book.numberOfPages}</span>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-12  w-[1.5px] bg-gray-300"></div>
            </div>

            <div className='relative flex flex-1 flex-col justify-center items-center text-center p-3 space-y-2'>
              <h1 className="">تاريخ النشر</h1>
              <span className="">{publicationYear}</span>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-12 w-[1.5px] bg-gray-300 "></div>
            </div>

            <div className='flex flex-1 flex-col justify-center space-y-2 items-center text-center p-3'>
              <h1 className="">التقيم</h1>
              <span className="flex gap-1 text-center"><MdOutlineStar size={12} color='gold'/> {book.rating}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Book;
