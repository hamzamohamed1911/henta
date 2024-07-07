// import React, { useState } from 'react';
// import { image1, image2, image3, image4, image5, image6, image7 } from '../assets'; 

// const NativeSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [image1, image2, image3, image4, image5, image6, image7];

//   // Function to handle slide change
//   const changeSlide = (newIndex) => {
//     if (newIndex >= 0 && newIndex < slides.length) {
//       setCurrentSlide(newIndex);
//     }
//   };

//   const numDotsToShow = 3;

//   // Calculate the start index of the dots
//   const startDotIndex = Math.max(0, currentSlide - Math.floor(numDotsToShow / 2));

//   // Array of indexes for the dots
//   const dotIndexes = Array.from({ length: Math.min(numDotsToShow, slides.length) }, (_, index) => startDotIndex + index);

//   return (
//     <div className="relative py-4">
//       <div className="overflow-hidden rounded-lg">
//         <div className="flex items-center  transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//           {slides.map((slide, index) => (
//             <div key={index} className="w-full flex-shrink-0">
//               <img src={slide} className=" rounded-lg w-full h-[119px]" alt={`Slide ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation dots */}
//       <div className="flex justify-center mt-4 space-x-2">
//   {dotIndexes.map((index) => (
//     <div
//       key={index}
//       className={`h-[10px] rounded-full  focus:outline-none ${
//         index === currentSlide ? ' w-16 bg-DarkTan' : 'bg-Sand w-3'
//       }`}
//       onClick={() => changeSlide(index)}
//     />
//   ))}
// </div>


  
//     </div>
//   );
// };

// export default NativeSlider;









import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { image1, image2, image3, image4, image5, image6, image7 } from '../assets'; 

const HomeSlider = () => {
  const slides = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <div className="relative py-4 flex justify-center">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
        dir="rtl" 

      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{
            flexShrink: 0,
            width: '100%',
            height: '100%',
            position: 'relative',
            transitionProperty: 'transform',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img src={slide} className="h-[119px] rounded-lg w-[332px]" alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;