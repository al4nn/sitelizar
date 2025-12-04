import { SEO } from "./seo";

export type DefaultPage = {
    slug: string;
    type: string;
    title: string;
    content: string;
    post_id: number;
    SEO: SEO;
};
