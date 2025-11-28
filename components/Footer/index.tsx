import { Code2 } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-6">
                            <Code2 className="w-6 h-6 text-brand-blue" />
                            <span className="font-display font-bold text-2xl text-white">
                                Sitelizar
                                <span className="text-brand-green">.</span>
                            </span>
                        </a>
                        <p className="text-gray-500 max-w-sm mb-6">
                            Criando o futuro da web, um pixel de cada vez.
                            Especialistas em design de interface e
                            desenvolvimento de alta performance.
                        </p>
                        {/* <div className="flex gap-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Twitter size={20} />
                            </a>
                        </div> */}
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Serviços</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    className="text-gray-500 hover:text-brand-blue transition-colors text-sm"
                                    href="#servicos"
                                >
                                    Sites Institucionais
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-gray-500 hover:text-brand-blue transition-colors text-sm"
                                    href="#servicos"
                                >
                                    Landing Pages
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-gray-500 hover:text-brand-blue transition-colors text-sm"
                                    href="#servicos"
                                >
                                    Otimização Mobile
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-gray-500 hover:text-brand-blue transition-colors text-sm"
                                    href="#servicos"
                                >
                                    SEO & Performance
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Empresa</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#contato"
                                    className="text-gray-500 hover:text-brand-blue transition-colors text-sm"
                                >
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} Sitelizar. Todos os
                        direitos reservados.
                    </p>
                    {/* <div className="flex gap-6">
                        <Link
                            href="#"
                            className="text-gray-600 hover:text-gray-400 text-sm"
                        >
                            Politica de Privacidade
                        </Link>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};
