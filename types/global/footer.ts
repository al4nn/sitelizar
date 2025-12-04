import { AcfLink } from "./acfs";

export type footer = {
    logo: {
        svg: string;
        texto: string;
    };
    texto: string;
    servicos: Items[];
    links: Items[];
};

type Items = {
    link: AcfLink;
};
