import { create } from 'zustand';



export const useStore = create((set) => ({
    selectedCPU: null,
    selectedGPU: null,
    selectedRAM: null,
    SelectedMotherboard: null,
    SelectedPSU: null,

    setCPU: (cpu) => set({ selectedCPU: cpu }),
    setGPU: (gpu) => set({ selectedGPU: gpu }),
    setRAM: (ram) => set({ selectedRAM: ram }),
    setMotherboard: (motherboard) => set({ selectedMotherboard: motherboard }),
    setPSU: (psu) => set({ selectedPSU: psu }),

    resetBuild: () =>
        set({
            selectedCPU: null,
            selectedGPU: null,
            selectedRAM: null,
            selectedMotherboard: null,
            selectedPSU: null
        })
}));