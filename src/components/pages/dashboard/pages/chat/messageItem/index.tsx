// components/messageItem.tsx
import React from "react";

interface MessageItemProps {
  message: string;
  time: string;
  sender: string;
  avatar: string;
  avatarColor: string;
  isUserLogged: boolean;
}

export const MessageItem: React.FC<MessageItemProps> = ({
  message,
  time,
  avatar,
  avatarColor,
  isUserLogged,
}) => {
  return (
    <div className={`flex ${isUserLogged ? "justify-end" : "justify-start"} mb-4`}>
      {!isUserLogged && (
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-2"
          style={{ backgroundColor: avatarColor }}
        >
          {avatar}
        </div>
      )}

      <div
        className={`max-w-[70%] p-3 rounded-xl text-sm ${
          isUserLogged
            ? "bg-[#f7f7f7] text-[#222] rounded-br-none"
            : "bg-primary100 text-white rounded-bl-none"
        }`}
      >
        <p>{message}</p>
        <span className="text-[10px] block mt-1 opacity-70">{time}</span>
      </div>

      {isUserLogged && (
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
