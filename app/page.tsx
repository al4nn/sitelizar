"use client";

import { useHome } from "@/hooks/useHome";
import { Banner } from "@/components/Banner";
import { Contato } from "@/components/Contato";
import { Servicos } from "@/components/Servicos";

export default function Home() {
    const { data, isLoading, error } = useHome();

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-dark">
                <div className="text-white text-xl">Carregando...</div>
            </div>
        );
    }

    if (error || !data?.sucesso) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-dark">
                <div className="text-red-500 text-xl">
                    Erro ao carregar a página:{" "}
                    {error?.message || data?.mensagem}
                </div>
            </div>
        );
    }

    const { banner_group, services_group, contact_group } = data.data.acfs;

    return (
        <main>
            <Banner data={banner_group} />
            <Servicos data={services_group} />
            <Contato data={contact_group} />
        </main>
    );
}
