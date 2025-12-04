import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    publicRuntimeConfig: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },

    images: {
        domains: [
            "localhost",
            "sitelizar-backend.localhost",
            "www.sitelizar.com.br",
        ],
    },
};

export default nextConfig;
