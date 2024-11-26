import React, { useState, useEffect } from "react";

const TypeWriter = ({ text, speed = 120 }) => {
  const [displayedText, setDisplayedText] = useState(""); // Store typed text
  const [index, setIndex] = useState(0); // Current index of the text

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index)); // Add next character
        setIndex((prev) => prev + 1); // Move to the next character
      }, speed);

      return () => clearTimeout(timer); // Clear the timer when unmounted or updated
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
