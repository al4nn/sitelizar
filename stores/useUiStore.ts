import { create } from "zustand";

type UiState = {
    contatoOpen: boolean;
    openContato: () => void;
    closeContato: () => void;
};

export const useUiStore = create<UiState>((set) => ({
    contatoOpen: false,
    openContato: () => set({ contatoOpen: true }),
    closeContato: () => set({ contatoOpen: false }),
}));
