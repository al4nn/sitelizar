"use client";

import { motion } from "framer-motion";
import { Code2, Layout, LucideIcon, Rocket, Smartphone } from "lucide-react";

type Servico = {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
};

const Services: Servico[] = [
    {
        id: 1,
        title: "Sites Institucionais",
        description:
            "Fortaleça sua autoridade online com um site que comunica a essência da sua marca com elegância e clareza.",
        icon: Code2,
    },
    {
        id: 2,
        title: "Landing Pages",
        description:
            "Páginas de alta conversão projetadas psicologicamente para transformar visitantes em leads qualificados.",
        icon: Layout,
    },
    {
        id: 3,
        title: "Otimização Mobile",
        description:
            "Experiência perfeita em qualquer dispositivo. Seu site responsivo e adaptável a todas as telas.",
        icon: Smartphone,
    },
    {
        id: 4,
        title: "SEO & Performance",
        description:
            "Otimização técnica para garantir que sua marca seja encontrada no topo das buscas do Google.",
        icon: Rocket,
    },
];

export const Servicos = () => {
    return (
        <section className="py-24 bg-dark relative" id="servicos">
            <div className="container">
                <div className="mb-16">
                    <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                        Soluções digitais <br />
                        <span className="text-gray-500">sob medida.</span>
                    </h2>
                    <div className="w-20 h-1 bg-green"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Services.map((service, index) => (
                        <motion.div
                            className="group relative p-8 rounded-2xl bg-gray border border-white/5 hover:border-blue/30 transition-all duration-300 overflow-hidden"
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-blue/10 transition-colors duration-500 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-black rounded-lg border border-white/10 flex items-center justify-center mb-6 text-brand-blue group-hover:text-brand-green group-hover:border-brand-green/30 transition-all">
                                    <service.icon size={24} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-2xl font-bold mb-3 font-display group-hover:text-brand-blue transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
