'use client'
import React from 'react';
import styles from './styles.module.css';

interface UserResponseProps {
  message: string;
}

export default function UserResponse({ message }: UserResponseProps) {
return(

  <>
    <div className={styles.userResponse}>
      <img className={styles.iconImg} src='/icons/UserIcon.png'/>
      <p className={styles.submitMessage}>{message}</p>

    </div>
        <div className={styles.lineSeperator}> </div>

        </>

  );
}
