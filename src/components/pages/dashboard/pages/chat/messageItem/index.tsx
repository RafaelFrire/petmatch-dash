// components/messageItem.tsx
import React from "react";

interface MessageItemProps {
  message: string;
  time: string;
  sender: string;
  avatar: string;
  avatarColor: string;
  isUser: boolean;
}

export const MessageItem: React.FC<MessageItemProps> = ({
  message,
  time,
  avatar,
  avatarColor,
  isUser,
}) => {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      {!isUser && (
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-2"
          style={{ backgroundColor: avatarColor }}
        >
          {avatar}
        </div>
      )}

      <div
        className={`max-w-[70%] p-3 rounded-xl text-sm ${
          isUser
            ? "bg-[#f7f7f7] text-[#222] rounded-br-none"
            : "bg-primary100 text-white rounded-bl-none"
        }`}
      >
        <p>{message}</p>
        <span className="text-[10px] block mt-1 opacity-70">{time}</span>
      </div>

      {isUser && (
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ml-2"
          style={{ backgroundColor: avatarColor }}
        >
          {avatar}
        </div>
      )}
    </div>
  );
};
