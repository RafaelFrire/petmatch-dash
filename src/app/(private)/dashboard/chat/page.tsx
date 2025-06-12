/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import useSocketIo from "@/hooks/useSocketIo";
import ChatSection from "@/components/pages/dashboard/pages/chat/chatSection";
import {
  mapConversationResponse,
  useGetConversationsByUserId,
} from "@/hooks/useGetConversations";
import { Conversation } from "@/interfaces/conversation";
import { useSession } from "next-auth/react";
import SpinLoader from "@/components/spinLoader";

export default function ChatPage() {
  const {data: sessionData} = useSession();

  const [receiverId, setReceiverId] = useState("");
  const { joinRoom, sendMessage, on } = useSocketIo();

  const senderId = sessionData?.user.id;

  const {data:conversationsList, isLoading, isError} = useGetConversationsByUserId(senderId!);

  const initialMessages = mapConversationResponse(conversationsList);
  const [messages, setMessages] = useState<Conversation[]>(initialMessages);

  const [incomingMessage, setIncomingMessage] = useState<Conversation | null>(
    null
  );

  useEffect(() => {
    joinRoom(receiverId);

    on("receive_message", (newMessage: Conversation) => {
      setIncomingMessage(newMessage);
    });

    on("message_sent", (message: Conversation) => {
      console.log("Mensagem enviada com sucesso:", message);

      setIncomingMessage(message);
    });

    on("error_message", (errorMsg) => {
      console.error("Erro ao enviar:", errorMsg);
    });
  }, [on, joinRoom, senderId]);

  useEffect(() => {
    if (incomingMessage) {
      setMessages((prev) => [...prev, incomingMessage]);
    }
  }, [incomingMessage]);

  const handleSendMessage = (text: string) => {
    if (text.trim() === "") return; // Não envia mensagens vazias
    sendMessage({
      senderId: senderId!,
      receiverId: receiverId,
      subject: "Mensagem via Chat",
      message: text,
    });
  };


  if (isLoading) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <SpinLoader />
      </div>
    );
  }

  if(isError){
    return(
      <h1>is error...</h1>
    )
  }

  return (
    <div className="w-full h-full flex flex-col">
      <ChatSection
        onSendMessage={handleSendMessage}
        conversationsList={initialMessages}
        incomingMessage={incomingMessage}
        setReceiverId={setReceiverId}
        setMessages={setMessages}
        messages={messages}
        receiverId={receiverId}
        loggedUserId={senderId || ""}
        isOng={true}
      />
    </div>
  );
}
