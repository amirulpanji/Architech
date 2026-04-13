import { useStore } from "../store/useStore";

export default function SelectedCPU() {
    const cpu = useStore((state) => state.selectedCPU);

    return (
        <div>
            <h2>CPU Terpilih</h2>
            {cpu ? (
                <p>{cpu.name} ({cpu.socket})</p>
            ) : (
                <p>Belum ada CPU yang dipilih.</p>
            )}
        </div>
    );
}