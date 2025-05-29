  /* eslint-disable @typescript-eslint/no-explicit-any */
  "use client";
  import React, { useEffect, useState } from "react";
  import { ConversationItem } from "../conversationItem";
  import { MessageItem } from "../messageItem";
  import { Conversation } from "@/interfaces/conversation";
  import {
    mapChatResponse,
    useGetMessagesByChatId,
  } from "@/hooks/useGetMessages";
  import SpinLoader from "@/components/spinLoader";
  import { Box } from "lucide-react";
import HeaderInputSearch from "../../adoption/headerInputSearch";

  type ChatSectionProps = {
    onSendMessage: (text: string) => void;
    conversationsList: Conversation[];
    incomingMessage: any;
    receiverId: string;
    setReceiverId: (receiverId: string) => void;
  };

  const ChatSection: React.FC<ChatSectionProps> = ({
    onSendMessage,
    conversationsList,
    incomingMessage,
    setReceiverId,
  }) => {
    const [input, setInput] = useState("");
    const [currentChatId, setCurrentChatId] = useState(
      sessionStorage.getItem("currentChatId") || null
    );
    const [messages, setMessages] = useState<any[]>([]);
    const chatContainerRef = React.useRef<HTMLDivElement>(null);

    const {
      data: fetchMessages,
      isLoading,
    } = useGetMessagesByChatId(currentChatId!);

    const mapMessages = mapChatResponse(fetchMessages);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && input.trim()) {
        onSendMessage(input);
        setInput("");
      }
    };

    function getAvatarInitial(
      senderId: string,
      adopterId: string | null,
      adopterName: string | null,
      ongName: string | null
    ): string {
      if (senderId === adopterId && adopterName) {
        return adopterName[0].toUpperCase();
      }

      if (ongName) {
        return ongName[0].toUpperCase();
      }

      return "";
    }

    function getReiceberAndChatId(receiverId:string, chatId:string){
      setReceiverId(receiverId);
      setCurrentChatId(chatId);
    }

    useEffect(() => {
      if (fetchMessages) {
        setMessages(mapChatResponse(fetchMessages));
      }
    }, [fetchMessages]);

    
useEffect(() => {
  if (
    incomingMessage &&
    incomingMessage.chatId === currentChatId
  ) {
    setMessages((prevMessages) => {
      const alreadyExists = prevMessages.some((m) => m.id === incomingMessage.id);
      if (alreadyExists) return prevMessages;

      const conv = conversationsList.find((c) => c.id === currentChatId);
      const enrichedMessage = {
        ...incomingMessage,
        adopterName: conv?.adopterName || null,
        ongName: conv?.ongName || null,
        isUser: conv?.adopterId === conv?.ongId ? true : false

      };

      return [...prevMessages, enrichedMessage];
    });
  }
}, [incomingMessage, currentChatId, conversationsList]);

    useEffect(() => {
      if (currentChatId) {
        sessionStorage.setItem("currentChatId", currentChatId);
        setMessages(mapMessages || []);
      }
    }, [currentChatId]);

    useEffect(() => {
      if (chatContainerRef.current) {
        // chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        chatContainerRef.current.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, [messages]);

    if (isLoading) {
      return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <SpinLoader />
        </div>
      );
    }
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

          <div className="flex flex-col divide-y min-h-[calc(100vh-100px)] max-h-[calc(100vh-100px)] divide-[#ebebeb] overflow-y-auto">
            <div className="w-[90%] mx-auto py-2">
              <HeaderInputSearch 
              />
            </div>
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
                onClick={() =>
                  getReiceberAndChatId(c.adopterId || "", c.id || "")
                }
                isSelected={currentChatId === c.id}
              />
            ))}
          </div>
        </div>

        {/* Main chat */}
        <div className="flex-1 flex flex-col">
          <div className="h-[72px] border-b border-[#ebebeb] flex items-center justify-between px-6">
            <h2 className="font-extrabold text-lg text-[#222222]">
              {mapMessages?.length > 0 && mapMessages[0].adopterName}
            </h2>
            <div className="flex items-center gap-2">
              <div className="rounded-lg">
                <Box />
              </div>
              <button className="bg-[#f7f7f7] rounded-[30px] border-2 border-[#222222] px-5 py-2.5">
                <span className="font-extrabold text-xs text-[#222222]">
                  Denunciar
                </span>
              </button>
            </div>
          </div>

          <div
            className="chat container flex-1 bg-white overflow-y-auto p-5 max-h-[calc(100vh-150px)] "
            ref={chatContainerRef}
          >
            <div className="text-center mb-6">
              <span className="text-[11px] font-extrabold text-[#717171]">
                06 Novembro, 2024
              </span>
            </div>
            {messages?.map((m) => (
              <MessageItem
                key={m.id}
                sender={m.senderId}
                avatar={getAvatarInitial(
                  m.senderId,
                  m.adopterId,
                  m.adopterName,
                  m.ongName
                )}
                avatarColor="#a00000"
                message={m.body}
                time={new Date(m.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                isUser={m.senderId === m.ongId}
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
                onClick={() => {
                  onSendMessage(input);
                  setInput("");
                }}
                disabled={!input.trim()}
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
