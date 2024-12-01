"use client"
import React, { useState, useEffect } from 'react';
import CreateEvent from './CreateEvent';
import FindEvent from './FindEvent';
import GetStarted from './GetStarted';

const QuestionsComponent = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cards = [<CreateEvent />, <FindEvent />, <GetStarted />];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [cards.length]);

  return (
    <div className="m-[11px] flex flex-col gap-3 my-8 lg:hidden">
      {cards[activeCardIndex]}
    </div>
  );
};

export default QuestionsComponent;