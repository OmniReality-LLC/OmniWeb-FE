// ClaraResponse.js
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import TypingIndicator from '../../typingCursor/claraResponse/component';

interface ClaraResponseProps {
  message: string;
  isTyping: boolean; // New prop to control typing status
}

export default function ClaraResponse({ message, isTyping }: ClaraResponseProps) {
  const [displayMessage, setDisplayMessage] = useState(message);
  const [shouldType, setShouldType] = useState(isTyping);

  useEffect(() => {
    // Update the message display based on the typing status
    if (isTyping) {
      // Append the TypingIndicator to the message
      setDisplayMessage(message + " "); // Add a space for separation
      setShouldType(isTyping);

    } else {
      setDisplayMessage(message);
      setShouldType(isTyping);
    }
  }, [message, isTyping]);

  return (
    <>
    <div className={styles.claraResponse}>
      <img className={styles.iconImg} src='/icons/ChatbotIcon.png'/>
      <p className={styles.submitMessage}>
        {displayMessage}
        {shouldType && <TypingIndicator />}
      </p>

    </div>
    <div className={styles.lineSeperator}/>
    </>
  );
}
