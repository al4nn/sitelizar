"use client";

import { footer } from "@/types/global/footer";
import { scrollToHash } from "@/utils/scrollToHash";

export const Footer = ({ data }: { data: footer | null }) => {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <button
                            className="flex items-center gap-2 mb-6 cursor-pointer"
                            onClick={() => scrollToHash("home")}
                        >
                            <div
                                className="w-6 h-6 text-blue"
                                dangerouslySetInnerHTML={{
                                    __html: data?.logo.svg || "",
                                }}
                            />
                            <div
                                className="font-display font-bold text-2xl text-white"
                                dangerouslySetInnerHTML={{
                                    __html: data?.logo.texto ?? "",
                                }}
                            />
                        </button>
                        <p className="text-gray-500 max-w-sm mb-6">
                            {data?.texto}
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
                            {data?.servicos.map((servico, index) => {
                                return (
                                    <li key={index}>
                                        <button
                                            className="text-gray-500 hover:text-blue transition-colors text-sm cursor-pointer"
                                            onClick={() =>
                                                scrollToHash(
                                                    servico.link.url.substring(
                                                        1
                                                    )
                                                )
                                            }
                                        >
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: servico.link.title,
                                                }}
                                            />
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Empresa</h4>
                        <ul className="space-y-4">
                            {data?.links.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <button
                                            className="text-gray-500 hover:text-blue transition-colors text-sm cursor-pointer"
                                            onClick={() =>
                                                scrollToHash(
                                                    link.link.url.substring(1)
                                                )
                                            }
                                        >
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: link.link.title,
                                                }}
                                            />
                                        </button>
                                    </li>
                                );
                            })}
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
