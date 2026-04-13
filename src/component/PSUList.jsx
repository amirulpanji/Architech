import { psuList } from "../data/psu";
import { useStore } from "../store/useStore";

export default function PSUList() {
    const setPSU = useStore((state) => state.setPSU);
    const selectedPSU = useStore((state) => state.selectedPSU);



    return (
        <div className="mb-6"> 
            <h2>Pilih PSU</h2>
            {psuList.map((psu) => (
                <button
                    key={psu.id}
                    onClick={() => setPSU(psu)}
                     className={`w-full mb-2 mt-2  p-3 rounded-xl border transition duration-200
                        ${
                            selectedPSU?.id === psu.id 
                            ? "bg-green-500/20 border-green-500"
                            : "bg-gray-800 border-gray-700 hover:bg-gray-700"
                        }`}
                    >
                    {psu.name} ({psu.wattage}W)
                    <br />
                    <span className="text-sm text-gray-400">
                        Rp {psu.price}
                    </span>
                </button>
            ))}
        </div>
    );
} 