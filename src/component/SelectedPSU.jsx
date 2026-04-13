import { useStore } from "../store/useStore";

export default function SelectedPSU() {
    const psu = useStore((state) => state.selectedPSU);

    return (
        <div>
            <h2>PSU Terpilih</h2>
            {psu ? (    
                <p>{psu.name} ({psu.wattage}W)</p>
            ) : (
                <p>Belum ada PSU yang dipilih.</p>  
            )}
        </div>
    );
}