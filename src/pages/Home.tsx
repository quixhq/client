import React, { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import JoinBtn from '@/components/JoinBtn';

const HomePage: React.FC = () => {
  const [authorName, setAuthorName] = useState<string>('John Blesswin');
  const [subtitle, setSubtitle] = useState<string>('Worldwide Health Survey');

  useEffect(() => {
    // Placeholder for fetching data dynamically in the future
    setAuthorName('John Blesswin');
    setSubtitle('Worldwide Health Survey');
  }, []);

  return (
    <div className="h-screen flex flex-col justify-between items-center bg-white px-6 font-['Quicksand']">

      {/* Logo and Subtitle Section */}
      <div className="flex flex-col items-center space-y-[60px] mt-32 md:mt-48">
        <Logo variant="funcky" />
        <div className="text-center">
          <p className="text-3xl md:text-3xl font-semibold text-blue mb-2 font-serif">
            {subtitle}
          </p>
          <p className="text-xs md:text-sm text-gray-500">By {authorName}</p>
        </div>
      </div>

      {/* Join Button with 100px spacing */}
      <JoinBtn/>

      {/* Footer at the bottom */}
      <p className="text-[10px] md:text-xs text-gray-500 mb-4 md:mb-8 text-center">
        By Participating in this experience, you agree to QuiX’s{' '}
        <a href="#" className="text-blue-600 underline">
          Terms & Conditions
        </a>
      </p>
    </div>
  );
};

export default HomePage;
