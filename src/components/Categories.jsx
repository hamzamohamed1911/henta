import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// Install modules

const CategoriesDum = [
  { id: 1, cat: 'روايات و قصص' },
  { id: 2, cat: 'تاريخ و قصص ' },
  { id: 3, cat: 'سيرة ذاتيه' },
  { id: 4, cat: 'تطوير الذات ' },
  { id: 5, cat: 'أدب الجريمة' },
  { id: 6, cat: 'دراسات دينية ' },
];

const Categories = () => {
  return (
    <div>
      <h1 className='flex justify-end alexandria-semiBold text-xl py-4'>الأقسام</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={3.5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        dir="rtl" 
      >
        {CategoriesDum.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div className='flex h-[41px] bg-[#F8F8F8] w-[100px] rounded-xl justify-center items-center'>
              <button className='text-center text-DarkTan'>
                {cat.cat}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
