"use client";

import { X } from "lucide-react";

interface ModalContatoProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ModalContato = ({ isOpen, onClose }: ModalContatoProps) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-dark border border-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    onClick={onClose}
                >
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
                <p className="text-gray-400 mb-6">
                    Estamos prontos para transformar suas ideias em realidade.
                </p>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Nome
                        </label>
                        <input
                            className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green"
                            type="text"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green"
                            type="email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Mensagem
                        </label>
                        <textarea
                            className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green resize-none"
                            rows={4}
                        />
                    </div>

                    <button
                        className="w-full px-6 py-3 bg-green text-black font-bold rounded-lg hover:bg-green/90 transition-colors cursor-pointer"
                        type="submit"
                    >
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </div>
    );
};
