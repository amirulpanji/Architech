import { cpuList } from "../data/cpu";
import { useStore } from "../store/useStore";

export default function CPUList(){
    const setCPU = useStore((state) => state.setCPU);
    const selectedCPU = useStore((state) => state.selectedCPU);
    


    return (
        <div className="mb-6">
            <h2>Pilih CPU</h2>
            {cpuList.map((cpu) => (
                <button
                    key={cpu.id}
                    onClick={() => setCPU(cpu)}
                    className={`w-full mb-2 mt-2  p-3 rounded-xl border transition duration-200
                        ${
                            selectedCPU?.id === cpu.id 
                            ? "bg-green-500/20 border-green-500"
                            : "bg-gray-800 border-gray-700 hover:bg-gray-700"
                        }`}
                    >   
                    {cpu.name}
                    <br />
                    <span className="text-sm text-gray-400">
                        Rp {cpu.price}
                    </span>
                </button>
            ))}
        </div>
    );
}