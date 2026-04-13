import { ramList } from "../data/ram";
import { useStore } from "../store/useStore";


export default function RAMList() {
    const setRAM = useStore((state) => state.setRAM);
    const selectedRAM = useStore((state) => state.selectedRAM);
    const selectedMotherboard = useStore((state) => state.selectedMotherboard);
    const filteredRAMList = selectedMotherboard
            ? ramList.filter((ram) => 
                ram.ramType === selectedMotherboard.ramType
            )
            : ramList;
    

    return (
        <div className="mb-6">
            <h2>Pilih RAM</h2>
            {filteredRAMList.map((ram) => {
                const IsSelected = selectedRAM?.id === ram.id;
                return (
                    <button
                        key={ram.id}
                        onClick={() => setRAM(ram)}
                        className={`w-full mb-2 mt-2  p-3 rounded-xl border transition duration-200
                            ${
                            IsSelected
                                ? "bg-green-500/20 border-green-500"
                                : "bg-gray-800 border-gray-700 hover:bg-gray-700"
                        }`}
                    >
                    {ram.name}
                    <br />
                    <span className="text-sm text-gray-400">
                        Rp {ram.price}
                    </span>
                </button>
                );
            })}
        </div>
    );
}