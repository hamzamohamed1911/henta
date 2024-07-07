import React, { useState } from 'react';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { LoginIcon, websitePattern } from '../../assets';
import ReusableHeader from '../../components/ReusableHeader';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedButton, setSelectedButton] = useState('reader');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const initialFormData = {
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: ''
  };

  const [readerFormData, setReaderFormData] = useState(initialFormData);
  const [writerFormData, setWriterFormData] = useState(initialFormData);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (selectedButton === 'reader') {
      setReaderFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    } else {
      setWriterFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedButton === 'reader') {
      console.log('Reader Data:', readerFormData);
    } else {
      console.log('Writer Data:', writerFormData);
    }
  };

  const formData = selectedButton === 'reader' ? readerFormData : writerFormData;

  return (
    <div className="flex justify-center h-screen relative">
      <div className="absolute inset-0 bg-[#F7F8F9] opacity-90 z-10"></div>
      <img src={websitePattern} className="absolute inset-0 w-auto h-full object-cover z-0" alt="background" />
      
      <div className="mx-auto p-6 rounded-lg z-10">
        <ReusableHeader />
        <div dir="rtl">
          <div className="text-4xl mb-4">مرحبًا بك!</div>
          <h1 className="text-lg mb-4">قم بإنشاء حساب لنبدأ</h1>

          <div className='flex text-2xl my-6 bg-[#EDEEEF] p-3 items-center rounded-xl justify-between'>
            <motion.button
              onClick={() => handleButtonClick('reader')}
              animate={{ backgroundColor: selectedButton === 'reader' ? '#FFFFFF' : '#EDEEEF', width: selectedButton === 'reader' && '160px' }}
              className={`p-2 rounded-lg`}
            >
              قارئ
            </motion.button>
            <motion.button
              onClick={() => handleButtonClick('writer')}
              animate={{ backgroundColor: selectedButton === 'writer' ? '#FFFFFF' : '#EDEEEF', width: selectedButton === 'reader' && '160px' }}
              className={`p-2 rounded-lg`}
            >
              كاتب
            </motion.button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-[331px] px-3 py-6 border bg-[#F7F8F9] text-[#8391A1] rounded-md shadow-sm focus:outline-none text-xl"
                placeholder={selectedButton === 'writer' ? 'اسم الكاتب':'الاسم'}
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-[331px] px-3 py-6 border bg-[#F7F8F9] text-[#8391A1] rounded-md shadow-sm focus:outline-none text-xl"
                placeholder="البريد الإلكتروني"
              />
            </div>

            <div className="mb-4">
              <input
                type="tel"
                dir="rtl"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-[331px] px-3 py-6 border bg-[#F7F8F9] text-[#8391A1] rounded-md shadow-sm focus:outline-none text-xl"
                placeholder="رقم الهاتف"
              />
            </div>

            <div className="mb-4 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-[331px] px-3 py-6 border bg-[#F7F8F9] text-[#8391A1] rounded-md shadow-sm focus:outline-none text-xl pl-10"
                placeholder="كلمة المرور"
                autoComplete="new-password" 
              />
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                {showPassword ? (
                  <VscEyeClosed size={20} className="text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} />
                ) : (
                  <VscEye size={20} className="text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} />
                )}
              </span>
            </div>

            <div className="mb-4 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-[331px] px-3 py-6 border bg-[#F7F8F9] text-[#8391A1] rounded-md shadow-sm focus:outline-none text-xl pl-10"
                placeholder="تأكيد كلمة المرور"
                autoComplete="new-password" 
              />
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                {showPassword ? (
                  <VscEyeClosed size={20} className="text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} />
                ) : (
                  <VscEye size={20} className="text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} />
                )}
              </span>
            </div>

            <button
              className="w-full bg-DarkTan text-white py-6 rounded-lg shadow-sm text-lg"
            >
              إنشاء حساب
            </button>
          </form>
        </div>
      </div>
      <h1 className='absolute bottom-8 z-10 text-lg mb-4'>لديك حساب بالفعل؟ <Link to="/login" className='text-DarkTan'>تسجيل الدخول</Link></h1>
    </div>
  );
};

export default Register;
