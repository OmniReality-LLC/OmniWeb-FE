'use client'
import React from 'react';
import styles from './styles.module.css';

interface UserResponseProps {
  message: string;
}

export default function UserResponse({ message }: UserResponseProps) {

  async function testing() {
    const customerID = "YourCustomerID";  // Replace with the actual customer ID
    const question = message;
    const apiUrl = `https://localhost:7085/api/Chatbot/RequestHelpResponse/${customerID}/${question}`;

    try {
      const response = await fetch(apiUrl)

      if (response.ok) {
        const data = await response.json();
        console.log("Received data:", data);
      } else {
        console.log("Failed to fetch data");
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  }

  return (
    <div className={styles.userResponse}>
      <img className={styles.iconImg} src='/icons/UserIcon.png'/>
      <p className={styles.submitMessage}>{message}</p>
    </div>
  );
}
