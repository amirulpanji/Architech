import { useStore } from "../store/useStore";
import { FaUndo } from "react-icons/fa";
import { FaSave } from "react-icons/fa";




export default function BuildSummary() {
    const cpu = useStore((state) => state.selectedCPU);
    const gpu = useStore((state) => state.selectedGPU);
    const ram = useStore((state) => state.selectedRAM);
    const motherboard = useStore((state) => state.selectedMotherboard);
    const psu = useStore((state) => state.selectedPSU);
    const resetBuild = useStore((state) => state.resetBuild);

    // Cek apakah SEMUA komponen sudah dipilih
    const isComplete = cpu && gpu && ram && motherboard && psu;

    // Logika Kompatibilitas Spesifik
    const isCpuMbOk = cpu && motherboard && cpu.socket === motherboard.socket;
    const isRamMbOk = ram && motherboard && ram.ramType === motherboard.ramType;
    const isGpuPsuOk = gpu && psu && Number(gpu.wattage) <= Number(psu.wattage);

    // Status Akhir (Semua harus true)
    const allCompatible = isCpuMbOk && isRamMbOk && isGpuPsuOk;

    return (
        <div className={`p-4 w-100`}>
            <div className={`mb-2  `}>
                <h2>Ringkasan Build</h2>
                <p><strong>CPU:</strong> {cpu ? cpu.name : ""}</p>
                <p><strong>GPU:</strong> {gpu ? gpu.name : ""}</p>
                <p><strong>RAM:</strong> {ram ? ram.name : ""}</p>
                <p><strong>Motherboard:</strong> {motherboard ? motherboard.name : ""}</p>
                <p><strong>PSU:</strong> {psu ? psu.name : ""}</p>

                <hr className="my-4 border-gray-700 border-r " />

            
                <h2>Kompatibilitas</h2>
                
                <p className={ `p-1 items-center ${isCpuMbOk ? "text-green-500" : "text-red-500" } ` }>
                    CPU & Motherboard: {isCpuMbOk ? "Cocok" : "Tidak Cocok"}
                </p>
                
                <p className={`p-1 items-center gap-2 ${isRamMbOk ? "text-green-500" : "text-red-500" }` }>
                    RAM & Mobo: {isRamMbOk ? "Cocok" : "Tidak Cocok"}
                </p>

                <p className={ ` p-1 items-center gap-2  ${isGpuPsuOk ? "text-green-500" : "text-red-500" }` }>
                    GPU & PSU: {isGpuPsuOk ? "Cocok" : "Tidak Cocok"}
                </p>

                <hr className="my-4 border-gray-700 border-r " />

                {isComplete && (
                    <p className={`text-lg font-bold mt-20`}>
                        Status Akhir:{" "}
                        {allCompatible ? (
                            <span className="text-green-400">SIAP RAKIT ✅</span>
                        ) : (
                            <span className="text-red-500">CEK KEMBALI ❌</span>
                        )}
                    </p>
                )}

                <div className=" flex justify-center gap-4 w-full">
                    <button 
                        onClick={resetBuild} 
                        className="flex items-center mt-5 gap-1.5 bg-white hover:bg-gray-300 font-medium text-gray-800 py-2.5 px-4 rounded-xl"
                    >
                        <FaUndo />Reset
                    </button>
                    <button
                        onClick={resetBuild}
                        className="flex items-center mt-5 gap-1.5 bg-white hover:bg-gray-300 font-medium text-gray-800 py-2.5 px-4 rounded-xl"
                    >
                        <FaSave />Save

                    </button>
                </div>
            </div>
        </div>
    );
}
