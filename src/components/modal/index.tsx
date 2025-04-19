// components/Modal.tsx
import { ReactNode } from 'react';
import { X } from 'lucide-react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-primary100 font-bold text-2xl hover:text-primary80"
        >
          <X height={25} width={25}  />
        </button>

        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}

        <div>{children}</div>
      </div>
    </div>
  );
}
