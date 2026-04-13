import { useStore } from "../store/useStore";

export default function CompabilityWarning(){
    const cpu = useStore((state) => state.selectedCPU);
    const gpu = useStore((state) => state.selectedGPU);
    const motherboard = useStore((state) => state.selectedMotherboard);
    const ram = useStore((state) => state.selectedRAM);
    const psu = useStore((state) => state.selectedPSU);

    if (!cpu || !gpu || !motherboard || !ram || !psu) {
        return null; // Tidak ada peringatan jika salah satu komponen belum dipilih
    }

    const isCpuMotherboardCompatible = cpu.socket === motherboard.socket;
    const isRamMotherboardCompatible = ram.ramType === motherboard.ramType;
    const isPsuGpuCompatible = psu.wattage >= gpu.wattage;
    const allCompatible = isCpuMotherboardCompatible && isRamMotherboardCompatible && isPsuGpuCompatible;
    
    return (
        <div className={`mt-20`}>
            <h3>Status Kompatibilitas:</h3>
            
            <ul className={`list-none p-0`}>
                {/* Status CPU & Motherboard */}
                <li style={{ color: isCpuMotherboardCompatible ? "green" : "red" }}>
                    {isCpuMotherboardCompatible 
                        ? `✅ Socket sesuai (${cpu.socket})` 
                        : `❌ Socket tidak cocok! CPU: ${cpu.socket}, MB: ${motherboard.socket}`}
                </li>

                {/* Status GPU & PSU */}
                <li style={{ color: isPsuGpuCompatible ? "green" : "red" }}>
                    {isPsuGpuCompatible 
                        ? `✅ Daya PSU cukup (${psu.wattage}W)` 
                        : `❌ Daya PSU kurang! GPU butuh ${gpu.wattage}W, PSU hanya ${psu.wattage}W`}
                </li>

                {/* Status RAM & Motherboard */}
                <li style={{ color: isRamMotherboardCompatible ? "green" : "red" }}>
                    {isRamMotherboardCompatible 
                        ? `✅ Tipe RAM sesuai (${ram.ramType})` 
                        : `❌ Tipe RAM tidak cocok! RAM: ${ram.ramType}, MB: ${motherboard.ramType}`}
                </li>
            </ul>

            <hr />

            {allCompatible ? (
                <p style={{ color: "green", fontWeight: "bold" }}>Semua komponen kompatibel dan siap rakit!</p>
            ) : (
                <p style={{ color: "red", fontWeight: "bold" }}>Beberapa komponen tidak kompatibel. Mohon periksa kembali.</p>
            )}
        </div>

    );
}

//{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }