import React, { useRef, useEffect } from 'react';

interface InteractiveNameProps {
  name: string;
}

export const InteractiveName: React.FC<InteractiveNameProps> = ({ name }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const letters = container.querySelectorAll<HTMLSpanElement>('.name-letter');

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      letters.forEach((letter) => {
        const rect = letter.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2;
        const letterCenterY = rect.top + rect.height / 2;
        const dist = Math.hypot(mouseX - letterCenterX, mouseY - letterCenterY);
        // Proximity threshold of 200px (inspired by reference's 230px)
        const k = Math.max(0, 1 - dist / 200);
        letter.style.setProperty('--k', k.toFixed(3));
      });
    };

    const handleReset = () => {
      letters.forEach((letter) => {
        letter.style.setProperty('--k', '0');
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handleReset);
    container.addEventListener('mouseleave', handleReset);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handleReset);
      container.removeEventListener('mouseleave', handleReset);
    };
  }, []);

  return (
    <span
      ref={containerRef}
      className="interactive-name"
      aria-label={name}
      role="text"
    >
      {name.split('').map((char, index) => (
        <span
          key={index}
          className={`name-letter ${char === ' ' ? 'name-space' : ''}`}
          style={{ '--i': index } as React.CSSProperties}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};
