import { useStore } from "../store/useStore";

export default function SelectedMotherboard() {
    const motherboard = useStore((state) => state.selectedMotherboard);

    return (
        <div>
            <h2>Motherboard Terpilih</h2>
            {motherboard ? (
                <p>{motherboard.name} ({motherboard.socket}, {motherboard.ramType})</p>
            ) : (
                <p>Belum ada Motherboard yang dipilih.</p>  
            )}
        </div>
    );
}