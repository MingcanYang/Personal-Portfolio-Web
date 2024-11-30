/*
Copyright (c) 2024 Mingcan Yang
Licensed under the MIT License. See LICENSE file for details.
*/

import React, { useState, useEffect } from "react";

const TypeWriter = ({ text, speed = 120 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return (
    <span className="inline-flex items-center bg-clip-text text-gray-300 text-2xl md:text-2xl">
      {displayedText}
      <span className="ml-2 w-1 h-9 text-gray-300 font-bold animate-blink">|</span>
    </span>
  );
};

export default TypeWriter;
