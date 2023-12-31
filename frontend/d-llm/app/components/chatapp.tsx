"use client"
// ChatApp.tsx
import React, { useState } from 'react';
import {MetaMaskProvider } from '@metamask/sdk-react';
import MessageBar from './messagebar';
import ChatSection from './chatsection';
import Model from './model';
import Connectwalletbutton from './connectwalletbutton';


interface Message {
  id: number;
  text: string;
  user: boolean;
}

const ChatApp: React.FC = () => {
  const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask-Boilerplate",
      url: host, // using the host constant defined above
    },
  };
 
  const [showModal, setShowModal] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
   
  ]);

  const sendMessage = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, { id: prevMessages.length + 1, text: message, user: true }]);
  };

  const replyMessage =(message: string) => {
    setMessages((prevMessages) => [...prevMessages, { id: prevMessages.length + 1, text: message, user: false }]);
  };


  return (
    <div className='mb-10'>
      <ChatSection messages={messages} />
      <MessageBar onSendMessage={sendMessage} onReply={replyMessage} />
      <Model isvisible={showModal} onClose={async () => setShowModal(false)}>
     <div className='flex flex-col justify-center items-center'>
     <h1 className='text-4xl font-unbounded text-black'>DLLM</h1>
      <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
          <Connectwalletbutton />
        </MetaMaskProvider>
     </div>
      </Model>
    </div>
  );
};

export default ChatApp;
