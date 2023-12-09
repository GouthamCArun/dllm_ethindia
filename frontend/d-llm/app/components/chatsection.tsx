// chatsection.tsx
import React from 'react';

interface ChatSectionProps {
    messages: { id: number; text: string; user: boolean }[];
}

const ChatSection: React.FC<ChatSectionProps> = ({ messages }) => {
    const renderChatBubbles = () => {
        return messages.map((message) => (
            <div
                key={message.id}
                className={`p-2 flex flex-col rounded ${message.user == false ? 'text-white self-start' : '  self-end'} `}
            >
                <span className={`${message.user == false ? 'text-white self-start' : '  self-end'}`}>{message.user == false ? 'AI' : 'User'}</span>
                {message.text}
            </div>
        ));
    }

    return (
        <div className={` h-full ml-52  mr-56 flex flex-col justify-end }`}>
            <div className='p-2 flex flex-col' >
                {renderChatBubbles()}
            </div>
        </div>
    );
};

export default ChatSection;
