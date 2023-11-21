'use client'
import React, { useState, useEffect, useRef } from 'react';
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
  const streamTestURL: string = 'https://localhost:7085/api/Chatbot/RequestHelpResponse/OmniDev/What%20is%20the%20name%20of%20the%20company?';


  const [messageList, setMessageList] = useState<ChatMessage[]>([{
    type: 'clara',
    content: 'Hey there! I’m Clara, your friendly AI chatbot. Ask me anything!',
    isTyping: false
  }]);

  const [lastClaraResponseIndex, setLastClaraResponseIndex] = useState<number>(0);

  //CLaRA lottie speeds
  const idle = 1;
  const thinking = 2.5;





  const handleSubmit = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue) {


      addUserMessage(inputValue);
      inputRef.current!.value = ""; // Clear the input
      setClaraSpeed(thinking);
      //testing(inputValue);
      fetchData(inputValue, true);

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

  function updateClaraMessage(newChunk: string | null, isTyping: boolean, updateIndex: number): void {
    // Function to extract content inside quotes and concatenate
    const extractAndConcatenateContent = (chunk: string): string => {
      const matches = chunk.match(/"[^"]+"/g);
      if (!matches) return '';

      return matches.map(s => {
        // Remove the surrounding quotes
        const text = s.replace(/"/g, '');
        // Replace specific newline patterns with the appropriate formatting
        if (text === "\\n\\n") return "\n\n";
        if (text === ":\\n\\n") return ":\n\n";
        if (text === ".\\n\\n") return ".\n\n";
        if (text === " \\n\\n") return " \n\n";
        if (text === ":\\n") return ":\n";
        return text === "\\n" ? "\n" : text;
      }).join('');
    };

    // If newChunk is null, turn off typing and do not update content
    if (newChunk === null) {
      setMessageList(prev => prev.map((msg, idx) =>
        idx === updateIndex && msg.type === 'clara' ? { ...msg, isTyping: false } : msg
      ));
      return;
    }

    // Extract and concatenate content from the chunk
    let extractedContent = newChunk ? extractAndConcatenateContent(newChunk) : '';

    // Rest of the function to update the message list
    setMessageList(prev => prev.map((msg, idx) => {
      if (idx === updateIndex && msg.type === 'clara') {
        // Append extracted content directly to the existing content
        const updatedContent = msg.content + extractedContent;

        return { ...msg, content: updatedContent, isTyping };
      }
      return msg;
    }));
  }







  async function fetchData(question: string, isStreaming: boolean): Promise<void> {
    setDisableUserChat(true);
    console.log(lastClaraResponseIndex);
    const updateIndex: number = (lastClaraResponseIndex === 0 ? 3 : lastClaraResponseIndex) - 1;
    const apiUrl = isStreaming
      ? `https://${process.env.NEXT_PUBLIC_CLARA_API_ACCESS}/api/Chatbot/stream-test/${question}`
      : `https://${process.env.NEXT_PUBLIC_CLARA_API_ACCESS}/api/Chatbot/non-stream-endpoint/${question}`;

    const defaultErrorMessage: string = "I'm sorry, I'm currently under maintenance and cannot process requests right now.";
    addClaraMessage(" ", true);

    try {
      if (disableUserChat) {
        updateClaraMessage(defaultErrorMessage, false, updateIndex);
        return; // Early return if user chat is disabled
      }

      const response = await fetch(apiUrl);

      if (response.ok) {
        if (isStreaming) {
          const reader = response.body?.getReader();
          while (true) {
            const { done, value } = await reader?.read() || {};
            if (done) {
              updateClaraMessage(null, false, updateIndex); // Turn off typing
              break;
            }
            if (value) {
              const chunk = new TextDecoder().decode(value);
              console.log("Received chunk:", chunk);

              // Process and update each chunk
              updateClaraMessage(chunk, true, updateIndex);

              // Check for the end of the stream signal
              if (chunk.includes("End of Stream") || chunk.includes("Condition to Break")) {
                updateClaraMessage(null, false, updateIndex); // Turn off typing
                break;
              }
            }
          }
        } else {
          // Handle non-streaming data
          const data = await response.json();
          console.log("Received data:", data);
          updateClaraMessage(data.answer, false, updateIndex);
        }
      } else {
        console.log("Failed to fetch data");
        updateClaraMessage(defaultErrorMessage, false, updateIndex);
      }
    } catch (error) {
      console.log("An error occurred:", error);
      updateClaraMessage(defaultErrorMessage, false, updateIndex);
    } finally {
      setClaraSpeed(idle);
      setDisableUserChat(false);
      // Ensure typing is off when done
      updateClaraMessage(null, false, updateIndex);
    }
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
