import { Home } from "@/types/pages/home";
import { useQuery } from "@tanstack/react-query";

const API =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://sitelizar-backend.localhost:8080/wp-json";

export function useHome() {
    return useQuery<Home>({
        queryKey: ["homePage"],
        queryFn: async () => {
            const response = await fetch(`${API}/page/home`);

            if (!response.ok) {
                throw new Error("Failed to fetch home page");
            }

            return response.json();
        },
        staleTime: 1000 * 60 * 2,
    });
}
