import React, { useState } from 'react';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { LoginIcon, websitePattern } from '../../assets';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="absolute inset-0 bg-[#F7F8F9] opacity-90 z-10"></div>
      <img src={websitePattern} className="absolute inset-0 w-auto h-full object-cover z-0" alt="background" />
      <div className="max-w-md mx-auto p-6 rounded-lg  z-10 " dir="rtl">

        <div className='flex gap-2'>
          <div className="text-4xl  mb-4">أهلا بك من جديد!</div>
          <img className='w-[25px] h-[25px]' src={LoginIcon} alt="login icon" />
        </div>

        <h1 className="text-lg  mb-4">نحن سعداء بعودتك، سجل الدخول لاكتشاف المزيد من الكتب</h1>

       <form onClick={handleLogin}>
       <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="current-password" 

            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-6 border bg-[#F7F8F9] text-[#8391A1] rounded-md shadow-sm focus:outline-none text-xl"
            placeholder="البريد الالكتروني"
          />
        </div>

        <div className="mb-4 relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-6 border bg-[#F7F8F9] text-[#8391A1] rounded-md shadow-sm focus:outline-none text-xl pl-10"
            placeholder="كلمة المرور"
          />
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            {showPassword ? (
              <VscEyeClosed size={20} className="text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} />
            ) : (
              <VscEye size={20} className="text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} />
            )}
          </span>

        </div>
        <Link to="/forget-password" className="flex  items-center pb-3 text-DarkTan ">نسيت كلمة المرور؟</Link>


        <button
          onClick={handleLogin}
          className="w-full bg-DarkTan text-white py-6 rounded-lg shadow-sm text-lg mb-4"
        >
          تسجيل الدخول
        </button>
       </form>


      </div>
      <h1 className=' absolute bottom-8 z-10 text-lg mb-4'> ليس لديك حساب؟ <Link to="/register" className='text-DarkTan'>انشاء حساب</Link></h1>

    </div>
  );
};

export default Login;
