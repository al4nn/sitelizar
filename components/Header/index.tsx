"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-dark/30 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
            }`}
        >
            <div className="container h-20 flex items-center justify-between">
                <Link href="#" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 flex items-center justify-center bg-gray rounded-lg border border-white/10 group-hover:border-green/50 transition-colors">
                        <Code2 className="w-5 h-5 text-blue group-hover:text-green transition-colors" />
                    </div>
                    <span className="font-display font-bold text-xl tracking-tight text-white">
                        Sitelizar<span className="text-blue">.</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        className="text-sm font-medium text-gray-300 hover:text-blue transition-colors"
                        href="#servicos"
                    >
                        Serviços
                    </Link>
                    <Link
                        className="text-sm font-medium text-gray-300 hover:text-blue transition-colors"
                        href="#contato"
                    >
                        Contato
                    </Link>
                    <Link
                        href="#contato"
                        className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-blue transition-all"
                    >
                        Começar Projeto
                    </Link>
                </nav>

                <button
                    className="md:hidden p-2 text-gray-400 hover:text-light-gray"
                    onClick={() => setOpened(!opened)}
                >
                    {opened ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {opened && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark border-b border-white/10 overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            <Link
                                href="servicos"
                                className="text-lg font-medium text-gray-400 hover:text-blue transition-colors"
                                onClick={() => setOpened(false)}
                            >
                                Serviços
                            </Link>
                            <Link
                                href="#contato"
                                className="text-lg font-medium text-gray-400 hover:text-blue transition-colors"
                                onClick={() => setOpened(false)}
                            >
                                Contato
                            </Link>
                            <Link
                                href="#contato"
                                className="mt-2 text-center py-3 bg-blue text-dark font-bold rounded"
                                onClick={() => setOpened(false)}
                            >
                                Começar Projeto
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
