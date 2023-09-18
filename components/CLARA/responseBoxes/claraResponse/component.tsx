'use client'
import React from 'react';
import styles from './styles.module.css';

interface UserResponseProps {
  message: string;
}

export default function ClaraResponse({ message }: UserResponseProps) {



  return (
    <div className={styles.claraResponse}>
      <img className={styles.iconImg} src='/icons/ChatbotIcon.png'/>
      <p className={styles.submitMessage}>{message}</p>
    </div>
  );
}
