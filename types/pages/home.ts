import { AcfLink } from "../global/acfs";
import { SEO } from "../global/seo";

export type Home = {
    mensagem: string;
    sucesso: boolean;
    data: {
        SEO: SEO;
        acfs: {
            banner_group: BannerGroup;
            services_group: ServicesGroup;
            contact_group: ContactGroup;
        };
    };
};

export type BannerGroup = {
    titulo: string;
    subtitulo: string;
    texto_botao: string;
    url_botao: string;
};

export type ServicesGroup = {
    titulo: string;
    itens: ServiceItem[];
};

type ServiceItem = {
    svg: string;
    titulo: string;
    descricao: string;
};

export type ContactGroup = {
    titulo: string;
    subtitulo: string;
    habilitar_botao_do_whatsapp: boolean;
    url_whatsapp: AcfLink;
};
