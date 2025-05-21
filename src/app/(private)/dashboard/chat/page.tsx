'use client';
import { useEffect } from 'react';
import useSocketIo from '@/hooks/useSocketIo';

export default function ChatPage(){
    const { joinRoom, sendMessage, on } = useSocketIo();

    const userId = "e038c7da-8552-4ec2-a36a-8bd9f1e1be90"; // substitua pelo userId real
    const receiverId = "d5d17ca4-c61f-424f-be96-dc638176d6a1";
 
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

    const enviarMensagemTeste = () => {
    sendMessage({
      senderId: userId,
      receiverId,
      subject: "Testando Socket",
      message: "Olá! Esta é uma mensagem de teste via socket.",
    });
  };

   return (
     <div>
       <h1>Chat</h1>
       <button onClick={enviarMensagemTeste} className="bg-primary100">
         Enviar Mensagem de Teste
       </button>
     </div>
   );
}