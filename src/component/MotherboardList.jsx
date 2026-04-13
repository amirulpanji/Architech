import { motherboardList } from "../data/motherboard";
import { useStore } from "../store/useStore";
import { useEffect } from "react";

export default function MotherboardList() {
    const setMotherboard = useStore((state) => state.setMotherboard);
    const selectedMotherboard = useStore((state) => state.selectedMotherboard);
    const selectedCPU = useStore((state) => state.selectedCPU);
    const filteredMotherboardList = selectedCPU
        ? motherboardList.filter((mb) => 
            mb.socket.includes(selectedCPU.socket) 
        )
        : motherboardList;




    return (
        useEffect(() => {
            if (!selectedCPU || !selectedMotherboard) return;

            const isCompatible = selectedMotherboard.socket.includes(
                selectedCPU.socket
            );

            if (!isCompatible) {
                    setMotherboard(null);
                }
        }, [selectedCPU, selectedMotherboard, setMotherboard]),


        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Pilih Motherboard</h2>
            {filteredMotherboardList.map((mb) => (
                <button
                    key={mb.id}
                    onClick={() => setMotherboard(mb)}
                     className={`w-full mb-2 mt-2  p-3 rounded-xl border transition duration-200
                        ${
                            selectedMotherboard?.id === mb.id 
                            ? "bg-green-500/20 border-green-500"
                            : "bg-gray-800 border-gray-700 hover:bg-gray-700"
                        }`}
                    >
                    {mb.name} ({mb.socket}, {mb.ramType})
                    <br />
                    <span className="text-sm text-gray-400">
                        Rp {mb.price}
                    </span>          
                </button>
            ))}
        </div>
    );
}