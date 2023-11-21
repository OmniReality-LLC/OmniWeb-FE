// TypingIndicator.js
import React from 'react';
import styles from './styles.module.css'; // Import your CSS here

const TypingIndicator = () => (
  <span className={`${styles.typingIndicator} ${styles.blinkingCursor}`}>|</span>
);

export default TypingIndicator;
