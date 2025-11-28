"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { ModalContato } from "@/components/ModalContato";
import Link from "next/link";

export const Contato = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section
            className="py-32 relative flex items-center justify-center overflow-hidden"
            id="contato"
        >
            <div className="absolute inset-0 bg-dark">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 container text-center">
                <motion.h2
                    className="font-display font-bold text-5xl md:text-6xl mb-8 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Pronto para o <br />
                    <span className="text-green">próximo nível?</span>
                </motion.h2>

                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Não deixe sua marca presa no passado. Vamos construir algo
                    extraordinário juntos.
                </p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <button
                        className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <Mail className="w-5 h-5" />
                    </button>
                    <Link
                        className="w-full sm:w-auto px-8 py-4 bg-green text-black font-bold text-lg rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 animate-pulse hover:animate-none"
                        href={"#wpp"}
                    >
                        <svg
                            className="size-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                                    fill="#0F0F0F"
                                ></path>{" "}
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                                    fill="#0F0F0F"
                                ></path>{" "}
                            </g>
                        </svg>
                        Whatsapp
                    </Link>
                </motion.div>
            </div>

            <ModalContato
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};
