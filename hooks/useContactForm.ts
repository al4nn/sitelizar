import { useMutation } from "@tanstack/react-query";

const API =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://sitelizar-backend.localhost:8080/wp-json";

type ContactFormData = {
    nome: string;
    email: string;
    telefone: string;
    mensagem: string;
};

type ContactFormResponse = {
    status: "mail_sent" | "validation_failed" | "mail_failed";
    message: string;
    invalid_fields?: Array<{
        field: string;
        message: string;
    }>;
};

export function useContactForm(formId: string = "103") {
    return useMutation<ContactFormResponse, Error, ContactFormData>({
        mutationFn: async (data) => {
            const formData = new FormData();
            formData.append("formContato", "Formulário de Contato");
            formData.append("nome", data.nome);
            formData.append("email", data.email);
            formData.append("telefone", data.telefone);
            formData.append("mensagem", data.mensagem);
            formData.append("_wpcf7", formId);
            formData.append("_wpcf7_version", "6.1.4");
            formData.append("_wpcf7_locale", "pt_BR");
            formData.append("_wpcf7_unit_tag", `wpcf7-f${formId}-o1`);
            formData.append("_wpcf7_container_post", "0");

            const response = await fetch(
                `${API}/contact-form-7/v1/contact-forms/${formId}/feedback`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!response.ok) {
                throw new Error("Falha ao enviar!");
            }

            return response.json();
        },
    });
}
