import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dummyBooks, websitePattern } from '../assets';
import { IoIosHeartEmpty } from 'react-icons/io';
import { FaCartShopping } from "react-icons/fa6";
import 'swiper/css';
import { Link } from 'react-router-dom';

const BooksSliderItem = ({ label }) => {
  return (
    <div className="space-y-8">
      <h1 className="alexandria-normal text-xl flex justify-end">{label}</h1>
      <div className="container py-8">
        <Swiper
          slidesPerView={2.5}
          spaceBetween={20}
          loop={false}
          navigation
          className="mySwiper"
          dir="rtl" 
        >
          {dummyBooks.map((book) => (
            <SwiperSlide key={book.id}>
              <div className="px-2">
                <Link to={`/book/${book.id}`}>
                <div className="relative w-[129px] h-[177px] rounded-xl shadow-lg overflow-hidden">
               
                  <div
                    className="absolute inset-0 bg-[#F7F8F9] opacity-90 z-10"
                  ></div>
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
                      <div className="absolute bottom-0 left-0 bg-[#E3E3E3] rounded-bl-lg p-1">
                      <FaCartShopping size={18} className="text-[#A2A2A2]" />
                    </div>
                    <div className="absolute top-0 left-0 bg-[#E3E3E3] rounded-tl-lg p-1">
                      <IoIosHeartEmpty size={18} className="text-DarkTan" />
                    </div>
                    </div>
                    <div className='py-2'>
                    <h2 className="text-xs mb-2 text-center flex justify-start">{book.title}</h2>
                    <h2 className="text-xs mb-2 text-center flex justify-start"> {book.price}</h2>
                    </div>
                   
                  </div>
                </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BooksSliderItem;
