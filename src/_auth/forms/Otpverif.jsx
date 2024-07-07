import React, { useRef, useState } from 'react';
import {  websitePattern } from '../../assets';
import { Link } from 'react-router-dom';
import ReusableHeader from '../../components/ReusableHeader';

const Otpverif = () => {

  const [otp, setOTP] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (index, value) => {
    if (/^[0-9]$/.test(value)) {
      const updatedOTP = [...otp];
      updatedOTP[index] = value;
      setOTP(updatedOTP);

      if (index < inputRefs.length - 1 && value !== '') {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };
 
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="absolute inset-0 bg-[#F7F8F9] opacity-90 z-10"></div>
      <img src={websitePattern} className="absolute inset-0 w-auto h-full object-cover z-0" alt="background" />

      <div className="max-w-md mx-auto py-6 rounded-lg  z-10 " >
      <ReusableHeader/>
<div dir="rtl">

          <div className="text-4xl  mb-4">   تأكيد الرمز</div>
        <h1 className="text-md  mb-4"> أدخل رمز التحقق المرسل على عنوان بريدك الإلكتروني. </h1>

        <div className="flex justify-center p-4  py-4 ">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="border border-gray-300 rounded p-3 text-3xl h-[60px] w-[70px] text-center mx-2"
              maxLength={1}
            />
          ))}
        </div>
        <button
          className="w-[331px] bg-DarkTan text-white py-6 rounded-lg shadow-sm text-lg mb-4">  تأكيد </button>

</div>

      </div>
      <h1 className=' absolute bottom-8 z-10 text-lg mb-4'> لم تتلقى الرمز ؟ <Link to="/login" className='text-DarkTan'> اعادة ارسال</Link></h1>

    </div>
  );
};

export default Otpverif;
