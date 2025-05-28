"use client";
import { useEffect, useState } from "react";
import useSocketIo from "@/hooks/useSocketIo";
import ChatSection from "@/components/pages/dashboard/pages/chat/chatSection";
import {
  mapConversationResponse,
  useGetConversationsByUserId,
} from "@/hooks/useGetConversations";
import { Conversation } from "@/interfaces/conversation";

export default function ChatPage() {
  const [receiverId, setReceiverId] = useState("");
  const { joinRoom, sendMessage, on } = useSocketIo();

  const senderId = "484fe8db-0563-4022-91b2-80a3ddd5a599";
  // const receiverId = "ce812dd9-ae19-49d6-8f5c-d585007cca03";

  const conversationsList = useGetConversationsByUserId(senderId);

  const initialMessages = mapConversationResponse(conversationsList.data);

  const [incomingMessage, setIncomingMessage] = useState<Conversation | null>(
    null
  );

  useEffect(() => {
    joinRoom(receiverId);

    on("receive_message", (newMessage: Conversation) => {
      console.log("Mensagem recebida:", newMessage);

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

  const handleSendMessage = (text: string) => {
    if (text.trim() === "") return; // Não envia mensagens vazias
    sendMessage({
      senderId: senderId,
      receiverId: receiverId,
      subject: "Mensagem via Chat",
      message: text,
    });
  };

  return (
    <div className="w-full h-full flex flex-col">
      <ChatSection
        onSendMessage={handleSendMessage}
        conversationsList={initialMessages}
        incomingMessage={incomingMessage}
        setReceiverId={setReceiverId}
        receiverId={receiverId}
      />
    </div>
  );
}
