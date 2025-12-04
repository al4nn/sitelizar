"use client";

import { ServicesGroup } from "@/types/pages/home";
import { motion } from "framer-motion";

export const Servicos = ({ data }: { data: ServicesGroup }) => {
    return (
        <section className="py-24 bg-dark relative" id="servicos">
            <div className="container">
                <div className="mb-16">
                    <div className="font-display font-bold text-4xl md:text-5xl mb-6" dangerouslySetInnerHTML={{ __html: data.titulo }} />
                    <div className="w-20 h-1 bg-green"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.itens.map((service, index) => (
                        <motion.div
                            className="group relative p-8 rounded-2xl bg-gray border border-white/5 hover:border-blue/30 transition-all duration-300 overflow-hidden scroll-m-24"
                            id={service.titulo
                                .toLowerCase()
                                .replaceAll(" ", "-")
                                .replace("çã", "ca")
                                .replace("&", "e")}
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue/10 transition-colors duration-500 pointer-events-none" />

                            <div className="relative z-10">
                                <div
                                    className="w-12 h-12 bg-black rounded-lg border border-white/10 flex items-center justify-center mb-6 text-blue group-hover:text-green group-hover:border-green/30 transition-all"
                                    dangerouslySetInnerHTML={{
                                        __html: service.svg,
                                    }}
                                />

                                <h3 className="text-2xl font-bold mb-3 font-display group-hover:text-blue transition-colors">
                                    {service.titulo}
                                </h3>

                                <p className="text-gray-400 leading-relaxed">
                                    {service.descricao}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
