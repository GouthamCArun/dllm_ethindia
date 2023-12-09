// messagebar.tsx
import React, { useState, ChangeEvent } from 'react';
import { FaArrowUp, FaPaperclip } from 'react-icons/fa';

interface MessageBarProps {
  onSendMessage: (message: string) => void;
}

const MessageBar: React.FC<MessageBarProps> = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');
  const [inputHeight, setInputHeight] = useState(40); // Initial height

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);

    // Adjust the height based on the input content
    setInputHeight(e.target.scrollHeight);
  };

  const sendMessage = () => {
    onSendMessage(inputValue);
    setInputValue('');
    setInputHeight(40);
  };

  return (
    <div className=" flex flex-col items-center  justify-center mb-5 pr-3  ">

    <div className=" w-4/6 p-2 flex  border-none resize-none rounded-md text-white bg-[#3b1f5d]">
    <textarea
         className='w-5/6 p-2 bg-[#3b1f5d]'
         placeholder="Type your message..."
         value={inputValue}
         onChange={handleInputChange}
         style={{ height: `${inputHeight}px` }}
       />
       <button className='text-white text-lg mt-1 pl-2 ml-6 h-8 w-8 hover:bg-slate-600 rounded-[500px] ' ><FaPaperclip /></button>
       <button className='text-white text-lg mt-1 pl-2 ml-2 h-8 w-8 hover:bg-slate-600 rounded-[500px]' onClick={sendMessage} ><FaArrowUp  /></button>
    </div>
         Decentralized Custom Large-Language Model
     </div>
  );
};

export default MessageBar;
