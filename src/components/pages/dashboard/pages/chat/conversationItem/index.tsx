'use client';
import { Avatar } from "@/components/avatar";

type ConversationItemProps = {
  name: string;
  initial: string;
  message: string;
  color: string;
  isSelected?: boolean;
} & React.HTMLProps<HTMLDivElement>;

export const ConversationItem: React.FC<ConversationItemProps> = ({
  name,
  initial,
  message,
  color,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={`px-6 py-3 flex items-start gap-3 ${
        isSelected ? "bg-zinc-200" : "bg-white"
      }`}
      onClick={onClick}
    >
      <Avatar
        initial={initial}
        color={color}
        size="w-14 h-14"
        textSize="text-[35px]"
      />
      <div className="flex flex-col gap-1">
        <div className="text-sm text-[#222222]">{name}</div>
        <div className="text-sm text-[#222222] line-clamp-2 w-[249px]">
          {message}
        </div>
      </div>
    </div>
  );
};