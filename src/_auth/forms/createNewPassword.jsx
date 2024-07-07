import React, { useState } from 'react';
import {  websitePattern } from '../../assets';
import ReusableHeader from '../../components/ReusableHeader';

const CreateNewPassword = () => {
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', password);
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="absolute inset-0 bg-[#F7F8F9] opacity-90 z-10"></div>
      <img src={websitePattern} className="absolute inset-0 w-auto h-full object-cover z-0" alt="background" />

      <div className="max-w-md mx-auto p-6 rounded-lg  z-10 " >
      <ReusableHeader />
<div dir="rtl">
          <div className="text-4xl  mb-4">  انشاء كلمة مرور جديدة</div>

        <h1 className="text-md  mb-4">  يجب أن تكون كلمة المرور الجديدة فريدة من نوعها عن تلك المستخدمة سابقًا.  </h1>

       <form onClick={handleLogin}>
   
        <div className="mb-4 relative">
          <input
            id="password"
            name="password"
            value={password}
            autoComplete="current-password" 
            onChange={(e) => setPassword(e.target.value)}
            className="w-[331px] px-3 py-6 border bg-[#F7F8F9] text-[#8391A1] rounded-md shadow-sm focus:outline-none text-xl pl-10"
            placeholder="كلمة المرور"
          />
        </div>
        <div className="mb-4 relative">
            <input
              id="confirmPassword"
              name="confirmPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[331px] px-3 py-6 border bg-[#F7F8F9] text-[#8391A1] rounded-md shadow-sm focus:outline-none text-xl pl-10"
              placeholder="تأكيد كلمة المرور"
              autoComplete="new-password" 

            />
            
          </div>

        <button
          onClick={handleLogin}
          className="w-[331px] bg-DarkTan text-white py-6 rounded-lg shadow-sm text-lg mb-4"
        >
               تأكيد
        </button>
       </form>
</div>

      </div>

    </div>
  );
};

export default CreateNewPassword;
