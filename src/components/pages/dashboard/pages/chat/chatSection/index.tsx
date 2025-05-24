'use client';
import React, { useState } from "react";
import { ConversationItem } from "../conversationItem";
import { MessageItem } from "../messageItem";
import { on } from "events";

const conversations = [
  {
    id: 1,
    name: "Peter Jordan",
    initial: "R",
    message:
      "Perfeito! Vou organizar minha agenda e já entro em contato para marcar visita. Obrigado!",
    color: "#b80000",
  },
  {
    id: 2,
    name: "Peter Jordan",
    initial: "R",
    message:
      "Perfeito! Vou organizar minha agenda e já entro em contato para marcar visita. Obrigado!",
    color: "#b80000",
  },
  {
    id: 3,
    name: "Renato Cardoso",
    initial: "R",
    message:
      "Perfeito! Vou organizar minha agenda e já entro em contato para marcar visita. Obrigado!",
    color: "#b80000",
  },
  {
    id: 4,
    name: "Bruna Melo",
    initial: "B",
    message: "Entendi! E vocês também acompanham a adaptação depois da adoção?",
    color: "#b80000",
  },
  {
    id: 5,
    name: "Cesar Keppler",
    initial: "C",
    message:
      " o Thor é um labrador de apenas 3 anos, super brincalhão e dócil.",
    color: "#b80000",
  },
  {
    id: 6,
    name: "Bianca Pinho",
    initial: "B",
    message: "Que gracinha! Ele se adapta bem a apartamentos?",
    color: "#b80000",
  },
];
const messages = [
  {
    id: 1,
    sender: "Renato",
    time: "10:54 PM",
    avatar: "R",
    avatarColor: "#222222",
    message:
      'Olá! Eu vi no site de vocês um gatinho chamado "Biscoito" para adoção e me interessei muito. Ele ainda está disponível?',
    isUser: true,
  },
  {
    id: 2,
    sender: "PetLovers",
    time: "10:54 PM",
    avatar: "P",
    avatarColor: "#b80000",
    message:
      "Olá! Sim, o Biscoito ainda está disponível para adoção! 😊 Fico feliz que tenha se interessado nele! Posso te ajudar com mais informações sobre ele?",
    isUser: false,
  },
  {
    id: 3,
    sender: "Renato",
    time: "10:54 PM",
    avatar: "R",
    avatarColor: "#222222",
    message:
      "Claro! Gostaria de saber um pouco mais sobre ele. Ele é tranquilo? Se dá bem com outros animais?",
    isUser: true,
  },
  {
    id: 4,
    sender: "PetLovers",
    time: "10:54 PM",
    avatar: "P",
    avatarColor: "#b80000",
    message:
      "Com certeza! O Biscoito é super carinhoso e adora brincar, especialmente com bolinhas e brinquedos de gato! Ele é um pouco tímido no começo, mas rapidamente se acostuma com pessoas. Ele se dá bem com outros gatos e está acostumado a conviver com cachorros também, então é bem sociável.",
    isUser: false,
  },
  {
    id: 5,
    sender: "Renato",
    time: "10:54 PM",
    avatar: "R",
    avatarColor: "#222222",
    message:
      "Que ótimo! Eu tenho um cachorro em casa, então é bom saber que ele já está acostumado. E sobre a saúde dele, ele está com todas as vacinas em dia?",
    isUser: true,
  },
];

type ChatSectionProps = {
  onSendMessage: (text: string) => void;
}

const ChatSection: React.FC<ChatSectionProps> = ({ onSendMessage }) => {
    const [input, setInput] = useState("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
        onSendMessage(input);
        setInput("");
    }
    };
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

        <div className="flex flex-col divide-y divide-[#ebebeb]">
          {conversations.map((c) => (
            <ConversationItem key={c.id} {...c} />
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
          {messages.map((m) => (
            <MessageItem key={m.id} {...m} />
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