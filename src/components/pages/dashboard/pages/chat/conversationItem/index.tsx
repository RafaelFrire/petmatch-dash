import { Avatar } from "@/components/avatar";

interface ConversationItemProps {
  name: string;
  initial: string;
  message: string;
  color: string;
}

export const ConversationItem: React.FC<ConversationItemProps> = ({ name, initial, message, color }) => {
  return (
    <div className="px-6 py-6 flex items-start gap-3">
      <Avatar initial={initial} color={color} size="w-14 h-14" textSize="text-[35px]" />
      <div className="flex flex-col gap-1">
        <div className="text-sm text-[#222222]">{name}</div>
        <div className="text-sm text-[#222222] line-clamp-2 w-[249px]">{message}</div>
      </div>
    </div>
  );
};