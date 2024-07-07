import React, { useState, useEffect } from 'react';
import ReusableHeader from '../components/ReusableHeader';

const notifications = [
  { id: 1, title: 'هناك حقيقة مثبتة منذ ', message: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص', date: '2024-05-15' },
  { id: 2, title: 'هناك حقيقة مثبتة منذ ', message: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص', date: '2024-05-15' },
  { id: 4, title: 'هناك حقيقة مثبتة منذ ', message: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص', date: '2024-07-03' },
  { id: 5, title: 'هناك حقيقة مثبتة منذ ', message: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص', date: '2024-07-03' },
  { id: 7, title: 'هناك حقيقة مثبتة منذ ', message: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص', date: '2024-05-15' },
  { id: 8, title: 'هناك حقيقة مثبتة منذ ', message: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص', date: '2024-05-15' },
  { id: 9, title: 'هناك حقيقة مثبتة منذ ', message: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص', date: '2024-07-04' },
  { id: 10, title: 'هناك حقيقة مثبتة منذ ', message: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص', date: '2024-07-03' },
  { id: 12, title: 'هناك حقيقة مثبتة منذ ', message: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص', date: '2024-07-04' },
  { id: 13, title: 'هناك حقيقة مثبتة منذ ', message: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص', date: '2024-07-7' },
  { id: 14, title: 'هناك حقيقة مثبتة منذ ', message: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص', date: '2024-01-31' },

];

const Notification = () => {
  const [sortedNotifications, setSortedNotifications] = useState([]);

  useEffect(() => {
    const sorted = [...notifications].sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedNotifications(sorted);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short' };
    return date.toLocaleDateString('ar-EG', options);
  };

  const groupNotificationsByUniqueDates = () => {
    const groupedNotifications = [];
    const uniqueDates = [];

    sortedNotifications.forEach(notification => {
      const formattedDate = notification.date;
      if (!uniqueDates.includes(formattedDate)) {
        uniqueDates.push(formattedDate);
        groupedNotifications.push({ date: formattedDate, notifications: [notification] });
      } else {
        const index = groupedNotifications.findIndex(group => group.date === formattedDate);
        if (index !== -1) {
          groupedNotifications[index].notifications.push(notification);
        }
      }
    });

    return groupedNotifications;
  };

  const groupedNotifications = groupNotificationsByUniqueDates();
  const latestDate = groupedNotifications[0]?.date;

  return (
    <section className="max-w-md mx-auto mt-4">
      <ReusableHeader label="الأشعارات"/>
      <div dir="rtl">
        {groupedNotifications.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-4 bg-[#F8F8F8] rounded-xl">
            <div className=" p-4 rounded-t-lg flex justify-between">
              {group.date === latestDate ? (
                <span className="text-black ml-2">الأحدث</span>
              ) : (
                <span className="text-black ml-2">الأقدم</span>
              )}
              <span className="text-black">{formatDate(group.date)}</span>
            </div>
            <div className="shadow-sm p-4">
              {group.notifications.map(notification => (
                <div key={notification.id} className="mb-4 last:mb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-DarkTan rounded-full flex justify-center items-center ml-2"></span>
                      <p className="font-bold text-sm text-gray-800 my-2">{notification.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#5C5C5C] my-2">{notification.message}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Notification;
