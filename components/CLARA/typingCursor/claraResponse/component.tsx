// TypingIndicator.js
import React from 'react';
import styles from './styles.module.css'; // Import or define your CSS here

const TypingIndicator = () => (
  <div className={styles.typingIndicator}>
    <span className={styles.blinkingCursor}>|</span>
  </div>
);

export default TypingIndicator;
