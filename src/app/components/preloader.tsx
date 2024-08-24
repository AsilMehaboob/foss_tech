// components/Preloader.tsx
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/animation.json'; // Update the path

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <Lottie animationData={animationData} loop={true} className="w-40 h-40" />
    </div>
  );
};

export default Preloader;
