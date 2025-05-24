'use client';
import { useEffect } from 'react';
import useSocketIo from '@/hooks/useSocketIo';
import ChatSection from '@/components/pages/dashboard/pages/chat/chatSection';

export default function ChatPage(){
    const { joinRoom, sendMessage, on } = useSocketIo();

    const userId = "3b97c77c-731b-4102-99c0-28d310e196a3"; // substitua pelo userId real
    const receiverId = "484fe8db-0563-4022-91b2-80a3ddd5a599";
 
  useEffect(() => {
    // Entra na "sala" do usuário logado
    joinRoom(userId);

    // Ouve por mensagens recebidas
    on("receive_message", (message) => {
      console.log("Mensagem recebida:", message);
    });

    on("message_sent", (message) => {
      console.log("Mensagem enviada com sucesso:", message);
    });

    on("error_message", (errorMsg) => {
      console.error("Erro ao enviar:", errorMsg);
    });
  }, []);

    const handleSendMessage = (text: string) => {
      if(text.trim() === "") return; // Não envia mensagens vazias
    sendMessage({
      senderId: userId,
      receiverId,
      subject: "Mensagem via Chat",
      message: text,
    });
  };

   return (
     <div className='w-full h-full flex flex-col'>
      <ChatSection
      onSendMessage={handleSendMessage}
      />
     </div>
   );
}