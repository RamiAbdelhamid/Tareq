import React from 'react';

export default function AnimatedText({ text, className = '', delayStep = 0.05 }) {
  return (
    <span className={className} style={{ display: 'inline-block' }}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            opacity: 0,
            transform: 'translateY(30px)',
            animation: `fadeInUp 0.6s forwards`,
            animationDelay: `${i * delayStep}s`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
} 