'use client'
import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import styles from './styles.module.css';
import ClaraLottie from '../../public/lottie/ClaraLottie.json';
import { useLottie, useLottieInteractivity } from 'lottie-react';
import ClaraResponse from './responseBoxes/claraResponse/component'
import UserResponse from './responseBoxes/userResponse/component';
//

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
    if (e.key === 'Enter') {
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
    if (midContainerRef.current) {
      const element = midContainerRef.current;
      element.scrollTop = element.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    addMessage({type: 'clara', content: 'Hey there! I’m Clara, I’m your friendly AI chatbot who knows everything about this website. Go ahead, ask me anything!'})

  }, [])

  async function testing(inputQuestion: string) {
    const customerID = "YourCustomerID";  // Replace with the actual customer ID
    const question = inputQuestion;
    const apiUrl = `https://omnichatapi.azurewebsites.net/api/Chatbot/RequestHelpResponse/${customerID}/${question}`;

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

      <div className={styles.bottomContainer} style={disableUserChat ? { pointerEvents: 'none' } : { pointerEvents: 'auto' }}>
  {/* Gray overlay */}
  {disableUserChat && (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(128, 128, 128, 0.5)', // semi-transparent gray
      zIndex: 1
    }}>
    </div>
  )}

  {/* Replace input with textarea */}
  <textarea
    ref={inputRef as React.RefObject<HTMLTextAreaElement>}  // Casting to the correct type
    className={styles.inputBar}
    placeholder="Type a message..."
    onKeyDown={handleKeyDown}
  ></textarea>

  <button className={styles.submitButton} onClick={handleSubmit}>Submit</button>
</div>

    </div>
  );
}
