'use client'
import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import styles from './styles.module.css';
import ClaraLottie from '../../public/lottie/ClaraLottie.json';
import { useLottie, useLottieInteractivity } from 'lottie-react';
import ClaraResponse from './responseBoxes/claraResponse/component'
import UserResponse from './responseBoxes/userResponse/component';

type ChatMessage = ClaraMessage | UserMessage;

interface ClaraMessage {
  type: 'clara';
  content: string;
  isTyping: boolean;
}

interface UserMessage {
  type: 'user';
  content: string;
}
export default function CLARA() {
  const [isOpen, setIsOpen] = useState(false);
  const [claraSpeed, setClaraSpeed] = useState(1);
  const [disableUserChat, setDisableUserChat] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const midContainerRef = useRef<HTMLDivElement>(null);


  const [messageList, setMessageList] = useState<ChatMessage[]>([{
    type: 'clara',
    content: 'Hey there! I’m Clara, your friendly AI chatbot. Ask me anything!',
    isTyping: false
  }]);

  const [lastClaraResponseIndex, setLastClaraResponseIndex] = useState<number>(0);

  //CLaRA lottie speeds
  const idle = 1;
  const thinking = 2.5;


  async function addClaraMessage(content = '', isTyping = false) {

    setMessageList((prev: ChatMessage[]) => {
      const updatedList = [...prev, { type: 'clara' as const, content, isTyping }]; // 'as const' ensures the type is 'clara', not just string
     // console.log(updatedList.length);
      setLastClaraResponseIndex(updatedList.length + 2);

      return updatedList;
    });
  }

  async function addUserMessage(content: string) {
    setMessageList((prev: ChatMessage[]) => {
      const updatedList = [...prev, { type: 'user' as const, content }]; // 'as const' ensures the type is 'user', not just string
      return updatedList;
    });
  }



  function updateClaraMessage(content: string, isTyping: boolean, updateIndex: number) {
    setMessageList(prev => prev.map((msg, idx) =>
      idx === updateIndex && msg.type === 'clara' ? { ...msg, content, isTyping } : msg

    ));

  }


  const handleSubmit = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue) {


      addUserMessage(inputValue);
      inputRef.current!.value = ""; // Clear the input
      setClaraSpeed(thinking);
      testing(inputValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !disableUserChat) {
      e.preventDefault();

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
    scrollToBottom(false);


  }, [messageList]);

  useEffect(() => {
    scrollToBottom(true);


  }, [isOpen]);

  async function scrollToBottom(opening: boolean) {
    if (midContainerRef.current) {
      const element = midContainerRef.current;
      element.style.scrollBehavior = opening ? 'auto' : 'smooth';
      if (!opening) {
        setTimeout(() => {
          element.scrollTop = element.scrollHeight;
        }, 50);
      } else {
        element.scrollTop = element.scrollHeight;
      }
    }
  }



  async function testing(inputQuestion: string) {
    console.log(process.env.NEXT_PUBLIC_CLARA_API_ACCESS);
    const customerID = "YourCustomerID";  // Replace with the actual customer ID
    const question = inputQuestion;
    const apiUrl = `https://${process.env.NEXT_PUBLIC_CLARA_API_ACCESS}/api/Chatbot/RequestHelpResponse/${customerID}/${question}`;
    console.log(lastClaraResponseIndex);
    const updateIndex : number = (lastClaraResponseIndex === 0 ? 3 : lastClaraResponseIndex) - 1;
    addClaraMessage(" ", true);

    const defaultErrorMessage: string = "Im sorry, I'm currently under maintenance and cannot process requests right now.";

    try {
      if (!disableUserChat) {
        setDisableUserChat(true);
        const response = await fetch(apiUrl)

        if (response.ok) {
          const data = await response.json();
          console.log("Received data:", data);

          //chnage clara response element message to the data.asnwer
          updateClaraMessage(data.answer, false, updateIndex);
        } else {
          console.log("Failed to fetch data");
        }
      } else {

        updateClaraMessage(defaultErrorMessage, false, updateIndex );
      }
    } catch (error) {
      console.log("An error occurred:", error);
      updateClaraMessage(defaultErrorMessage, false, updateIndex );
    }
    setClaraSpeed(idle);
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
        <div>
          {messageList.map((message, index) =>

            message.type === 'clara'
              ? <ClaraResponse key={index} message={message.content} isTyping={message.isTyping} />
              : message.type === 'user'
                ? <UserResponse key={index} message={message.content} />
                : null


          )}
        </div>
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
