import React from "react";

interface AvatarProps {
  initial: string;
  color: string;
  size?: string;
  textSize?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ initial, color, size = 'w-10 h-10', textSize = 'text-2xl' }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full ${size}`}
      style={{ backgroundColor: color }}
    >
      <span className={`${textSize} text-white font-light`}>{initial}</span>
    </div>
  );
};