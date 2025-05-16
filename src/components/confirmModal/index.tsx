"use client";

import { Status } from "@/app/(private)/dashboard/adoption/page";

type DeleteModalProps = {
  setOpenModal: (status: boolean) => void;
  isOpenModal: boolean;
  onAction: () => void;
  typeAction: Status;
};

export const ConfirmModal: React.FC<DeleteModalProps> = ({
  onAction,
  setOpenModal,
  isOpenModal,
  typeAction
}) => {
    const message = {
        PENDING: "Você tem certeza que deseja deixar pendente?",
        APPROVED: "Você tem certeza que deseja Aprovar?",
        REJECTED: "Você tem certeza que deseja reprovar?",
    }
  return (
    <>
      {/* Modal */}
      {isOpenModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 max-w-sm w-full">
            <div className="flex justify-end">
              <button
                onClick={() => setOpenModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-white"
              >
                <span className="sr-only">Fechar</span>✕
              </button>
            </div>

            <div className="text-center">
              <svg
                className="w-20 h-20 mx-auto text-primary100 mb-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.72-1.36 3.485 0l5.451 9.7c.75 1.336-.213 3-1.742 3H4.548c-1.53 0-2.492-1.664-1.743-3l5.452-9.7zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-2a1 1 0 01-1-1V7a1 1 0 112 0v3a1 1 0 01-1 1z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {message[typeAction]}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                Essa ação não poderá ser desfeita.
              </p>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  onAction?.();
                  setOpenModal(false);
                }}
                className="px-4 py-2 text-sm bg-red-600 hover:bg-red-700 text-white rounded-lg"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
