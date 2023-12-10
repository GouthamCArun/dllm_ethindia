// messagebar.tsx
import React, { useState, ChangeEvent } from 'react';
import { FaArrowUp, FaPaperclip } from 'react-icons/fa';
import lighthouse from '@lighthouse-web3/sdk';
import { getMyVariable } from './utils';
import { text } from 'stream/consumers';
import axios from 'axios';
import { MetaMaskInpageProvider } from '@metamask/providers';

interface MessageBarProps {
  onSendMessage: (message: string) => void;
  onReply:(message: string) => void;
}


const MessageBar: React.FC<MessageBarProps> = ({ onSendMessage ,onReply}) => {
  const [inputValue, setInputValue] = useState('');
  const [inputHeight, setInputHeight] = useState(40); // Initial height

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);

    // Adjust the height based on the input content
    setInputHeight(e.target.scrollHeight);
  };
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  const API_URL  = 'https://a06a-14-195-9-98.ngrok-free.app/data';

  const exportedValue = getMyVariable();
  const sendMessage = async () => {
    onSendMessage(inputValue);
    console.log(exportedValue);
    
    const text = inputValue;
    const apiKey = "c36903d2.9af58898843b4078b764f8fc80afb6b4";
    const name = "Alfred";
    const response = await lighthouse.uploadText(text, apiKey, name);

    let hash = response.data;
    console.log(hash["Hash"]);
    
   window.ethereum!
    .request({
      method: 'eth_sendTransaction',
      // The following sends an EIP-1559 transaction. Legacy transactions are also supported.
      params: [
        {
          from: exportedValue, // The user's active address.
          to: 0x650E422203665382BD36A3cA5e962297924b59e8,// Required except during contract publications.
          value: 1000000000000000, // Only required to send ether to the recipient from the initiating external account.
          gasLimit: '0x5028', // Customizable by the user during MetaMask confirmation.
          maxPriorityFeePerGas: '0x3b9aca00', // Customizable by the user during MetaMask confirmation.
          maxFeePerGas: '0x2540be400', // Customizable by the user during MetaMask confirmation.
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error(error));


    const res = await axios.post(`${CORS_PROXY}${API_URL}`,{
"data":hash["Hash"]
    })
    console.log('Server Response:', res.data);
    const reply = res.data;

    onReply(reply["result"]);
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
        <button className='text-white text-lg mt-1 pl-2 ml-2 h-8 w-8 hover:bg-slate-600 rounded-[500px] sendEthButton btn' onClick={sendMessage} ><FaArrowUp /></button>
      </div>
      Decentralized Custom Large-Language Model
    </div>
  );
};

export default MessageBar;
