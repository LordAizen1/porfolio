import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const characters = "01!@#$%^&*()_+-=[]{}|;:,.<>?/\\";

const DecryptText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      // Generate random characters
      const randomText = text
        .split("")
        .map((_, index) => {
          if (index < iterations) return text[index];
          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");

      setDisplayText(randomText);

      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3; // Speed of decryption (lower = slower)
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {displayText}
    </motion.span>
  );
};

export default DecryptText;