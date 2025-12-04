import { AcfLink } from "./acfs";

export type header = {
    logo: {
        svg: string;
        texto: string;
    };
    menu: MenuHeader[];
};

type MenuHeader = {
    link: AcfLink;
    highlight: boolean;
};
