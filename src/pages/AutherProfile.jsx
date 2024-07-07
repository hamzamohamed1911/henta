import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReusableHeader from '../components/ReusableHeader';
import { profile, websitePattern } from '../assets';
import UnpublishedContent from '../components/profileComponents/UnpublishedContent';
import PublishedContent from '../components/profileComponents/PublishedContent';
import { MdModeEdit } from "react-icons/md";
import Statistics from '../components/profileComponents/Statistics';
import { useNavigate } from 'react-router';

const tabs = [
  { id: 'published', label: 'تم النشر' },
  { id: 'unpublished', label: 'غير مكتمل النشر' },
  { id: 'Statistics', label: 'احصائيات' },
];

const AutherProfile = () => {
  const [activeTab, setActiveTab] = useState('Statistics');

  const renderContent = () => {
    switch (activeTab) {
      case 'published':
        return <PublishedContent />;
      case 'unpublished':
        return <UnpublishedContent />;
      case 'Statistics':
        return <Statistics />;
      default:
        return null;
    }
  };
  const navigate = useNavigate()

  return (
    <>
      <section className="flex justify-center mt-4">
        <div className='max-w-md'>
          <ReusableHeader label="الملف الشخصى" />
          <div className='relative w-[331px] h-[249px] bg-DarkTan rounded-md'>
            <button onClick={()=>(navigate('/profile'))} className='absolute top-3 left-3 cursor-pointer p-1 bg-white rounded-sm z-50'>
              <MdModeEdit />
            </button>

            <img
              src={websitePattern}
              className="absolute inset-0 w-full h-full opacity-[8%]"
              alt="background"
            />
            
            <div className='absolute inset-0 flex flex-col items-center'>
              <img src={profile} className='rounded-full border-2 border-black h-[129px] w-[129px] mt-4 z-10' />
              <h1 className='py-4 text-white alexandria-normal text-center'>
                اسم المستخدم
              </h1>
            </div>
            <div className='absolute bottom-5 w-full'>
              <div className='flex justify-center space-x-10 text-white relative'>
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`pb-2 relative ${activeTab === tab.id ? 'border-b-2 border-transparent' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4">
            {renderContent()}
          </div>
        </div>
      </section>
    </>
  );
}

export default AutherProfile;
