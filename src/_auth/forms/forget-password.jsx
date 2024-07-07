import React, { useState } from 'react';
import {  websitePattern } from '../../assets';
import { Link } from 'react-router-dom';
import ReusableHeader from '../../components/ReusableHeader';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

 
  const handleLogin = () => {
    console.log('Logging in with:', email);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="absolute inset-0 bg-[#F7F8F9] opacity-90 z-10"></div>
      <img src={websitePattern} className="absolute inset-0 w-auto h-full object-cover z-0" alt="background" />

      <div className="max-w-md mx-auto p-6 rounded-lg  z-10 " >
      <ReusableHeader/>
<div dir="rtl">

          <div className="text-4xl  mb-4">   نسيت كلمة المرور؟</div>
        <h1 className="text-md  mb-4"> لا تقلق! هذا يحدث. الرجاء إدخال عنوان البريد الإلكتروني المرتبط بحسابك. </h1>

        <div className="my-10">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-6 border bg-[#F7F8F9] text-[#8391A1] rounded-md shadow-sm focus:outline-none text-xl"
            placeholder="البريد الالكتروني"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-DarkTan text-white py-6 rounded-lg shadow-sm text-lg mb-4">ارسل الرمز  </button>

</div>

      </div>
      <h1 className=' absolute bottom-8 z-10 text-lg mb-4'> تذكرت كلمة المرور ؟  <Link to="/login" className='text-DarkTan'> تسجيل الدخول</Link></h1>

    </div>
  );
};

export default ForgetPassword;
