import React from 'react';

const PublicationProgressIndicator = ({ progress }) => {
  let indicatorColor = 'bg-gray-300';

  if (progress >= 10 && progress < 20) {
    indicatorColor = 'bg-DarkTan';
  } else if (progress >= 20 && progress < 30) {
    indicatorColor = 'bg-DarkTan';
  } else if (progress >= 30 && progress < 40) {
    indicatorColor = 'bg-DarkTan';
  } else if (progress >= 40 && progress < 50) {
    indicatorColor = 'bg-DarkTan';
  } else if (progress >= 50 && progress < 60) {
    indicatorColor = 'bg-DarkTan';
  } else if (progress >= 60 && progress < 70) {
    indicatorColor = 'bg-DarkTan';
  } else if (progress >= 70 && progress < 80) {
    indicatorColor = 'bg-DarkTan';
  } else if (progress >= 80 && progress < 90) {
    indicatorColor = 'bg-DarkTan';
  } else if (progress >= 90 && progress < 100) {
    indicatorColor = 'bg-DarkTan';
  }

  return (
    <div className="h-2 w-full rounded bg-gray-300">
      <div className={`h-full rounded ${indicatorColor}`} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default PublicationProgressIndicator;
