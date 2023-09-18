// Assuming you are using a React component
// Your import paths should be correct; I'm just providing a basic example
'use client'
import React from 'react';
import styles from './styles.module.css';
import MyBtn from '../Buttons/component';

export default function ContactForm() {
  async function testing() {
    const customerID = "YourCustomerID";  // Replace with the actual customer ID
    const question = "What type of web service do you offer?";
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
    <div className={styles.contactFormMain}>
      <h1 className={styles.submitMessage}>Random messages</h1>
      <MyBtn text={'TESTING STUFF'} linkTo={''} onClick={testing} />
    </div>
  );
}
