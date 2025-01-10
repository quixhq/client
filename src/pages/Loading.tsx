import React, { useEffect, useState } from 'react';
import Logo from '@/components/Logo';

const LoadingPage: React.FC = () => {
  const [dots, setDots] = useState<string>(''); // State for dots
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate server request with a 3-second delay
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after response
    }, 3000);

    // Interval for dots animation (wiping effect)
    const dotsInterval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''));
    }, 500); // Change dots every 500ms

    return () => {
      clearTimeout(timer); // Clean up timer
      clearInterval(dotsInterval); // Clean up interval
    };
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white px-6 font-['Quicksand']">

      {/* Logo and Loading Section */}
      <div className="flex flex-col items-center">
        <div className="mb-[60px]">
          <Logo variant="funcky" />
        </div>
        <div className="text-center">
          <p className="text-4xl md:text-3xl font-semibold text-blue mb-2 font-serif">
            Loading{dots}
          </p>
          <p className="text-sm md:text-sm text-gray-500">Sit tight! We’re setting up your quiz</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
