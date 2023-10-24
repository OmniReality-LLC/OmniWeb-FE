'use client'
import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import styles from './styles.module.css';
import ClaraLottie from '../../public/lottie/ClaraLottie.json';
import { useLottie, useLottieInteractivity } from 'lottie-react';
import ClaraResponse from './responseBoxes/claraResponse/component'
import UserResponse from './responseBoxes/userResponse/component';

type MessageType = 'user' | 'clara';
interface Message {
  type: MessageType;
  content: string;
}

export default function CLARA() {
  const [isOpen, setIsOpen] = useState(false);
  const [claraSpeed, setClaraSpeed] = useState(1);
  const [messages, setMessages] = useState<Message[]>([]);
  const [disableUserChat, setDisableUserChat] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const midContainerRef = useRef<HTMLDivElement>(null);
  //CLaRA lottie speeds
  const idle = 1;
  const thinking = 2.5;

  function addMessage(message: Message) {
    setMessages(prevMessages => [...prevMessages, message]);
  }

  const handleSubmit = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue) {
      addMessage({ type: 'user', content: inputValue });
      inputRef.current!.value = ''; // Clear the input

      setClaraSpeed(thinking);
      testing(inputValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !disableUserChat) {
      handleSubmit();
    }
  };

  const lottieProps = useLottie({
    animationData: ClaraLottie,
  });

  const lottieInteractivity = useLottieInteractivity({
    actions: [
      {
        type: 'play',
        frames: [0, 100],
      },
    ],
    mode: 'cursor',
    lottieObj: lottieProps,
  });

  useEffect(() => {
    if (lottieProps.setSpeed) {
      lottieProps.play();
      lottieProps.setSpeed(claraSpeed);
    }
  }, [lottieProps]);

  useEffect(() => {
    scrollToBottom();

    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);
  useEffect(() => {
    addMessage({ type: 'clara', content: 'Hey there! I’m Clara, I’m your friendly AI chatbot who knows everything about this website. Go ahead, ask me anything!' });
  }, []);

  async function scrollToBottom() {
    if (midContainerRef.current) {
      const element = midContainerRef.current;
      element.scrollTop = element.scrollHeight;
    }
  }

  async function testing(inputQuestion: string) {
    console.log(process.env.NEXT_PUBLIC_CLARA_API_ACCESS);
    const customerID = "YourCustomerID";  // Replace with the actual customer ID
    const question = inputQuestion;
    const apiUrl = `https://${process.env.NEXT_PUBLIC_CLARA_API_ACCESS}/api/Chatbot/RequestHelpResponse/${customerID}/${question}`;

    try {
      if (!disableUserChat) {
        setDisableUserChat(true); //disabling user chat so they cant send double messages
        const response = await fetch(apiUrl)

        if (response.ok) {
          const data = await response.json();
          console.log("Received data:", data);
          addMessage({ type: 'clara', content: data.answer });
          setClaraSpeed(idle);
        } else {
          console.log("Failed to fetch data");
        }
      } else {
        //Create a system message comp for this later
        addMessage({ type: 'clara', content: 'Im sorry, I cannot help right now as something appears to be wrong with my control modules' });
      }
    } catch (error) {
      console.log("An error occurred:", error);
      addMessage({ type: 'clara', content: 'Im sorry, I cannot help right now as something appears to be wrong with my control modules' });
    }
    setDisableUserChat(false);
  }

  return (
    <div className={`${styles.clara} ${isOpen ? styles.open : styles.closed}`}>
      <div className={`${styles.topContainer} ${isOpen ? styles.topConOpen : styles.topConClosed}`} onClick={() => setIsOpen(!isOpen)}>
        <h1 className={`${styles.title} ${isOpen ? styles.titleOpen : styles.titleClosed}`}>Let's Chat!</h1>
        <div className={styles.myLottie}>
          {lottieInteractivity}
        </div>
      </div>
      <div className={styles.midContainer} ref={midContainerRef}>
        {messages.map((message, index) => (
          <div key={index}>
            {message.type === 'user' ? (
              <UserResponse message={message.content} />
            ) : (
              <ClaraResponse message={message.content} />

            )}




          </div>
        ))}
      </div>

      <div className={styles.bottomContainer}>
        {/* Replace input with textarea */}
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}  // Casting to the correct type
          className={styles.inputBar}
          placeholder="Type a message..."
          onKeyDown={handleKeyDown}
        ></textarea>

        <button
          className={styles.submitButton}
          onClick={handleSubmit}
          disabled={disableUserChat}
          style={disableUserChat ? { cursor: "not-allowed", pointerEvents: "visiblePainted" } : { cursor: "pointer", pointerEvents: "auto" }}
        >
          Submit
        </button>
      </div>

    </div>
  );
}
