'use client';
import React, { useEffect, useState } from "react";
import { ConversationItem } from "../conversationItem";
import { MessageItem } from "../messageItem";
import { on } from "events";
import { Conversation } from "@/interfaces/conversation";
import { mapChatResponse, useGetMessagesByChatId } from "@/hooks/useGetMessages";



type ChatSectionProps = {
  onSendMessage: (text: string) => void;
  conversationsList:Conversation[]; 
}

const ChatSection: React.FC<ChatSectionProps> = ({
  onSendMessage,
  conversationsList,
}) => {
  const [input, setInput] = useState("");
  const [currentChatId, setCurrentChatId] = useState("");

  const {data: fetchMessages} = useGetMessagesByChatId(currentChatId!);

  const mapMessages = mapChatResponse(fetchMessages);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  useEffect(() =>{
    console.log("currentChatId", currentChatId);
  }, [currentChatId])
  return (
    <div className="flex w-full h-full min-h-100vh">
      {/* Sidebar */}
      <div className="w-[400px] border-r border-[#ebebeb] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#ebebeb]">
          <h2 className="font-extrabold text-lg text-[#222222]">Mensagens</h2>
          <div className="w-10 h-10 bg-white rounded-[20px] flex items-center justify-center">
            <div className="w-4 h-4 bg-[url(/frame.svg)] bg-[100%_100%]" />
          </div>
        </div>

        <div className="flex flex-col divide-y gap-10 divide-[#ebebeb]">
          {conversationsList.map((c) => (
            <ConversationItem
              key={c.id}
              name={c.adopterName || ""}
              initial={
                c.adopterName
                  ? c.adopterName[0].toUpperCase()
                  : c.ongName
                  ? c.ongName[0]
                  : ""
              }
              color="#b80000"
              message={c.lastMessage?.body || ""}
              onClick={() => setCurrentChatId(c.id)}
              isSelected={currentChatId === c.id}
            />
          ))}
        </div>
      </div>

      {/* Main chat */}
      <div className="flex-1 flex flex-col">
        <div className="h-[72px] border-b border-[#ebebeb] flex items-center justify-between px-6">
          <h2 className="font-extrabold text-lg text-[#222222]">
            Renato Cardoso
          </h2>
          <div className="flex items-center gap-2">
            <div className="rounded-lg">
              <img className="w-4 h-4" alt="Icon" src="/icon.svg" />
            </div>
            <button className="bg-[#f7f7f7] rounded-[30px] border-2 border-[#222222] px-5 py-2.5">
              <span className="font-extrabold text-xs text-[#222222]">
                Denunciar
              </span>
            </button>
          </div>
        </div>

        <div className="flex-1 bg-white overflow-y-auto p-5">
          <div className="text-center mb-6">
            <span className="text-[11px] font-extrabold text-[#717171]">
              06 Novembro, 2024
            </span>
          </div>
          {mapMessages?.map((m) => (
            <MessageItem
              key={m.id}
              sender={m.senderId}
              avatar={m.senderId[0].toUpperCase()}
              avatarColor={"#a00000"}
              message={m.body}
              time={"10h"}
              isUser={m.senderId === currentChatId}
            />
          ))}
        </div>

        <div className="p-4 border-t border-[#ebebeb]">
          <div className="flex items-center rounded-[20px] border border-[#b0b0b0] overflow-hidden">
            <input
              className="flex-1 border-none py-[9px] px-4 rounded-[20px] focus:outline-none"
              placeholder="Mensagem"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              type="button"
              className="bg-[#b80000] text-white font-bold px-4 py-2 rounded-[20px] ml-2 hover:bg-[#a00000] transition-colors"
              onClick={() => on}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;