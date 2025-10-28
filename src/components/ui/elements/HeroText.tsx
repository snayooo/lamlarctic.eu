"use client";
import { useState, useEffect } from "react";

export default function WelcomeText() {
  const words = ["Bienvenue", "Bures"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingSpeed = isDeleting ? 80 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <h1 className="text-4xl lg:text-7xl font-bold">
      {text}
      <span className="border-r-2 border-black ml-1 animate-pulse"></span>
    </h1>
  );
}
