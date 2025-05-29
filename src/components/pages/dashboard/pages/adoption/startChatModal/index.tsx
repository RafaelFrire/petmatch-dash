"use client";

import { useState } from "react";

type StartChatModalProps = {
  isOpen: boolean;
  setOpen: (status: boolean) => void;
  onSend: (message: string) => void;
  petName: string;
  userName: string;
};

export const StartChatModal: React.FC<StartChatModalProps> = ({
  isOpen,
  setOpen,
  onSend,
  petName,
  userName
}) => {
  const defaultMessage = `Olá ${userName}, vimos que você tem interesse no pet ${petName}.`;

  const [message, setMessage] = useState(defaultMessage);

  const handleSend = () => {
    onSend(message);
    setOpen(false);
    setMessage(defaultMessage); // opcional: resetar
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Iniciar conversa
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-white"
          >
            ✕
          </button>
        </div>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white resize-none"
        />

        <div className="mt-4 flex justify-end space-x-3">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg"
          >
            Cancelar
          </button>
          <button
            onClick={handleSend}
            className="px-4 py-2 text-sm bg-primary100 hover:bg-primary60 text-white rounded-lg"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
