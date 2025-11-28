import { Banner } from "@/components/Banner";
import { Contato } from "@/components/Contato";
import { Servicos } from "@/components/Servicos";

export default function Home() {
    return (
        <main>
            <Banner />
            <Servicos />
            <Contato />
        </main>
    );
}
