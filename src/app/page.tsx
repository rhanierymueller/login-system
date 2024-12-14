'use client';

import { useEffect, useState } from 'react';
import Login from './components/login/Login';

export default function Home() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const fullText = 'Where the magic happens';

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText((prev) => prev + fullText[index]);
      setIndex((prev) => (prev + 1) % (fullText.length + 1));

      if (index === fullText.length) {
        setText('');
      }
    }, 250);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="flex bg-cyan-50 w-full h-screen">
      <div className="flex flex-grow justify-center flex-col items-center p-24">
        <p className="text-gray-950 text-[48px] font-sans animate-fade-in">
          Welcome to the Sneat
        </p>
        <p className="text-gray-950 text-[16px] font-sans">{text}|</p>
      </div>
      <div className="flex justify-end items-center p-24">
        <Login />
      </div>
    </div>
  );
}
