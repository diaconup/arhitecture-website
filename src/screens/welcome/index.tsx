import React, { useEffect, useState } from 'react';
import { styles } from './styles';

const letters = ['R', 'O', 'T', 'A', 'R'];

const Welcome: React.FC = () => {
  const [visibleLetters, setVisibleLetters] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [animationClass, setAnimationClass] = useState('');
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    letters.forEach((letter, index) => {
      setTimeout(() => {
        setVisibleLetters((prev) => [...prev, letter]);
      }, index * 500); 
    });

    const cursorInterval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, 700);

    const vanishTimeout = setTimeout(() => {
      setAnimationClass('moveUpAndFadeOut');
      setTimeout(() => setIsVisible(false), 5000); 
    }, letters.length * 100 + 10000);

    return () => {
      clearTimeout(vanishTimeout);
      clearInterval(cursorInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div style={{ ...styles.welcomeContainer, animation: animationClass ? `${animationClass} 0.5s forwards` : undefined }}>
      <span style={styles.staticText}>ARIANA</span>
      {visibleLetters.map((letter, index) => (
        <span key={index} style={{ ...styles.letter(index), animation: `fadeInLetter 0.5s forwards` }}>
          {letter}
        </span>
      ))}
      {isCursorVisible && <span style={styles.cursor}>|</span>}
    </div>
  );
};

export default Welcome;
