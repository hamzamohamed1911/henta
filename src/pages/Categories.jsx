import React from 'react'
import { dummyBooks, websitePattern } from '../assets'
import ReusableHeader from '../components/ReusableHeader'

const Categories = () => {
  return (
    <div className="flex  justify-center">
   <div>
   <ReusableHeader label="الأقسام"/>

<div className='grid gap-6 grid-cols-2'>
  
{dummyBooks.map((book) => (
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
    
  </div>
</div>
))}
</div>
   </div>
  
</div>  )
}

export default Categories