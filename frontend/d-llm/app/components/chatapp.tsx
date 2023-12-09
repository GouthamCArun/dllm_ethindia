"use client"
// ChatApp.tsx
import React, { useState } from 'react';
import MessageBar from './messagebar';
import ChatSection from './chatsection';

interface Message {
  id: number;
  text: string;
  user: boolean;
}

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hello from User', user: true },
    { id: 2, text: 'Hello from AI', user: false },
    { id: 3, text: 'What is apple?', user: true },
  ]);

  const sendMessage = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, { id: prevMessages.length + 1, text: message, user: true }]);
  };

  return (
    <div className='mb-10'>
      <ChatSection messages={messages} />
      <MessageBar onSendMessage={sendMessage} />
    </div>
  );
};

export default ChatApp;
