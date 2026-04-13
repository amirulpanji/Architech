import { useStore } from "../store/useStore";

export default function SelectedRAM() {

    const ram = useStore((state) => state.selectedRAM);

    return (
        <div>
            <h2>RAM Terpilih</h2>
            {ram ? (
                <p>{ram.name} ({ram.size}GB)</p>
            ) : (
                <p>Belum ada RAM yang dipilih.</p>
            )}
        </div>
    );
}