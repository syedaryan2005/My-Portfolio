import { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  texts: string[];
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ texts, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentIndex % texts.length];
      
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setTypingSpeed(100);
        
        if (displayText === currentText) {
          setTypingSpeed(2000); // Pause before deleting
          setIsDeleting(true);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
        
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex(currentIndex + 1);
          setTypingSpeed(500); // Pause before typing next text
        }
      }
    };

    timeoutRef.current = setTimeout(handleTyping, typingSpeed);
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <span className={`inline-block relative break-words ${className}`}>
      {displayText}
      <span className="inline-block w-0.5 h-[1em] ml-0.5 bg-primary animate-pulse" aria-hidden="true"></span>
    </span>
  );
};

export default AnimatedText;
