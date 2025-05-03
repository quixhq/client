import React, { useState } from "react";
import Logo from "@/components/Logo";
import JoinBtn from "@/components/JoinBtn";

const HomePage: React.FC = () => {
  const [code, setcode] = useState<string>("");

  return (
    <div className="h-screen flex flex-col justify-between items-center bg-white px-6 font-['Quicksand']">
      {/* Logo and Subtitle Section */}
      <div className="flex flex-col items-center space-y-[60px] mt-32 md:mt-48">
        <Logo variant="funcky" />
        <input
          type="text"
          className="border-2 border-gray-300 rounded-lg p-2 w-full max-w-md"
          placeholder="Enter quix code"
          value={code}
          onChange={(e) => setcode(e.target.value)}
        />
      </div>

      {/* Join Button with 100px spacing */}
      <JoinBtn sessionId={code} />

      {/* Footer at the bottom */}
      <p className="text-[10px] md:text-xs text-gray-500 mb-4 md:mb-8 text-center">
        By Participating in this experience, you agree to QuiX’s{" "}
        <a href="#" className="text-blue-600 underline">
          Terms & Conditions
        </a>
      </p>
    </div>
  );
};

export default HomePage;
