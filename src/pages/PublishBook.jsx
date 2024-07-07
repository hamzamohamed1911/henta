import React, { useState } from 'react';
import ReusableHeader from '../components/ReusableHeader';
import { PiMoneyWavyFill } from "react-icons/pi";
import { IoCloudUploadOutline } from 'react-icons/io5';
import { GoLink } from 'react-icons/go';
import Modal from '../components/Modal';
import { fawri, paymob } from '../assets';
import { FaChevronLeft } from 'react-icons/fa6';

const PublishBook = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const [showModal2, setShowModal2] = useState(false);
  const openModal2 = () => {
    setShowModal(false); 
    setShowModal2(true);
  };
  const closeModal2 = () => setShowModal2(false);

  const handlSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <section className="flex justify-center mt-4">
        <div className='max-w-md'>
   <ReusableHeader label="نشر الكتاب"/>

   <div dir='rtl' className='  p-6 '>
        <form onSubmit={handlSubmit} className='space-y-4'>

        <div className='space-y-2'>
        <label htmlFor='title' className='block text-sm font-medium text-gray-700'>اسم الكتاب</label>
            <div className="mb-4">
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-[331px] px-3 py-4 border bg-[#F7F8F9]  rounded-md shadow-sm focus:outline-none text-xl"
                placeholder="اسم الكتاب"
              />
            </div>       
          </div>

          <div className='flex  gap-4'>

           <div className='space-y-2'>
           <label htmlFor='author' className='block text-sm font-medium text-gray-700'>سعر الكتاب</label>
            <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-[155px] px-3 py-4 border bg-[#F7F8F9]  rounded-md shadow-sm focus:outline-none text-xl"
                placeholder="اسم الكتاب"
              />
            </div>        
            <div className='space-y-2'>
            <label htmlFor='author' className='block text-sm font-medium text-gray-700'> عدد الصفح</label>
            <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-[155px] px-3 py-4 border bg-[#F7F8F9]  rounded-md shadow-sm focus:outline-none text-xl"
                placeholder="عدد الصفح "
              />
              </div>      

              
                </div>
       
                       <div className='space-y-2'>
      <label htmlFor='coverImage' className='block text-sm font-medium text-gray-700'>غلاف الكتاب </label>
      <div className="relative"> 
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="w-[331px] px-3 py-4 border bg-[#F7F8F9] rounded-md shadow-sm focus:outline-none text-xl"
          placeholder="غلاف الكتاب "
        />
        <button
          type="button"
          className="absolute inset-y-0 left-0 flex items-center  "
        >
          <IoCloudUploadOutline  className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>

    <div className='space-y-2'>
      <label htmlFor='coverImage' className='block text-sm font-medium text-gray-700'> رابط فيديو الكتاب </label>
      <div className="relative"> 
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="w-[331px] px-3 py-4 border bg-[#F7F8F9] rounded-md shadow-sm focus:outline-none text-xl"
          placeholder=" رابط فيديو الكتاب "
        />
        <button
          type="button"
          className="absolute inset-y-0 left-0 flex items-center  "
        >
          <GoLink   className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>

           <div className='space-y-2'>
            <label htmlFor='coverImage' className='block text-sm font-medium text-gray-700'>وصف الكتاب</label>
            <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-[331px] px-3 py-4 border bg-[#F7F8F9]  rounded-md shadow-sm focus:outline-none text-xl"
                placeholder="وصف الكتاب "
              />         
              </div>

              <div className='space-y-2'>
      <label htmlFor='coverImage' className='block text-sm font-medium text-gray-700'>الكتاب</label>
      <div className="relative">
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="w-[331px] px-3 py-4 border bg-[#F7F8F9] rounded-md shadow-sm focus:outline-none text-xl"
          placeholder="الكتاب"
        />
        <button
          type="button"
          className="absolute inset-y-0 left-0 flex items-center  "
        >
          <IoCloudUploadOutline  className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
              <button onClick={openModal} className='flex gap-2 '>
              <PiMoneyWavyFill size={20} className='text-DarkTan rounded-lg '/>

                <h1 className='text-[#5C5C5C]'>
                  تمويل الكتاب
                </h1>
              </button>
          <div className='flex justify-center items-center'>
            <button  type='submit' className='bg-DarkTan w-full py-4  text-white px-4  rounded-md'>نشر الكتاب</button>
            <Modal label="اختر باقتك" show={showModal} onClose={closeModal}>
              <div className='rounded-xl bg-[#F8F8F8] p-4'>
                <div className='flex justify-between items-center'>
                  <h1 className='text-xl alexandria-normal '> 3 أيام</h1>
                  <h1>100 جم</h1>
                </div>
                <div>
                <div className="flex items-center">
                      <span className="w-2 h-2 bg-DarkTan rounded-full flex justify-center items-center ml-2"></span>
                      <p className="font-bold text-sm text-gray-800 my-2">هناك حقيقة مثبتة منذ</p>
                </div>
                <div className="flex items-center">
                      <span className="w-2 h-2 bg-DarkTan rounded-full flex justify-center items-center ml-2"></span>
                      <p className="font-bold text-sm text-gray-800 my-2">هناك حقيقة مثبتة منذ</p>
                </div>
                </div>
              </div>

              <div className='rounded-xl my-10 bg-[#F8F8F8] p-4'>
                <div className='flex justify-between items-center'>
                  <h1 className='text-xl alexandria-normal '> 5 أيام</h1>
                  <h1>150 جم</h1>
                </div>
                <div>
                <div className="flex items-center">
                      <span className="w-2 h-2 bg-DarkTan rounded-full flex justify-center items-center ml-2"></span>
                      <p className="font-bold text-sm text-gray-800 my-2">هناك حقيقة مثبتة منذ</p>
                </div>
                <div className="flex items-center">
                      <span className="w-2 h-2 bg-DarkTan rounded-full flex justify-center items-center ml-2"></span>
                      <p className="font-bold text-sm text-gray-800 my-2">هناك حقيقة مثبتة منذ</p>
                </div>
                </div>
              </div>

              <div className='rounded-xl bg-[#F8F8F8] p-4'>
                <div className='flex justify-between items-center'>
                  <h1 className='text-xl alexandria-normal '> 10 أيام</h1>
                  <h1> 200 جم</h1>
                </div>
                <div>
                <div className="flex items-center">
                      <span className="w-2 h-2 bg-DarkTan rounded-full flex justify-center items-center ml-2"></span>
                      <p className="font-bold text-sm text-gray-800 my-2">هناك حقيقة مثبتة منذ</p>
                </div>
                <div className="flex items-center">
                      <span className="w-2 h-2 bg-DarkTan rounded-full flex justify-center items-center ml-2"></span>
                      <p className="font-bold text-sm text-gray-800 my-2">هناك حقيقة مثبتة منذ</p>
                </div>
                </div>
              </div>
              <button onClick={openModal2}  type='submit' className='bg-DarkTan w-full py-4 my-4  text-white px-4  rounded-md'> اختر</button>

           </Modal>
           <Modal label="اختر وسيلة الدفه" show={showModal2} onClose={closeModal2}>
           <div className='rounded-xl flex justify-between items-center p-4'>
                <img alt='fawri' className='bg-cover h-[50px] w-[96px]' src={fawri}/>
                <FaChevronLeft className='h-4 w-4 ' />

           </div>        
           <div className='rounded-xl flex justify-between items-center p-4'>
                <img alt='fawri' className='bg-cover h-[40px] w-[101px]' src={paymob}/>
                <FaChevronLeft className='h-4 w-4 ' />
           </div>
      </Modal>
          </div>
        </form>
      </div>
   </div>
    </section>
  );
}

export default PublishBook;
