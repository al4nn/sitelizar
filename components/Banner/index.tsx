"use client";

import React from "react";
import { Bg } from "./Bg";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export const Banner: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            <Bg />

            <div className="relative z-10 w-full container flex flex-col items-center justify-center text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-green animate-pulse"></span>
                    <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Disponível para novos projetos
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.1] mb-6 text-light-gray"
                >
                    Vamos{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-green">
                        Sitelizar
                    </span>
                    <br />
                    sua marca?
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
                >
                    Desenvolvemos experiências digitais que conectam, convertem
                    e elevam o nível do seu negócio com design futurista e
                    performance extrema.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Link
                        href="#contato"
                        className="group relative px-8 py-4 bg-blue text-dark font-bold text-lg rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative flex items-center justify-center gap-2">
                            Iniciar Transformação{" "}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                className="absolute hidden md:block bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <ChevronDown size={24} />
            </motion.div>
        </section>
    );
};
