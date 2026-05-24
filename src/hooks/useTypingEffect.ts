import { useState, useEffect } from 'react';

export function useTypingEffect(strings: string[], typingSpeed = 50, deletingSpeed = 30, pauseDuration = 2000) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    let timer = setTimeout(() => {
      const currentString = strings[loopNum % strings.length];
      
      if (isDeleting) {
        setText(currentString.substring(0, text.length - 1));
        setTypingDelay(deletingSpeed);
      } else {
        setText(currentString.substring(0, text.length + 1));
        setTypingDelay(typingSpeed);
      }

      if (!isDeleting && text === currentString) {
        setTypingDelay(pauseDuration);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingDelay(500); // pause before starting next string
      }
    }, typingDelay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, strings, typingSpeed, deletingSpeed, pauseDuration, typingDelay]);

  return text;
}
