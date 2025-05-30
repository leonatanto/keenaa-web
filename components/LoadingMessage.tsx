"use client";

import { useEffect, useState } from "react";

const messages = [
  "Wrapping your little one in digital love...",
  "Preparing the perfect baby moments...",
  "Gathering precious parenting tips...",
  "Creating memories for your family...",
  "Cuddling your baby data with care...",
  "Sprinkling some baby magic...",
  "Warming up the baby bottle...",
  "Folding tiny digital onesies...",
  "Preparing the perfect nursery...",
  "Humming a digital lullaby...",
  "Rocking your baby's data gently...",
  "Getting everything cozy for your little one..."
];

export default function LoadingMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  }, []);

  return (
    <div className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg font-light animate-fade-in px-6">
      {message}
    </div>
  );
} 