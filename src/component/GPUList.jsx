import { gpuList } from '../data/gpu';
import { useStore } from '../store/useStore';
import { useEffect } from 'react';


export default function GPUList() {
    const setGPU = useStore((state) => state.setGPU);
    const selectedGPU = useStore((state) => state.selectedGPU);
    const selectedPSU = useStore((state) => state.selectedPSU);
    const filteredGPUList = selectedPSU
        ? gpuList.filter((gpu) => 
            parseInt(gpu.wattage) <= parseInt(selectedPSU.wattage)
        )
        : gpuList;

    return (
        useEffect(() => {
            if (!selectedPSU || !selectedGPU) return;

            const gpuWatt = parseInt(selectedGPU.wattage);
            const psuWatt = parseInt(selectedPSU.wattage);

            const isCompatible = gpuWatt <= psuWatt;

            if (!isCompatible) {
                    setGPU(null);
                }
            }, [selectedPSU, selectedGPU, setGPU]),


        <div className='mb-6'>
            <h2>Pilih GPU</h2>
            {filteredGPUList.map((gpu) => (
                <button
                    key={gpu.id}
                    onClick={() => setGPU(gpu)}
                     className={`w-full mb-2 mt-2  p-3 rounded-xl border transition duration-200
                        ${
                            selectedGPU?.id === gpu.id 
                            ? "bg-green-500/20 border-green-500"
                            : "bg-gray-800 border-gray-700 hover:bg-gray-700"
                        }`}
                    >
                    {gpu.name}
                    <br />
                    <span className="text-sm text-gray-400">
                        Rp {gpu.price}
                    </span>
                </button>
            ))}
            {filteredGPUList.length === 0 && (
                <p style={{ color: 'red' }}>Tidak ada GPU yang kompatibel dengan CPU {selectedPSU.name}</p>
            )}
        </div>
    );
}