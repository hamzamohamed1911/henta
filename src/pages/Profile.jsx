import React, { useState } from "react";
import { profile } from "../assets";
import ReusableHeader from "../components/ReusableHeader";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import Modal from "../components/Modal";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Profile = () => {
  const [showContent, setShowContent] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };


  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const toggleContent = (e) => {
    e.preventDefault()
    setShowContent((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="flex justify-center mt-4 text-[#979393]">
        <div className="w-full max-w-md">
          <ReusableHeader label="الملف الشخصي" />
          <div className="flex justify-center">
            <div>
              <img
                src={profile}
                className="rounded-md h-[129px] w-[129px] mt-4 z-10"
                alt="Profile"
              />
              <h1 onClick={openModal} className="my-3 cursor-pointer text-center text-red-500">
                حذف الحساب
              </h1>
            </div>
          </div>
          <form dir="rtl" className="space-y-6 mt-6">
            <div className="flex flex-col">
              <label className="text-xl mb-2">الاسم</label>
              <input
                type="text"
                className="w-full p-4 border bg-[#F7F8F9]  rounded-md shadow-sm focus:outline-none text-xl"
                placeholder="الاسم"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xl mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                className="w-full p-4 border bg-[#F7F8F9]  rounded-md shadow-sm focus:outline-none text-xl"
                placeholder="البريد الإلكتروني"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xl mb-2">رقم الهاتف</label>
              <input
                dir="rtl"
                type="tel"
                className="w-full p-4 border bg-[#F7F8F9]  rounded-md shadow-sm focus:outline-none text-xl"
                placeholder="رقم الهاتف"
              />
            </div>

            

            <div className="flex justify-between items-center">
              <h1>تغيير كلمة المرور</h1>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleContent}
                className="flex items-center text-[#979393]"
              >
                {showContent ? (
                  <IoIosArrowUp size={20} />
                ) : (
                  <IoIosArrowDown size={20} />
                )}
              </motion.button>
            </div>
            <div >
              {showContent && (
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <input
                      type="password"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handleChange}
                      className="w-full p-4 border bg-[#F7F8F9]  rounded-md shadow-sm focus:outline-none text-xl"
                      placeholder="كلمة المرور الحقيقة"
                    />
                  </div>

                  <div className="flex flex-col">
                    <input
                      type="password"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handleChange}
                      className="w-full p-4 border bg-[#F7F8F9]  rounded-md shadow-sm focus:outline-none text-xl"
                      placeholder="كلمة المرور الجديدة"
                    />
                  </div>

                  <div className="flex flex-col">
                    <input
                      type="password"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handleChange}
                      className="w-full p-4 border bg-[#F7F8F9]  rounded-md shadow-sm focus:outline-none text-xl"
                      placeholder="تأكيد كلمة المرور"
                    />
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
        <Modal  position="bottom"  show={showModal} onClose={closeModal}>
      
           <div dir="rtl" className='rounded-xl p-2 space-y-4'>
           <h1>
          طلب حذف الحساب
        </h1>
        <h1 className="flex justify-end font-sm">
        برجاء ادخال البريد الالكتروني وكلمة المرور لاستكمال حذف الحساب
        </h1>
        <form>
       <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="current-password" 
            className="w-full px-3 py-6 border bg-[#F7F8F9] text-[#8391A1] rounded-md shadow-sm focus:outline-none text-xl"
            placeholder="البريد الالكتروني"
          />
        </div>

        <div className="mb-4 relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            autoComplete="current-password"
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


        <button
          className="w-full bg-DarkTan text-white py-6 rounded-lg shadow-sm text-lg mb-4"
        >تأكيد
        </button>
       </form>

           </div>        
           
      </Modal>
      </section>
    </>
  );
};

export default Profile;
