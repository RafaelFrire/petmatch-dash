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
import { useRouter } from "next/navigation";

export default function ChatPage() {
  const { data: sessionData, status } = useSession();
  const router = useRouter()

  const [receiverId, setReceiverId] = useState(
    sessionStorage.getItem("receiverId") || ""
  );
  const { joinRoom, sendMessage, on } = useSocketIo();

  const senderId = sessionData?.user.id;

  const {data:conversationsList, isLoading, isError} = useGetConversationsByUserId(senderId!);

  const initialMessages = mapConversationResponse(conversationsList);

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

  const handleSendMessage = (text: string) => {
    if (text.trim() === "") return; // Não envia mensagens vazias
    sendMessage({
      senderId: senderId!,
      receiverId: receiverId,
      subject: "Mensagem via Chat",
      message: text,
    });
  };

  useEffect(() => {
    if (status === "authenticated") {
      if (
        sessionData?.user?.role !== "ADOPTER" &&
        sessionData?.user?.role !== "ADMIN"
      ) {
        router.push("/");
      }
    } else if (status === "unauthenticated") {
      router.push("/login");
    }
    console.log("sessionData", sessionData?.user);
  }, [status, sessionData, router]);

  
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
    <div className="w-[80%] mx-auto h-full flex flex-col">
      <ChatSection
        onSendMessage={handleSendMessage}
        conversationsList={initialMessages}
        incomingMessage={incomingMessage}
        setReceiverId={setReceiverId}
        receiverId={receiverId}
        loggedUserId={senderId || ""}
        isOng={false}
      />
    </div>
  );
}
