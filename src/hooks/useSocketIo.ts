/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

interface MessagePayload {
  senderId: string;
  receiverId: string;
  subject: string;
  message: string;
}

const useSocketIo = () => {
  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    socket.current = io(process.env.NEXT_PUBLIC_SOCKET_IO as string, {
      transports: ["websocket"],
    });

    return () => {
      socket.current?.disconnect();
    };
  }, []);

  const emit = <T>(event: string, data: T) => {
    socket.current?.emit(event, data);
  };

  const on = <T>(event: string, callback: (data: T) => void) => {
    socket.current?.on(event, callback);
  };

  const joinRoom = (userId: string) => {
    emit("join", userId);
  };

  const sendMessage = (messageData: MessagePayload) => {
    emit("send_message", messageData);
  };

  return {
    emit,
    on,
    joinRoom,
    sendMessage,
  };
};

export default useSocketIo;
