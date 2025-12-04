"use client";

import { useContactForm } from "@/hooks/useContactForm";
import { useUiStore } from "@/stores/useUiStore";
import { Check, X } from "lucide-react";
import { useState } from "react";

export const ModalContato = () => {
    const { contatoOpen, closeContato } = useUiStore();
    const { mutate, isPending, isSuccess, isError, error } = useContactForm();

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        mutate(
            {
                nome: formData.nome,
                email: formData.email,
                telefone: formData.telefone,
                mensagem: formData.mensagem,
            },
            {
                onSuccess: () => {
                    setFormData({
                        nome: "",
                        email: "",
                        telefone: "",
                        mensagem: "",
                    });

                    setTimeout(() => {
                        closeContato();
                    }, 2000);
                },
            }
        );
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é dígito

        if (value.length <= 11) {
            value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
            value = value.replace(/(\d)(\d{4})$/, "$1-$2");
        }

        setFormData({ ...formData, telefone: value });
    };

    if (!contatoOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={closeContato}
            aria-label="Fechar"
        >
            <div
                className="bg-dark border border-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Fechar"
                    onClick={closeContato}
                >
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
                <p className="text-gray-400 mb-6">
                    Estamos prontos para transformar suas ideias em realidade.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input type="hidden" name="formContato" />
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Nome
                        </label>
                        <input
                            className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green"
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            disabled={isPending}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isPending}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Telefone
                        </label>
                        <input
                            className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green"
                            type="tel"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handlePhoneChange}
                            disabled={isPending}
                            maxLength={15}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Mensagem
                        </label>
                        <textarea
                            className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green resize-none"
                            rows={4}
                            name="mensagem"
                            value={formData.mensagem}
                            onChange={handleChange}
                            disabled={isPending}
                            required
                        />
                    </div>

                    <button
                        className="w-full px-6 py-3 bg-green text-black font-bold rounded-lg hover:bg-green/90 transition-colors cursor-pointer flex justify-center items-center gap-2"
                        type="submit"
                        disabled={isPending || isSuccess}
                    >
                        {isPending && (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                                Enviando...
                            </>
                        )}
                        {isSuccess && (
                            <>
                                <Check className="w-5 h-5" />
                                Enviado com sucesso!
                            </>
                        )}
                        {isError && (
                            <>
                                <X className="w-5 h-5" />
                                {error?.message}
                            </>
                        )}
                        {!isPending && !isSuccess && "Enviar Mensagem"}
                    </button>
                </form>
            </div>
        </div>
    );
};
