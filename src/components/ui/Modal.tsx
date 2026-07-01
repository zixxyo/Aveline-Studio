import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-800 to-black rounded-lg shadow-xl max-w-lg w-full p-6 border border-gold-400 relative">
        <h2 className="text-2xl font-bold text-gold-300 mb-4">{title}</h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gold-200 hover:text-gold-400 text-3xl leading-none"
        >
          &times;
        </button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};