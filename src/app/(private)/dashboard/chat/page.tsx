'use client';
import { useEffect, useState } from 'react';
import useSocketIo from '@/hooks/useSocketIo';
import ChatSection from '@/components/pages/dashboard/pages/chat/chatSection';
import { mapConversationResponse, useGetConversationsByUserId } from '@/hooks/useGetConversations';
import { Conversation } from '@/interfaces/conversation';

export default function ChatPage(){
  const { joinRoom, sendMessage, on } = useSocketIo();

  const userId = "3b97c77c-731b-4102-99c0-28d310e196a3";
  const receiverId = "484fe8db-0563-4022-91b2-80a3ddd5a599";

  const conversationsList = useGetConversationsByUserId(userId);

  const initialMessages = mapConversationResponse(conversationsList.data);

  // const [incomingMessage, setIncomingMessage] = useState<Conversation[]>([]);
  const [incomingMessage, setIncomingMessage] = useState<Conversation | null>(
    null
  );

  useEffect(() => {
    joinRoom(userId);

    on("receive_message", (newMessage: Conversation) => {
      console.log("Mensagem recebida:", newMessage);

      setIncomingMessage(newMessage);

    });

    on("message_sent", (message: Conversation) => {
      console.log("Mensagem enviada com sucesso:", message);

      // setIncomingMessage((prev) => [...prev, message]);
      setIncomingMessage(message);
    });

    on("error_message", (errorMsg) => {
      console.error("Erro ao enviar:", errorMsg);
    });
  }, [on, joinRoom, userId]);

  const handleSendMessage = (text: string) => {
    if (text.trim() === "") return; // Não envia mensagens vazias
    sendMessage({
      senderId: userId,
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
      />
    </div>
  );
}